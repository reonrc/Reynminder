//To-Do List!

const tskArray = [];
const tskBtn = document.querySelector("#tskAdd");
const tskInput = document.querySelector("#tskInput");
const ulTsk = document.querySelector("#ulTsk");

function addTask(taskText) {
  const newTsk = document.createElement("li");
  const del = document.createElement("button");
  const chckBtn = document.createElement("button");
  const tskSpan = document.createElement("span");
  const tskContainer = document.createElement("div");
  
  del.textContent = "Delete";
  chckBtn.textContent = "Done";
  tskSpan.textContent = taskText;
  
  tskContainer.classList.add("tskContainer");
  del.classList.add("del");
  chckBtn.classList.add("chckBtn");
  newTsk.classList.add("newTsk");
  
  tskContainer.appendChild(del);
  tskContainer.appendChild(chckBtn);
  newTsk.appendChild(tskSpan);
  newTsk.appendChild(tskContainer);
  ulTsk.appendChild(newTsk);
  
  del.addEventListener("click", function() {
    newTsk.style.opacity = "0";
    setTimeout(function() {
      newTsk.remove();
    }, 300);
    const index = tskArray.indexOf(taskText);
    tskArray.splice(index, 1);
    localStorage.setItem("tskArray", JSON.stringify(tskArray));
  });
  
  chckBtn.addEventListener("click", function() {
    newTsk.style.textDecoration = "line-through";
  });
}

tskBtn.addEventListener("click", function() {
  const taskText = tskInput.value;
  tskArray.push(taskText);
  localStorage.setItem("tskArray", JSON.stringify(tskArray));
  addTask(taskText);
});

const svdTsk = JSON.parse(localStorage.getItem("tskArray"));
if (svdTsk) {
  for (let i = 0; i < svdTsk.length; i++) {
    addTask(svdTsk[i]);
  }
}