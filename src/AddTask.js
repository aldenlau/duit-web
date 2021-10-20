// This component creates a new task object and passes it into a helper function./
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {addNewTask, removeTask} from './ObjectModifiers.js';


function getFormattedDate(date) {
    return '' + date.getFullYear()+'/'+(date.getMonth() > 8 ? ''+(date.getMonth()+1): '0'+(date.getMonth()+1))+'/'+(date.getDate() > 9 ? ''+date.getDate(): '0'+date.getDate())
}

function AddTask({ roundTime, setTaskState, tasksState}) {
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [name, setName] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    const [description, setDescription] = useState('');
    const [prio, setPrio] = useState(0);
    return (
        <div>
            <p>Add new task</p>
            <input onChange={e => setName(e.target.value)}/>
            <input onChange={e => setDescription(e.target.value)}/>
            <input type='number' onChange={e => setTotalTime(parseInt(e.target.value))}/>
            <input type='number' onChange={e=> setPrio(parseInt(e.target.value))}/>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={dueDate} onChange={(date)=>setDueDate(date)} />
            <button 
                type='button' 
                onClick={() => {
                    let timestamp = Date.now();
                    let formattedStartDate = getFormattedDate(startDate);
                    let formattedDueDate = getFormattedDate(dueDate);
                    setTaskState(addNewTask(
                        {time:Math.ceil(totalTime/roundTime)*roundTime, 
                        title:name, 
                        desc:description, 
                        priority: prio,
                        startDate: formattedStartDate,
                        dueDate: formattedDueDate,
                        taskId: timestamp,
                        remainingTime: Math.ceil(totalTime/roundTime)*roundTime
                        }, tasksState
                    ));
                    //else alert('Start date must be the same day or earlier than the due date.');
                    
                }
                }
            >
                Add Task
            </button>
        </div>
    )
}
export {getFormattedDate};
export default AddTask;