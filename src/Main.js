import React, {useState, useEffect} from 'react';
import AddTask from './AddTask.js';
import Schedule from './Schedule.js';
import ToDoList from './ToDoList';

function Main({tasks, setTasks, minTime, completedTasks, setCompletedTasks, reminders, setReminders, token, setToken}) {
    return (
        <div>
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
        </div>
    );
}

export default Main;