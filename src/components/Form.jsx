import React from 'react'

const Form = ({handleChange, addTask, tarea}) => {
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" value={tarea} placeholder='Ingresa la taera 📝' onChange={handleChange}/>
                <button type="submit">📌 Agregar</button>
            </form>
        </div>
    )
}

export {Form}