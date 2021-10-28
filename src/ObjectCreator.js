function makeTasksObject(rawTasks) {
  /**
   * Given an array of tasks, make a tasks object for setState.
   */
  let tasks = new Map();
  for (let rawTask of rawTasks) {
    let task = {
      time: rawTask.time,
      remainingTime: rawTask.remaining_time,
      title: rawTask.title,
      desc: rawTask.description,
      priority: rawTask.priority,
      startDate: rawTask.start_date,
      dueDate: rawTask.due_date,
      taskId: rawTask.task_id
    };

    if (tasks.has(rawTask.due_date)) {
      tasks.get(rawTask.due_date).push(task);
    }
    else {
      tasks.set(rawTask.due_date, [task])
    }
  }
  return tasks;
}

export {makeTasksObject};