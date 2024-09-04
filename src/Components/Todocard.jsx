import React from 'react'

export default function Todocard(props) {
    const {children, handleDeleteTodo, index,handleEditTodo} = props;
    
  return (
    
    <li className='todoItem '>
        {children}
        <div className="actionsContainer">
        <i className="fa-regular fa-pen-to-square" onClick={() =>handleEditTodo(index)}></i>
        <i className="fa-solid fa-trash-can" onClick={() => {handleDeleteTodo(index)}}></i>
        </div>
    </li>
  )
}
