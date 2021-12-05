import styled from "styled-components";
import Checkbox from "./Checkbox";

// Task should have estimated time to completion / target time that user wants to work on task
// Task can be marked with no due date, app will suggest times to work on it when there is a "free" day
function TaskBase({className, timeToComplete, dueDate, title, desc, priority, onClick, taskId}) {
    // Need checkbox in this component
    return (
        <div className={className}>
            <Checkbox onClick = {onClick}/>
            <h3>{title}</h3>
            <h3>{timeToComplete} min</h3>
        </div>
    );
}

const Task = styled(TaskBase)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export default Task;