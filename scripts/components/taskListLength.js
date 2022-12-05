function taskListLengthComponent() {
  return `
    <span class="taskListLength" id="taskListLength">0</span>
  `;
}

function updateTaskListLength() {
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  document.querySelector("#taskListLength").innerHTML = taskList.length;
}
