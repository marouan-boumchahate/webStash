import express from "express";
import bodyParser from "body-parser";
import db from './db.js';
import bcrypt from 'bcrypt';
import { promisify } from "util";
import session from "express-session";
import env from "dotenv";

env.config();


const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
        secure: false
    }
}));

function initializeSession(req){
    req.session.records = null,
    req.session.errorMSG = null,
    req.session.authenticated = req.session.authenticated || false,
    req.session.record = null,
    req.session.openEdit = false,
    req.session.openDelete = false,
    req.session.deleteID = null
}

function createRenderBody(req){
    return {
        records: req.session.records,
        errorMSG: req.session.errorMSG,
        authenticated: req.session.authenticated,
        record: req.session.record,
        openEdit: req.session.openEdit,
        openDelete: req.session.openDelete,
        deleteID: req.session.deleteID
    }
}

const serverErrorMessage = "Something went wrong with the server. Try Again Later!!";


app.get("/", (req, res) => {
    db.all("SELECT * FROM webs ORDER BY id DESC", [], (err, rows) => {
        if(err){
            req.session.errorMSG = serverErrorMessage;
            res.render("index.ejs", createRenderBody(req));
        }
        else {
            req.session.records = rows;
            res.render("index.ejs", createRenderBody(req));

            initializeSession(req);
        }
    });   
})

app.post("/search", (req, res) => {
    const keyword = `%${req.body.keyword}%`;

    db.all("SELECT * FROM webs WHERE title like ? OR description like ? ORDER BY id DESC", [keyword, keyword], (err, rows) => {
    if(err){
        req.session.errorMSG = serverErrorMessage;
        res.render("index.ejs", createRenderBody(req));
    }
    else {
        console.log(rows);
        req.session.records = rows;
        res.render("index.ejs", createRenderBody(req));

        initializeSession(req);
    }
    });  
})

app.post("/auth", async (req, res) => {
    const { password } = req.body;

    const getAsync = promisify(db.get).bind(db);

    try{
        const row = await getAsync("SELECT * FROM auth LIMIT 1");
        req.session.authenticated = await bcrypt.compare(password, row.admin_password);

        if(!req.session.authenticated) req.session.errorMSG = "Wrong Password!!";
    }
    catch(err) {
        req.session.errorMSG = serverErrorMessage;
    }

    res.redirect("/");
})

app.post("/add", (req, res) => {
    const { title, description, link } = req.body;

    db.run("INSERT INTO webs (title, description, link) VALUES (?,?,?)", [title, description, link], (err) => {
        if(err) req.session.errorMSG = serverErrorMessage
        
        res.redirect("/");
    });
})

// MIDDLEWARE CHECKS THAT THE ADMIN IS AUTHENTICATED
function isAuthenticated(req, res, next) {
    if(!req.session.authenticated){
        req.session.errorMSG = "Admin access required to this option.";
        return res.redirect("/");
    }

    next();
}

app.get("/update-web/:id", isAuthenticated, async (req, res) => {
    // if(!req.session.authenticated){
    //     req.session.errorMSG = "Admin access required to update web details.";
    //     return res.redirect("/");
    // }
    
    const getAsync = promisify(db.get).bind(db);
    const id = req.params.id;
    
    try{
        const row = await getAsync("SELECT * FROM webs WHERE id = ?", [id]);
        if(!row) req.session.errorMSG = "There is no such record!!";
        else {
            req.session.openEdit = true;
            req.session.record = row;
        }
    }
    catch(err){
        req.session.errorMSG = serverErrorMessage;       
    }

    res.redirect("/");
})

app.get("/confirm-delete/:id", isAuthenticated, (req, res) => {
    const id = req.params.id;

    req.session.openDelete = true;
    req.session.deleteID = id;

    res.redirect("/");
})

app.post("/edit/:id", isAuthenticated, async (req, res) => {
    const updateAsync = promisify(db.run).bind(db);
    
    const id = req.params.id;
    const {title, link, description} = req.body;

    try{
        await updateAsync("UPDATE webs SET title = ?, link = ?, description = ? WHERE id = ?", [title, link, description, id]);
    }
    catch{
        req.session.errorMSG = serverErrorMessage;
    }

    res.redirect("/");
})

app.post("/delete/:id", isAuthenticated, async (req, res) => {
    const id = req.params.id;

    const deleteAsync = promisify(db.run).bind(db);

    try{
        await deleteAsync("DELETE FROM webs WHERE id = ?", [id]);
    }
    catch{
        req.session.errorMSG = serverErrorMessage;
    }

    res.redirect("/");
})


app.use((req, res) => {
    res.status(404).render("404.ejs");
});


app.listen(PORT, () => {
    console.log("The app is running on PORT: ", PORT);
})