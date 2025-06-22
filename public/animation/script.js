const blurOverlay = document.getElementById("blurOverlay");



// ----------------> Authentication Card <----------------
// try{
//   const modal = document.getElementById("passwordModal");
//   const openModalBtn = document.getElementById("openModalBtn");
//   const closeModalBtn = document.getElementById("closeModal");



//   openModalBtn.addEventListener("click", () => {
//     blurOverlay.style.display = "block";
//     modal.style.display = "block";
//   });

//   closeModalBtn.addEventListener("click", () => {
//     blurOverlay.style.display = "none";
//     modal.style.display = "none";
//   });
// }
// catch(err){}
// -------------------------------------------------------


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


// -----------------> EDIT Webstash Form <-----------------
// const editForm = document.getElementById("edit-form");
// const editWebBtn = document.getElementById("edit-web");
// const closeEditFormBtn = document.getElementById("closeEditForm");



// editWebBtn.addEventListener("click", () => {
//   blurOverlay.style.display = "block";
//   editForm.style.display = "block";
// })

// closeEditFormBtn.addEventListener("click", () => {
//   blurOverlay.style.display = "none";
//   editForm.style.display = "none";
// });
// --------------------------------------------------------


// ----------------> Confirm DELETE Card <-----------------
// const deleteForm = document.getElementById("delete-confirm-form");
// const deleteFormBtn = document.getElementById("deleteBtn");
// const closeDeleteFormBtn = document.getElementById("closeDeleteConfirm");



// deleteFormBtn.addEventListener("click", () => {
//   blurOverlay.style.display = "block";
//   deleteForm.style.display = "block";
// })

// closeDeleteFormBtn.addEventListener("click", () => {
//   blurOverlay.style.display = "none";
//   deleteForm.style.display = "none";
// });
// --------------------------------------------------------