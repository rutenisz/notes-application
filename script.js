const notesContainer = document.querySelector(".notes-container");
const noteBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const createNote = () => {

  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  img.addEventListener("click", () => {
    inputBox.remove();
  });
};

noteBtn.addEventListener("click", createNote);
