function render(element, target) {
  document.querySelector(target).innerHTML += element;
}

function isTaskListEmpty() {
  if (!localStorage.length) {
    return true;
  }

  return false;
}

function loadTaskList() {
  document.querySelector("#taskList").innerHTML = "";
  const taskList = JSON.parse(localStorage.getItem("taskList"));

  for (let task of taskList) {
    render(taskCardComponent(task), "#taskList");
  }
}
