import React, { useState, useEffect, useContext } from "react"
import TodosContext from "../context"

export default function TodoForm () {
    const [todo, setTodo] = useState("")
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)
    
    useEffect(() => {
        if(currentTodo.text) {
            setTodo(currentTodo.text)
        }
        else {
            setTodo("")
        }
        // we want to run useEffect only when the current todo changes 
        // we can check this over the currentTodo id
    }, [currentTodo.id])


    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentTodo.text) {
            dispatch({ type: "UPDATE_TODO", payload: todo })
        }
        else {
            dispatch({ type: "ADD_TODO", payload: todo })
        }
        // clear input after submit
        setTodo("")
    }


    return (
        <form 
            className=" flex justify-center p-5"
            onSubmit={handleSubmit}
            >
            <input
                type="text" 
                className="border-black border-solid border-2"
                onChange={event => setTodo(event.target.value)}
                value={todo}
            />
        </form>
    )
}