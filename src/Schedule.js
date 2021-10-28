import React, {useState} from 'react';
import ScheduleDayTasks from './DayTasks.js';
import {getFormattedDate} from './AddTask.js';

function convertStringToDate(date) {
    return new Date(date.substring(5,7)+'/'+date.substring(8,10)+'/'+date.substring(0,4));
}

function dayDiff(startDate, endDate) {
    let date1 = convertStringToDate(startDate);
    let date2 = convertStringToDate(endDate);
    return Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); 
}
function compressSchedule(schedule) {
/**
 * Given a schedule Map, return a Map with identical task objects combined into a single object with combined times.
 */
    let copy = new Map();
    for (let [date, dateTasks] of schedule) {
        if (dateTasks.length > 0) {
            let taskTimes= new Map();
            for (let task of dateTasks) {
                if (taskTimes.has(task.taskId)) taskTimes.set(task.taskId, [task, taskTimes.get(task.taskId)[1]+task.time]);
                else taskTimes.set(task.taskId, [task, task.time]);
            }
            let newDateTasks = [];
            for (let [taskId, totalTime] of taskTimes) {
                let newTask = {...totalTime[0]};
                newTask['time'] = totalTime[1];
                newDateTasks.push(newTask);
            }
            copy.set(date, newDateTasks);
        }
        

    }
    return copy;
}

function generateSchedule(tasks, roundTime) {
    /**
     * Given a Map with dates as keys and arrays of task objects as values, return a Map of the same type with the tasks redistributed.
     */
    if (tasks.size > 0) {
        let buckets = new Map();
        let taskItems = [];
        let tasksPerBucket = new Map();
        let bucketsPerTask = new Map();
        let minDate;
        let maxDate;
        for (let [date, dateTasks] of tasks) {
            for (let task of dateTasks) {
                let availableBuckets = dayDiff(task.startDate, task.dueDate)+1
                bucketsPerTask.set(task.taskId, availableBuckets);
                if (minDate==undefined || minDate > task.startDate) minDate = task.startDate;
                if (maxDate==undefined || maxDate <task.dueDate) maxDate = task.dueDate;
                
                for (let i = 0; i < availableBuckets; i++) {
                    let bucket = convertStringToDate(task.startDate);
                    bucket.setDate(bucket.getDate()+i);
                    bucket = getFormattedDate(bucket);
                    if (tasksPerBucket.has(bucket)) tasksPerBucket.set(bucket, tasksPerBucket.get(bucket)+Math.round(task.time/roundTime));
                    else tasksPerBucket.set(bucket, Math.round(task.time/roundTime));
                }
                for (let i = 0; i < Math.round(task.time/roundTime);i++) {
                    let newTask = {...task};
                    newTask['time'] = roundTime;
                    delete newTask.onClick;
                    taskItems.push(newTask);
                }
            }
        }
        let totalBuckets = dayDiff(minDate, maxDate)+1
        for (let i = 0; i < totalBuckets; i++) {
            let bucket = convertStringToDate(minDate);
            bucket.setDate(bucket.getDate()+i)
            bucket = getFormattedDate(bucket);
            buckets.set(bucket, [])
        }
        
        taskItems.sort((first, second) => {return bucketsPerTask.get(first.taskId)>bucketsPerTask.get(second.taskId) ? 1 : -1});
        tasksPerBucket = new Map([...tasksPerBucket.entries()].sort((first, second) => {return first[1]>second[1] ? 1: -1}));
        let i = 0;
        
        while (taskItems.length>0) {
            let bucket = convertStringToDate(minDate);
            bucket.setDate(bucket.getDate()+i)
            bucket = getFormattedDate(bucket);
            if (tasksPerBucket.has(bucket) && tasksPerBucket.get(bucket)>0 ) {
                for (let j = 0; j < taskItems.length; j++) {
                    if (taskItems[j].startDate <= bucket && bucket <= taskItems[j].dueDate){
                        buckets.get(bucket).push(taskItems[j]);
                        taskItems.splice(j, 1);
                        break;
                    }
                }
                tasksPerBucket.set(bucket, tasksPerBucket.get(bucket)-1)
            }
            i = (i+1)%totalBuckets;
        }
        
        let newSchedule = new Map();
        for (let [date, dateTasks] of buckets) {
            if (dateTasks.length > 0) newSchedule.set(date, dateTasks);
        }
        return compressSchedule(newSchedule);
    }
    else return new Map();
}

function Schedule({tasks, roundTime}) {
    const [schedule, setSchedule] = useState(new Map());

    let scheduleDates = [];
    schedule.forEach((dateTasks, date) => scheduleDates.push(<ScheduleDayTasks date={date} tasks={dateTasks} key={'s'+date}/>))


    return (
        <div>
            <button onClick={() => setSchedule(generateSchedule(tasks, roundTime))}>
                Generate new schedule
            </button>
            {scheduleDates}
        </div>
    );
}

export default Schedule;