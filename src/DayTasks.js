// Given a date and an array of tasks for that date, return a disaply for a 
// section of tasks for that day
import Task from './Task.js';
import {makeTasksObject} from './ObjectCreator.js';
import styled from 'styled-components';
function DayTasksBase({date, tasks, completedState, setTasksState, setCompletedState, token}) {
    return (
        <div>
        <div><p>{date}</p></div>
        {tasks.map(
            task => <Task 
            timeToComplete={task.time} 
            dueDate={date} 
            title={task.title} 
            desc={task.desc} 
            priority={task.priority} 
            onClick={()=>{
                fetch(`https://duit-api.herokuapp.com/update/deltask?token=${token}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        taskId: task.taskId
                    })
                })
                .then(res => res.json())
                .then(data => setTasksState(makeTasksObject(data)));
                // fetch and set completed state
            }} 
            key={task.taskId} 
            taskId={task.taskId}
            />
            )}
        </div>
    )
}

const DayTasks = styled(DayTasksBase)`
    
`;

export default DayTasks;