import React from "react"

export default function Todoinput(props){
    const {handleAddTodo,todoValue, setTodoValue} = props


    return(
       <header>
        <input value={todoValue} onChange={(e) =>{
            setTodoValue(e.target.value)
        }} placeholder="Enter Todo..."/>
        <button onClick={() =>{
            handleAddTodo (todoValue)
            setTodoValue (" ")
        }}> Add</button>
       </header>
    )
}