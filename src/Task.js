// Task should have estimated time to completion / target time that user wants to work on task
// Task can be marked with no due date, app will suggest times to work on it when there is a "free" day
function Task({timeToComplete, dueDate, title, desc, priority, onClick}) {
    // Need checkbox in this component
    return (
        <div onClick = {onClick}>
            <table>
                <tr>
                    <th>{title}</th>
                    <td>{timeToComplete} min</td>
                </tr>
            </table>
        </div>
    );
}
export default Task;