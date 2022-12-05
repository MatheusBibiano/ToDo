function taskCardComponent(task) {
  return `
    <li class="taskCard" id="${task.id}">
      <div class="taskContent">
      ${
        task.done
          ? `<button class="checked" onclick="toggleTaskStatus(${task.id})"><span class="material-symbols-rounded"> done </span></button>`
          : `<button class="unchecked" onclick="toggleTaskStatus(${task.id})"></button>`
      }
        ${
          task.done
            ? `<span style="text-decoration: line-through;">${task.text}</span>`
            : `<span style="text-decoration: none;">${task.text}</span>`
        }
      </div>
      <div class="options">
        <button class="option edit"
        title="Editar tarefa" onclick="openEditTask(${task.id})">
          <span class="material-symbols-rounded"> edit </span>
        </button>
        <button class="option delete" title="Excluir tarefa">
          <span class="material-symbols-rounded" onclick="deleteTask(${
            task.id
          })"> delete </span>
        </button>
      </div>
    </li>
  `;
}

function addNewTask(event, taskText) {
  if (!taskText) {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  };

  if (isTaskListEmpty()) {
    localStorage.setItem("taskList", JSON.stringify([newTask]));
  } else {
    const taskList = JSON.parse(localStorage.getItem("taskList"));
    taskList.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  render(taskCardComponent(newTask), "#taskList");
  updateTaskListLength();
  document.querySelector("#addTaskForm").reset();
  event.preventDefault();
}

function openEditTask(id) {
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  const taskFound = taskList.find((task) => task.id === id);
  render(editTaskCardComponent(taskFound), "body");
}

function deleteTask(id) {
  if (isTaskListEmpty()) {
    return;
  }

  const taskList = JSON.parse(localStorage.getItem("taskList"));
  const filteredTaskList = taskList.filter((task) => task.id !== id);

  localStorage.setItem("taskList", JSON.stringify(filteredTaskList));
  updateTaskListLength();
  loadTaskList();
}

function toggleTaskStatus(id) {
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  var taskIndex;
  const taskFound = taskList.find((task, index) => {
    taskIndex = index;
    return task.id === id;
  });

  taskFound.done
    ? (taskList[taskIndex].done = false)
    : (taskList[taskIndex].done = true);

  localStorage.setItem("taskList", JSON.stringify(taskList));
  loadTaskList();
}
