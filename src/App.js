
import logo from './logo.svg';
import './App.css';
import DayTasks from './DayTasks.js';
import AddTask from './AddTask.js';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(new Map());
  const [minTime, setMinTime] = useState(30);
  const [completedTasks, setCompletedTasks] = useState(new Map());

  let taskDates = [];
  tasks.forEach((dateTasks, date) => taskDates.push(<DayTasks date={date} tasks={dateTasks} key={date} tasksState = {tasks} completedState={completedTasks} setTasksState={setTasks} setCompletedState={setCompletedTasks}/>))

  return (
    <div className="App">
      {taskDates}
      <AddTask 
        roundTime={minTime} 
        setTaskState={setTasks} 
        tasksState={tasks}
      />
      <button onClick={() => {console.log('tasks:');for (let [date, dateTasks] of tasks) for (let task of dateTasks) console.log(task.taskId)}}>test</button>
    </div>
    
  );
}

export default App;
