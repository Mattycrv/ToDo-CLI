import chalk from "chalk";

export function showTaskCreated(task) {
  console.log(chalk.bold.green(`✅ Tarefa adicionada com sucesso!`));
  console.log(chalk.blue(`ID: ${task.id}`));
  console.log(chalk.blue(`Descrição: ${task.text}`));

  if (task.completed) {
    console.log(chalk.bold.green(`Status: Completa`));
  } else {
    console.log(chalk.bold.red(`Status: Pendente`));
  }

  console.log(chalk.blue(`Data de criação: ${task.createdAt}`));
}

export function showTasks(tasks) {
  if (tasks.length === 0) {
    console.log(chalk.bold.yellow(`⚠️​  Sua lista de tarefas está vazia!`));
  } else {
    console.log(chalk.bold.green(`📋​ Lista de tarefas:`));
    tasks.forEach((task, index) => {
      task.completed
        ? console.log(
            chalk.strikethrough.blue(`${index + 1} - [x] ${task.text}`),
          )
        : console.log(chalk.blue(`${index + 1} - [ ] ${task.text}`));
    });
  }
}

export function showTaskCompleted(task) {
  console.log(
    chalk.bold.green(`✅ A sua tarefa: "${task.text}" foi completada!`),
  );
}

export function showTaskRemoved(task) {
  console.log(chalk.bold.green(`✅ Você removeu a tarefa: "${task.text}"!`));
}

export function showError(message) {
  console.log(chalk.bold.red(message));
}
