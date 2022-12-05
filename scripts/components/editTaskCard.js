function editTaskCardComponent(task) {
  return `
    <div class="backdrop" id="taskEditor">
      <form class="editTaskContainer">
        <header>
          <span class="title">
            Editar tarefa
            <span class="material-symbols-rounded"> edit </span>
          </span>
          <span class="taskId">#${task.id}</span>
        </header>
        <textarea id="textarea" rows="6" required>${task.text}</textarea>
        <footer>
          <button class="cancel" type="button" onclick="closeTaskEditor()">Cancelar</button>
          <button class="save" type="submit" onclick="saveTaskEdited(event, ${task.id})">Salvar</button>
        </footer>
      </form>
    </div>
  `;
}

function closeTaskEditor() {
  document.body.removeChild(document.querySelector("#taskEditor"));
}

function saveTaskEdited(event, id) {
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  var taskIndex;
  const taskFound = taskList.find((task, index) => {
    taskIndex = index;
    return task.id === id;
  });
  const textarea = document.querySelector("#textarea");

  if (textarea.value) {
    taskFound.text = textarea.value.trim();
    taskList.splice(taskIndex, 1, taskFound);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    loadTaskList();
    closeTaskEditor();
  }

  event.preventDefault();
}
