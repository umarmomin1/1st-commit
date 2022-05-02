import React from 'react'

// importing from TodoItem 
import{TodoItem} from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className='container'>
   <h3 className="my-6">Todos List</h3>
   {props.todos.length===0? "no todos to display":
   props.todos.map((todo)=>{
     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
   })}
   {/* <!--<TodoItem todo={props.todos[0]}/>--> */}
  
   </div>
  )
}


