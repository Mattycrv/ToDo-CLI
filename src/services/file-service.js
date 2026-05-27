import fs from "fs";

const TASKS_FILE = "src/data/tasks.json";

export function readTasks() {
  const textContent = fs.readFileSync(TASKS_FILE, "utf8");
  const textData = JSON.parse(textContent);
  return textData;
}

export function saveTasks(tasks) {
  const jsonData = JSON.stringify(tasks, null, 2);

  try {
    fs.writeFileSync(TASKS_FILE, jsonData);
    console.log("Arquivo salvo com sucesso na raiz do projeto!");
  } catch (err) {
    console.error("Erro ao salvar o arquivo:", err);
  }
}
