import { useState, useEffect } from "react"
import Input from "./Input"
import Textarea from "./Textarea";
import DatePicker from "./DatePicker";
import Button from "./Button";
import type { ITask } from "../types/Tasks";

function InputBox() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString());
    const [endDate, setEndDate] = useState(new Date().toISOString());
    const [tasks, SetTasks] = useState<ITask[]>(JSON.parse(localStorage.getItem('tasks') as string));

    useEffect(function() {
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleSubmit() {
        if (title === '' || description === '') {
            alert('You must enter a title and description!!!');
            return;
        }

        const newObject: ITask = {
            title: title,
            description: description,
            endDate,
            startDate,
            status: 'ON_GOING',
            completed: false,
            id: tasks.length + 1,
        }

        SetTasks((prev) => [...prev, newObject]);
    }


  return (
    <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
        <h3 className="font-bold text-lg text-black">Create Task</h3>
        <p className="text-sm font-normal text-gray-400">Add a new deliverable to your list</p>
        <div className="mt-4 gap-4 flex flex-col">
            <Input value={title} onChange={(e) => setTitle(e)} label="TASK TITLE" />
            <Textarea value={description} onChange={(e) => setDescription(e)} label="DESCRIPTION" />
            <div className="flex items-center gap-4">
                <div className="flex-1 overflow-hidden">
                    <DatePicker value={startDate} onChange={(e) => setStartDate(e)} label="START DATE"/>
                </div>
                <div className="flex-1 overflow-hidden">
                    <DatePicker value={endDate} onChange={(e) => setEndDate(e)} label="END DATE"/>
                </div>
            </div>
            <Button onClick={() => handleSubmit()} label="Create Task" />
        </div>
    </div>
  )
}

export default InputBox