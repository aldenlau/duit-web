
import logo from './logo.svg';
import './App.css';
import DayTasks from './DayTasks.js';
import AddTask from './AddTask.js';
import React, {useState} from 'react';


function App() {
  const [tasks, setTasks] = useState(new Map());
  const [minTime, setMinTime] = useState(30);
  function addNewTask(newTask) {
    /**
     * Given a task, add the task to the tasks state.
     */
    let copy = new Map();

    if (tasks.has(newTask.dueDate)) {
      for (let [date,dateTasks] of tasks.entries()) {
        copy.set(date, dateTasks);
        if (date==newTask.dueDate) {
          copy.get(date).push(newTask);
        }
      }
    }
    else {
      let found = false;
      for (let [date, dateTasks] of tasks.entries()) {
        if (!found && date>newTask.dueDate) {
          copy.set(newTask.dueDate, [newTask]);
          found = true;
        }
        copy.set(date, dateTasks);
      }
      if (!found) {
        copy.set(newTask.dueDate, [newTask]);
      }
    }

    setTasks(copy);
    //console.log(newTask.dueDate);
    //console.log(tasks['2021/09/19'][0].title);
    for (let [date, dateTasks] of tasks) {
      console.log(date);
      for (let dateTask of dateTasks) {
        console.log(dateTask.title);
      }
    }
  }
  let taskDates = [];
  tasks.forEach((dateTasks, date) => taskDates.push(<DayTasks date={date} tasks={dateTasks} />))

  return (
    <div className="App">
      {taskDates}
      <AddTask taskHandler={task => addNewTask(task)} roundTime={minTime}/>
    </div>
  );
}

export default App;
