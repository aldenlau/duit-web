// Given a date and an array of tasks for that date, return a disaply for a 
// section of tasks for that day
import Task from './Task.js';

function DayTasks({date, tasks}) {
    return (
        <div>
        <div>{date}</div>
        {tasks.map(task => <Task timeToComplete={task.time} dueDate={date} title={task.title} desc={task.desc} priority={task.priority} onClick={task.onClick}/>)}
        </div>
    )
}

export default DayTasks;