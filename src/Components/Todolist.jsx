import React from 'react'
import Todocard from './Todocard'

export default function Todolist(props) {
    const {todo}= props
   
  return (
    <ul className='main'> 
        {todo.map((todo, todoindex) =>{
            return(
                <Todocard {...props} key={todoindex} index={todoindex}>
                    <p>{todo}</p>
                </Todocard>
            )
        })}
    </ul>
  )
}
