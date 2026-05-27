import {
  addTask,
  getTasks,
  completeTask,
  removeTask,
} from "../services/task-service.js";
import {
  showTaskCreated,
  showTasks,
  showTaskCompleted,
  showError,
  showTaskRemoved,
} from "../views/console-view.js";

export function handleAddTask(description) {
  const newTask = addTask(description);
  showTaskCreated(newTask);
  return newTask;
}

export function handleGetTasks() {
  const tasks = getTasks();
  showTasks(tasks);
  return tasks;
}

export function handleCompleteTask(id) {
  const taskCompleted = completeTask(id);
  if (!taskCompleted) {
    showError("Esse ID é inexistente.");
  } else {
    showTaskCompleted(taskCompleted);
    return taskCompleted;
  }
}

export function handleRemoveTask(id) {
  const taskRemoved = removeTask(id);

  if (!taskRemoved) {
    showError("Não foi possível encontrar este ID.");
  } else {
    showTaskRemoved(taskRemoved);
    return taskRemoved;
  }
}
