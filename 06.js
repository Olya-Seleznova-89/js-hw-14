//Необхідно відображати список завдань, які можна відмітити як виконані або невиконані. Для цього можна використовувати метод map ().

const tasks = [
    { task: "Купити", completed: true },
    { task: "Приготувати", completed: true },
    { task: "Поїсти", completed: false },
  ];
  
  const completedTasks = [1];
  const taskList = tasks.map((task) => {
  const done = completedTasks.includes(task.completed);
  return { task: task.task, done };
});
console.log(taskList);