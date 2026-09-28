
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Input from './components/input';
import ListItem from './components/list-item';

function App() {
  const [value, setValue] = useState<string>('');
  const [habits, setHabits] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [activeIndex, setActiveIndex] = useState<null|number>(null)

 function handleClick(e: string) {
  if (isEdit && activeIndex) {
    habits[activeIndex] = e;
    setHabits(habits)
    setIsEdit(false)
    setActiveIndex(null)
    setValue('')
  }
  else {
    setHabits([...habits, e]);
    setValue('')
  }

 }

 function handleDelete(index: number) {
  habits.splice(index, 1);
  const newHabbits = [...habits];
  setHabits(newHabbits);
 }

 function editItem(index: number) {
  setActiveIndex(index)
  setIsEdit(true)
const value = habits[index]
setValue(value)


 
  
 }

  return (
    <div>
      <Type />
      <Button />
        
    </div>
  )
  }
  
