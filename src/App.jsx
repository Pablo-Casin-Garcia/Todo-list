import { useState } from 'react'
import './App.css'
import { Task } from './components/Task'
import { Form } from './components/Form'


function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

  document.documentElement.style.setProperty('--main-bg-color', randomColor);
 
  const handleChange = e => {
    setTarea(e.target.value)
  }

  const addTask = e => {
    e.preventDefault();
    if(tarea.trim()==''){
      alert('Debes agregar algo ✏️')
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
      
    }
    const totalTareas = [nuevaTarea, ...tareas]
    setTareas(totalTareas);
    setTarea('')
  }

  const borrarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => {
      return tarea.id!==id
    })
    setTareas(tareasActualizadas)
  }
  return (
    <>
      <h2>Todo List</h2>
      <Form
        handleChange = {handleChange}
        addTask = {addTask}
        tarea = {tarea}
      />
      {tareas.length>1&&(
        <button onClick={()=>setTareas([])}>🗑️ Vaciar tareas</button>
      )}
      {tareas.map(tarea =>(
        <Task
          key = {tarea.id}
          id = {tarea.id}
          tarea = {tarea}
          borrarTarea = {borrarTarea}
        />
      ))}
    </>
  )
}

export default App
