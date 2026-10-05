import { useEffect, useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import type { ITask } from './types/Tasks';
import {SquarePen, Trash} from 'lucide-react'

function App() {
  const [renderedTasks, setRenderedTasks] = useState<ITask[]>([]);
  const [edit,  setedit] =  useState(0);
  const [title, setTitle] = useState(" ")
  const [description, setDescription] = useState(" ")
  
  function update (id: number) {
      setedit(id)

      renderedTasks.map((tasks) => {
        if (tasks.id === id) {
          setTitle(tasks.title);
          setDescription(tasks.description);
        }
      });
  };

  function tick (id : number) {
    let ticked = renderedTasks.map((tasks) => {
      if (tasks.id === id) {
        return {
          ...tasks,
          completed: !tasks.completed,
          status: tasks.completed ? "ON_GOING" as const: "COMPLETED" as const,
        }
      }
      return tasks
    })
    setRenderedTasks(ticked)
  }

  function deleting(edit: number) {
    const del = renderedTasks.findIndex((tasks) => tasks.id === edit);
    let deleted = [...renderedTasks];
    deleted.splice(del, 1);
    setRenderedTasks(deleted);
    
  }


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tasks') as string) as ITask[];
    setRenderedTasks(items ?? []);
  console.log(items)
  
    if (items) {
      setRenderedTasks(items);
    }
  }, []);




  return (
    <div className='w-full h-screen bg-gray-100'>
      <Header />

      <div className='w-full h-full flex-1 flex py-4 px-4 gap-4'>
        <div className='w-[35%] h-full'>
          <InputBox 
          renderedTasks={renderedTasks} 
          setRenderedTasks={setRenderedTasks} 
          title={title} 
          setTitle={setTitle} 
          description={description} 
          setDescription={setDescription}
          edit={edit} 
          setEdit={setedit}/>
        </div>
        <div className='w-[65%] h-full '>
          <div className='w-full h-10 flex justify-between'>
            <p>Tasks</p> 
            <p>{renderedTasks.length} items</p>
          </div>
          {renderedTasks?.length>0 && renderedTasks.map((tasks) => (
            <div key={tasks.id} className='rounded-2xl bg-white mb-4 p-5'>
              <div className='flex items-center gap-3'>
                <input type="checkbox" className='h-5 w-5' onChange={() => (tick(tasks.id))}/> 
                <SquarePen className='h-5 w-5' onClick={() => (update(tasks.id))}/>                                                                                              
                <span className='bg-black text-white px-3 py-1 text-xs rounded-full'>{tasks.status}
                </span>
                <Trash className='h-5 w-5' onClick={() => (deleting(tasks.id))} />
              </div>
              <h3 className='text-black mt-3  font-semibold'>{tasks.title}</h3>
              <p className='mt-2 text-sm text-gray-400'>{tasks.description}</p>
              <div className='flex'>
                <span className='mt-2 text-sm text-gray-400'>
                  {tasks.startDate}
                </span>
                <span className='mt-2 text-sm text-gray-400'>
                  {tasks.endDate}
                </span>
              </div>
            </div>
          ))}
          <div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App