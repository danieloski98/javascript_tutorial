import { useEffect, useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import type { ITask } from './types/Tasks';

function App() {
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tasks') as string) as ITask[];
    console.log(items);
    setTotalTasks(items?.length ?? 0);
  }, []);

  return (
    <div className='w-full h-screen bg-gray-100'>
      <Header />

      <div className='w-full h-full flex-1 flex py-4 px-4 gap-4'>
        <div className='w-[35%] h-full'>
          <InputBox />
        </div>
        <div className='w-[65%] h-full '>
          <div className='w-full h-10 flex justify-between'>
            <p>Tasks</p>
            <p>{totalTasks} items</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App