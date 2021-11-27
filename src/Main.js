import React, {useState, useEffect} from 'react';

import Schedule from './Schedule.js';
import ToDoList from './ToDoList';
import styled from 'styled-components';

function MainBase({tasks, setTasks, minTime, completedTasks, setCompletedTasks, reminders, setReminders, token, setToken, className}) {
    return (
        <div className={className}>
            
            <ToDoList 
                tasks={tasks}
                completedTasks={completedTasks}
                setTasks={setTasks}
                setCompletedTasks={setCompletedTasks}
                token={token}
                minTime={minTime} 
            />
            <Schedule tasks={tasks} roundTime={minTime}/>
        </div>
    );
}

const Main = styled(MainBase)`
    display: flex;
    flex-direction: row;
    margin: 5px;
`;
export default Main;