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
            key={'st'+task.taskId} 
            taskId={task.taskId}
            />
            )}
        </div>
    )
}

export default ScheduleDayTasks;