import { useState } from "react"
import React from "react"

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        // console.log(e)
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (inputValue) {
            setTodos([...todos, inputValue])
        }
        setInputValue('')
    }

    function handleDelete(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <div className="Top">
                <input className='input' type='text' value={inputValue} onChange={handleChange} 
                placeholder="Enter a task"/>
                <button onClick={handleSubmit}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button className='btn' onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

