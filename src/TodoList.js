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
        <div>
            <h1>Todo List</h1>
            <form>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

