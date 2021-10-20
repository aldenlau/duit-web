// Given a date and an array of tasks for that date, return a disaply for a 
// section of tasks for that day
import Task from './Task.js';
import {addNewTask, removeTask} from './ObjectModifiers.js';

function DayTasks({date, tasks, tasksState, completedState, setTasksState, setCompletedState}) {
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
            onClick={()=>{
                let [updatedTasks, deletedTask] = removeTask(date, task.taskId, tasksState);
                setTasksState(updatedTasks);
                setCompletedState(addNewTask(deletedTask, completedState));
            }} 
            key={task.taskId} 
            id={task.taskId}
            />
            )}
        </div>
    )
}

export default DayTasks;