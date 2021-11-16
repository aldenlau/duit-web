import './App.css';
import React, {useState, useEffect} from 'react';
import LoginPage from './LoginPage';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, theme} from './StyledElements';
import Main from './Main.js';
import styled from 'styled-components';
import logo from './logo.png'

function AppBase() {
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
      <img src={logo} width="5%" height="5%"></img>
      {token==='' ? 
        <LoginPage setTokenState = {setToken} setTasksState = {setTasks}/>
        :
        <Main 
        tasks={tasks} 
        setTasks={setTasks} 
        minTime={minTime} 
        completedTasks={completedTasks} 
        setCompletedTasks={setCompletedTasks} 
        reminders={reminders} 
        setReminders={setReminders}
        token={token}
        setToken={setToken}
        />      
      }
      
      
      
      </ThemeProvider>
    </div>
  );
}
const App = styled(AppBase)`
`;

export default App;
