import Task from './Task.js';

function ScheduleDayTasks({date, tasks}) {
    return (
        <div>
        <div>{date}</div>
        {tasks.map(
            task => <Task 
            timeToComplete={task.time} 
            dueDate={date} 
            title={task.title} 
            desc={task.desc} 
            priority={task.priority} 
            key={task.taskId} 
            id={task.taskId}
            />
            )}
        </div>
    )
}

export default ScheduleDayTasks;