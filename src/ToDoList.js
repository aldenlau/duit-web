// Add filters for to-do list and schedule

import DayTasks from './DayTasks.js';
import AddTask from './AddTask.js';
import styled from 'styled-components';

function ToDoListBase({tasks, completedTasks, setTasks, setCompletedTasks, token, minTime, className}) {
    let taskDates = [];
    tasks.forEach((dateTasks, date) => taskDates.push(<DayTasks date={date} tasks={dateTasks} key={date} completedState={completedTasks} setTasksState={setTasks} setCompletedState={setCompletedTasks} token={token}/>))
    return (
    <div className={className}>
        <AddTask 
            minTime={minTime} 
            setTasksState={setTasks} 
            token={token}
        />
        {taskDates}
    </div>
    );
}

const ToDoList = styled(ToDoListBase)`
    width: 33%;
    display: flex;
    flex-direction: column;
`;

export default ToDoList;