
import logo from './logo.svg';
import './App.css';
import DayTasks from './DayTasks.js';
import AddTask from './AddTask.js';
import React, {useState} from 'react';
import Schedule from './Schedule.js';
import Register from './Register.js';
import Login from './Login.js';
function App() {
  const [tasks, setTasks] = useState(new Map());
  const [minTime, setMinTime] = useState(30);
  const [completedTasks, setCompletedTasks] = useState(new Map());
  const [reminders, setReminders] = useState([]);
  const [token, setToken] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  let taskDates = [];
  tasks.forEach((dateTasks, date) => taskDates.push(<DayTasks date={date} tasks={dateTasks} key={date} completedState={completedTasks} setTasksState={setTasks} setCompletedState={setCompletedTasks} token={token}/>))

  //let completedTaskDates = [];
  //completedTasks.forEach((dateTasks, date) => completedTaskDates.push(<DayTasks date={date} tasks={dateTasks} key={date} tasksState = {tasks} completedState={completedTasks} setTasksState={setTasks} setCompletedState={setCompletedTasks}/>))

  return (
    <div className="App">
      {showLogin ? <Login 
        setLogin={() => setShowLogin(false)} 
        setToken={setToken} 
        setTaskState={setTasks}
        token={token}
        /> : 
        <Register setLogin={() => setShowLogin(true)}/>}
      <AddTask 
        roundTime={minTime} 
        setTasksState={setTasks} 
        token={token}
      />
      {taskDates}
      <Schedule tasks={tasks} roundTime={minTime}/>
      {token}
    </div>
    
  );
}

export default App;
