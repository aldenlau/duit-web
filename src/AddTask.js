// This component creates a new task object and passes it into a helper function./
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AddTask({taskHandler, roundTime}) {
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
            <input type='number' onChange={e => setTotalTime(e.target.value)}/>
            <input type='number' onChange={e=> setPrio(e.target.value)}/>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={dueDate} onChange={(date)=>setDueDate(date)} />
            <button 
                type='button' 
                onClick={() => taskHandler(
                    {time:Math.round(totalTime/roundTime)*roundTime, 
                    title:name, 
                    desc:description, 
                    priority: prio,
                    startDate: startDate,
                    dueDate: dueDate
                    }
                )}
            >
                Add Task
            </button>
        </div>
    )
}

export default AddTask;