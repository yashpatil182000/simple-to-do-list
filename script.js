const taskInput = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function onAddTaskClicked() {
  if (taskInput.value === "") {
    alert("Task Input Empty");
  } else {
    let taskItem = document.createElement("div");
    taskItem.className =
      "w-4/12 rounded-full self-center flex gap-2 items-center py-1";

    let newTask = document.createElement("p");
    newTask.className = "grow py-1 px-4 rounded-s-full bg-myGrey";
    newTask.innerHTML = taskInput.value;

    let checkBox = document.createElement("input");
    checkBox.id = "check-box";
    checkBox.type = "checkbox";
    checkBox.className = "accent-green-500 h-8 w-8";

    let removeTaskBtn = document.createElement("button");
    removeTaskBtn.id = "remove-task";
    removeTaskBtn.className =
      "bg-myYellow text-black font-bold text-center py-1 px-3 rounded-e-full hover:shadow-black shadow-lg hover:bg-myYellowDark";
    removeTaskBtn.textContent = "X";

    taskItem.appendChild(newTask);
    taskItem.appendChild(checkBox);
    taskItem.appendChild(removeTaskBtn);
    listContainer.appendChild(taskItem);
    taskInput.value = "";

    // saveData();
  }
}

listContainer.addEventListener("click", (e) => {
  if (e.target.id === "remove-task") {
    e.target.parentElement.remove();
    // saveData();
  } else if (e.target.id === "check-box") {
    e.target.parentElement.firstChild.classList.toggle("line-through");
    e.target.parentElement.classList.toggle("opacity-50");
    console.log(e.target.parentElement);

    // saveData();
  }
});

// saving local data trial

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showData() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showData();
