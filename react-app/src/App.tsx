
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
    <div style={{ height: '100vh', width: '100%' }}>
      <Header text='My List' />
      <Input value={value} onChange={(e) => setValue(e)} handleClick={(e) =>handleClick(e)} isEdit={isEdit} />
      <div style={{ marginTop: '20px' }}>
        {habits.map((item, index) => (
          <ListItem key={index} text={item} index={index} handleDelete={(index) => handleDelete(index)} editItem={(index) => editItem(index) }  />
        ))}
      </div>
    </div>
  )
}

export default App
