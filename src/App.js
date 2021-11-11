import './App.css';
import AddTask from './AddTask.js';
import React, {useState, useEffect} from 'react';
import Schedule from './Schedule.js';
import DisplayUser from './DisplayUser';
import ToDoList from './ToDoList';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, theme} from './StyledElements';


function App() {
  const [tasks, setTasks] = useState(new Map());
  const [minTime, setMinTime] = useState(30);
  const [completedTasks, setCompletedTasks] = useState(new Map());
  const [reminders, setReminders] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => document.title = "Duit");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <DisplayUser setTokenState = {setToken} setTasksState = {setTasks}/>
      <AddTask 
        roundTime={minTime} 
        setTasksState={setTasks} 
        token={token}
      />
      <ToDoList 
        tasks={tasks}
        completedTasks={completedTasks}
        setTasks={setTasks}
        setCompletedTasks={setCompletedTasks}
        token={token}
      />
      <Schedule tasks={tasks} roundTime={minTime}/>
      </ThemeProvider>
    </div>
  );
}


export default App;
