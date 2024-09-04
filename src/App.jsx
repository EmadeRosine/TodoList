import { useEffect, useState } from "react"
import Todoinput from "./Components/Todoinput"
import Todolist from "./Components/Todolist"

function App() {
const [todo,setTodo] = useState([ ])
const [todoValue, setTodoValue] = useState("")


function persistData(newList){
  localStorage.setItem('todo', JSON.stringify({todo:newList }))
}

function handleAddTodo(newTodo){
  const newTodolist  = [...todo,newTodo]
  persistData(newTodolist)
  setTodo(newTodolist)
}


function handleDeleteTodo (index) {
  const newTodolist = todo.filter((todo, todoIndex) =>{
    return todoIndex !==index
  })
  persistData(newTodolist)
  
  setTodo(newTodolist)
}

function handleEditTodo (index) {
  const valueToBeEdit = todo[index]
  setTodoValue(valueToBeEdit)
  handleDeleteTodo(index)
}




useEffect (() => {
  if(!localStorage){
    return
  }
  let localTodo = localStorage.getItem('todo')
  if(!localTodo){
    return
  }
  localTodo = JSON.parse(localTodo).todo
  setTodo(localTodo)
}, [])
  return (
 <>
  <Todoinput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
  <Todolist handleDeleteTodo={handleDeleteTodo} todo={todo} handleEditTodo={handleEditTodo}/>
 </>
  )
}

export default App
