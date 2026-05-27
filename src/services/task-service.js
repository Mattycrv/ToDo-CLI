import { createTask } from "../models/task.js";
import { saveTasks, readTasks } from "./file-service.js";

export function addTask(description) {
  const tasks = readTasks();
  const newTask = createTask(description);
  tasks.push(newTask);
  saveTasks(tasks);

  return newTask;
}

export function getTasks() {
  const tasks = readTasks();
  return tasks;
}

export function completeTask(id) {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = true;
    saveTasks(tasks);
    return task;
  } else {
    return null;
  }
}

export function removeTask(id) {
  const tasks = readTasks();
  const taskRemoved = tasks.find((task) => task.id === id);
  if (taskRemoved) {
    const newArray = tasks.filter((task) => task !== taskRemoved);
    saveTasks(newArray);
    return taskRemoved;
  } else {
    return null;
  }
}
