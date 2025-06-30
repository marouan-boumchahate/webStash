import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import env from 'dotenv';

env.config();

const db = new sqlite3.Database('./var/db/webstash.db');

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS webs (\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        title TEXT,\
        description TEXT,\
        link TEXT\
    )");

    db.run("CREATE TABLE IF NOT EXISTS auth (\
        admin_password TEXT UNIQUE\
    )");   
    

    bcrypt.hash(process.env.ADMIN_PASSWORD, 12)
        .then((hashedPassword) => {
            // This query ensures the password added only and only if the table is empty which means at the exact beginning of the program run
            const query = `
                INSERT INTO auth (admin_password)
                SELECT ?
                WHERE NOT EXISTS (SELECT 1 FROM auth)
            `;
            db.run(query, [hashedPassword], function (err) {
                if (err) console.error("Insert failed:", err);
            });
        })
        .catch(err => {
            console.error("Password hashing failed:", err);
        });
});

export default db;