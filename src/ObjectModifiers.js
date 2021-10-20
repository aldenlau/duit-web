function addNewTask(newTask, state) {
    /**
     * Given a task, return a copy of the given state with the task added.
     */
    let copy = new Map();

    if (state.has(newTask.dueDate)) {
      for (let [date,dateTasks] of state) {
        copy.set(date, dateTasks);
        if (date===newTask.dueDate) {
          copy.get(date).push(newTask);
        }
      }
    }
    else {
      let found = false;
      for (let [date, dateTasks] of state) {
        if (!found && date>newTask.dueDate) {
          copy.set(newTask.dueDate, [newTask]);
          found = true;
        }
        copy.set(date, dateTasks);
      }
      if (!found) copy.set(newTask.dueDate, [newTask]);
    }

    return copy;
}

  function removeTask(taskDate, taskId, state) {
    let copy = new Map();
    let removedTask;
    for (let [date, dateTasks] of state) {
      if (date===taskDate) {
        if (dateTasks.length>1)
        {
          let newDateTasks = [];
          for (let task of dateTasks) {
            if (task.taskId!==taskId) {
              newDateTasks.push(task);
            }
            else removedTask = task;
          }
          copy.set(date, newDateTasks);
        }
        else {
          removedTask = {...dateTasks[0]};
        }
      }
      else {
        copy.set(date, dateTasks);
      }
    }
    return [copy, removedTask];
}

export {addNewTask, removeTask};