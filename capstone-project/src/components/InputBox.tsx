import { useState, useEffect,} from "react"
import Input from "./Input"
import Textarea from "./Textarea";
import DatePicker from "./DatePicker";
import Button from "./Button";
import type { ITask } from "../types/Tasks";

interface Irender {
    renderedTasks: ITask[];
    setRenderedTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    title: string;
    setTitle:  React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription:  React.Dispatch<React.SetStateAction<string>>;
    edit: number;
    setEdit: React.Dispatch<React.SetStateAction<number>>;
}

 export default function InputBox({ renderedTasks, setRenderedTasks, title, setTitle, description, setDescription,edit, setEdit }: Irender) {
    const [startDate, setStartDate] = useState(new Date().toISOString());
    const [endDate, setEndDate] = useState(new Date().toISOString());
    

    useEffect(function() {
       localStorage.setItem('tasks', JSON.stringify(renderedTasks));
    }, [renderedTasks]);


    function handleSubmit() {
        if (title === '' || description === '') {
            alert('You must enter a title and description!!!');
            return;
        }

        if (edit === 0) {
            handleCreate();
        } else {
            handleReup();
        }
    }

    function handleCreate () {
          const newObject: ITask = {
                title: title,
                description: description,
                endDate,
                startDate,
                status: 'ON_GOING',
                completed: false,
                id: renderedTasks.length + 1,
            }
            setRenderedTasks((prev) => [...prev, newObject]);
            setTitle(" ")
            setDescription(" ")
                }

        function handleReup() {
          let reUp = renderedTasks.map((tasks) => {
            if (tasks.id === edit) {
                return {
                    ...tasks,
                    title: title,
                    description: description,
                    startDate: startDate,
                    endDate: endDate
                };
            }
            return tasks
        })
            setRenderedTasks(reUp);
            setTitle(" ")
            setDescription(" ")
            setEdit(0)
            
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
            <Button onClick={handleSubmit} label={edit !== 0 ? "Update Task" : "Create Task"} 
             />
        </div>
    </div>
  )
}