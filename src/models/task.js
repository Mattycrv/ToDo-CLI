export function createTask(description) {
  const task = {
    id: crypto.randomUUID(),
    text: description,
    completed: false,
    createdAt: new Date().toISOString().split("T")[0],
  };

  return task;
}
