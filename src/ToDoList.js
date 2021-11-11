import DayTasks from './DayTasks.js';

function ToDoList({tasks, completedTasks, setTasks, setCompletedTasks, token}) {
    let taskDates = [];
    tasks.forEach((dateTasks, date) => taskDates.push(<DayTasks date={date} tasks={dateTasks} key={date} completedState={completedTasks} setTasksState={setTasks} setCompletedState={setCompletedTasks} token={token}/>))
    return (
    <div>
        {taskDates}
    </div>
    );
}

export default ToDoList;