const blurOverlay = document.getElementById("blurOverlay");


// -----------------> ADD Webstash Form <-----------------
const addForm = document.getElementById("add-form");
const addFormBtn = document.getElementById("add-web");
const closeAddFormBtn = document.getElementById("closeAddForm");



addFormBtn.addEventListener("click", () => {
  blurOverlay.style.display = "block";
  addForm.style.display = "block";
})

closeAddFormBtn.addEventListener("click", () => {
  blurOverlay.style.display = "none";
  addForm.style.display = "none";
});
// -------------------------------------------------------


// ----------------- Responsive Header -------------------
function responsiveHeader(){
  const width = window.innerWidth;
  const paragraph = document.getElementById("sub-title");
  const loginIcon = document.getElementById("openModalBtn");
  const title = document.getElementById("title");
  const homeIcon = document.querySelector(".home-icon")
  
  if(width <= 575){
    paragraph.style.display = "none";
    if(loginIcon) loginIcon.style.width = "40px";
    homeIcon.style.width = "30px";
    title.style.marginTop = "10px";
  } else {
    paragraph.style.display = "block";
    if(loginIcon) loginIcon.style.width = "50px";
    homeIcon.style.width = "40px";
    title.style.marginTop = "0px";
  }
}
// -------------------------------------------------------



// ---------- Responsive Authentication Card -------------
function responsiveAuthenticationCard(){
  const width = window.innerWidth;
  const password = document.getElementById("authentication-password");
  const btn = document.getElementById("authentication-btn");
  
  if(width <= 450){
    password.placeholder = "enter password";
    btn.innerText = "Login";
  }
  else {
    password.placeholder = "enter admin password";
    btn.innerText = "Authenticate";
  }
}
// -------------------------------------------------------


// ---------- Responsive Authentication Card -------------
function responsiveAddEditCard(id){
  const width = window.innerWidth;
  const Form = document.getElementById(id);

  if(!Form) return;
  
  const formWidth = 100 - ((Math.floor(width / 250) + 1) * 10);
  
  Form.style.width = `${formWidth}%`;
}
// -------------------------------------------------------


// ---------- Responsive Authentication Card -------------
function responsiveConfirmDeleteCard(){
  const width = window.innerWidth;
  const Form = document.getElementById("delete-confirm-form");

  if(!Form) return;
  
  const formWidth = 100 - ((Math.floor(width / 250) + 2) * 10);
  
  Form.style.width = `${formWidth}%`;
}
// -------------------------------------------------------


// ---------------- Responsive Handler -------------------
function responsive(){
  responsiveHeader();
  responsiveAuthenticationCard();
  responsiveAddEditCard("add-form");
  responsiveAddEditCard("edit-form");
  responsiveConfirmDeleteCard();
}
// -------------------------------------------------------

window.addEventListener("resize", responsive);
window.addEventListener("load", responsive);
