import {
  handleAddTask,
  handleCompleteTask,
  handleRemoveTask,
  handleGetTasks,
} from "./controllers/task-controller.js";
import { showError } from "./views/console-view.js";

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case "add":
    handleAddTask(argument);
    break;

  case "list":
    handleGetTasks();
    break;

  case "complete":
    handleCompleteTask(argument);
    break;

  case "remove":
    handleRemoveTask(argument);
    break;

  default:
    showError("Comando inválido.");
}
