import './App.css';
import React, {useState, useEffect} from 'react';
import LoginPage from './LoginPage';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, theme, dark_theme, Button, Footer} from './StyledElements';
import Main from './Main.js';
import styled from 'styled-components';


function AppBase({className}) {
  const [tasks, setTasks] = useState(new Map());
  const [minTime, setMinTime] = useState(30);
  const [completedTasks, setCompletedTasks] = useState(new Map());
  const [reminders, setReminders] = useState([]);
  const [token, setToken] = useState('');
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => document.title = "Duit");

  return (
    <div className={className}>
      
      <ThemeProvider theme={darkTheme ? dark_theme : theme}>
      <GlobalStyle/>
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

      <Footer>
        <p>Alden Lau</p>
        <Button onClick = {() => setDarkTheme(!darkTheme)}>{darkTheme? "Light mode" : "Dark mode"}</Button>
      </Footer>
      
      
      
      
      </ThemeProvider>
    </div>
  );
}
const App = styled(AppBase)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
