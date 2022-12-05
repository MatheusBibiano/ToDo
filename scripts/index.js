function main() {
  render(taskListLengthComponent(), "#titleContainer");

  if (!isTaskListEmpty()) {
    updateTaskListLength();
    loadTaskList();
  }
}

main();
