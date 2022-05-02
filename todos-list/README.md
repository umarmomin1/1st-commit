<!-- Inserting the requirment in child components  -->
inserting the bootstrap in index.html, only css and js has inserted and in Header.js uses rfce and enter. uses this <></> to write the code of html (here is navbar). In navbar three pages should be there Todos list, Home, About
<!-- exporting to parent component, here is app.js -->
<!-- method 1  -->
<!-- if use of rfce -->
code --> import Header from './MyComponent/Header';
<!-- method 2  -->
<!-- if use of rafc  -->
code --> import {Header} from './MyComponent/Header';
<!-- reuse of code using props  -->
by using props we can use the code many times. props is a javaScript object by which we pass from parent component to child component
<!-- use of props in code -->
<!-- prop.method 1 -->
app.js     --> <Header title="MyTodosList"/> 
Header.js  --> export const Header = (props) => {
  return (
    <div>
<><a className="navbar-brand" href="#">{props.title}</a></>
</div>
<!-- prop.method 2  -->
Header.js         Header.propTypes = {title: propTypes.string}
                  Header.deafaultProps={title: “MyTodosList”} 

app.js <>Header</>
Explanation :- we can pass the values like these ways. Both method use to reuse the code many times. 

<!-- hide&show search bar  -->
<!-- if we put false in parent component like below so it will hide the search bar and vice-versa  -->
These booleon are called as ternary operator
app.js     -->  <Header title="MyTodosList" searchBar={false}/> 
Header.js  -->  {props.searchBar? <form className="d-flex"> </form>:""}
<!-- to hide and show search bar, we can also use prop method to reuse the code as below  -->
Header.js         Header.propTypes = {searchBar:propTypes.bool}
                  Header.deafaultProps={searchBar:true } 

app.js <>Header</>

<!-- passing the object in parnet component and child component derived its value  -->
1) in app.js. in the function, we have created an object as a integer and strings. The object name is todos. 
we have returned this todos in Todos component in app.js like this --><Todos todos={todos}/>

2)in Todos.js we will render our todos to todo and import the todo component(here is TodoItem.js) 
code --> 
// importing from TodoItem 
import TodoItem from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className='container'>
      <>
     <h4>Todos list</h4>
     <TodoItem todo={props.todos[0]}/>
     </>
     </div>

3)in TodoItem.js, we introduced todo and render the value from Todos.js and app.js
code --> 
export default function TodoItem({todo}) { 
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
    </div>

  <!-- now we will render the TodoItem with the help of for loop -->
  we will use the map method. map method is method that accept upto three arguments. This calls callback fucnction
  one time for each element in the array

  code -->
  Todos.js
  export const Todos = (props) => {
  return (
    <div className='container'>
      <>
     <h4 className="text-center my-3">Todos list</h4>
     {props.todos.map((todo)=>{
       return <TodoItem todo={todo}/>
     })}
     <!--//<TodoItem todo={props.todos[0]}/>-->
     </>
     </div>

<!-- delete button working with the help of function -->
we will use the hooks and onDelete function. here is useState hook .

1) In TodoItem.js we will use onClick event
As we are not using props, so we need to use destructuring of data (line no 91 and 106 is difference between destructuring of data and props)

   in TodoItem.js
code-->
export const TodoItem = ({ todo }) => { 
  return (
    <div>
      <>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger">Delete</button>
      </>
    </div>

2) now we will make an onDelete method in Todos.js and pass this method to TodoItem.js, 
we dont need to do destructuring of data because we are using props

   in Todos.js 
code-->
export const Todos = (props) => {
return (
  <div className='container'>
 <h3 className="text-center my-6">Todos list</h3>
 {props.todos.map((todo)=>{
   return <TodoItem todo={todo} onDelete={props.onDelete}/>
 })}
 </div>

 3) now we will add click event in TodoItem.js, beacuse whenever user "click" on button so it should works 
   in TodoItem.js
   code-->
export const TodoItem = ({ todo, onDelete }) => { 
  return (
    <div>
      <>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
      </>
    </div>

4.1) now will defined the onDelete method in App.js
   in App.js
code-->
function App(){
  const onDelete = () => {
    console.log("i am onDelete")
  }
}

4.2) now we will pass the onDelete method in App.js
  

return(
  <>
  <Todos todos={todos} onDelete={onDelete}/>
  </>
)

4.3) now will pass the App.js value to Todos.js which is todos and onDelete
--> code
   in Todos.js
   export const Todos = (props) => {
  return (
    <div className='container'>
   <h3 className="text-center my-6">Todos list</h3>
   props.todos.map((todo)=>{
     return <TodoItem todo={todo} onDelete={props.onDelete}/>
   })}
   </div>

4.4) now we will pass Todos.js value to TodoItem.js which is todo and onDelete
code -->
  in TodoItem.js
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <>
      </>
    </div>

4.5) very important
app.js will give its 2 value to Todos.js
value 1 --> todos={todos}
value 2 --> onDelete={onDelete}

Todos.js will give 1 value of app.js to TodoItem.js and 1 value of own

app.js   value 1  -->  export const TodoItem = ({ Todos.js value , onDelete})
Todos.js value 2  -->  export const TodoItem = ({ todo , App.js value})


5) now will pass the todo in all files so it will work
-->code
   in TodoItem.js
<div>
      <>
        <button className="btn btn-sm btn-danger" onClick={onDelete(todo)}>Delete</button>
      </>
    </div>
-->code
   in App.js
function App(){
  const onDelete = (todo) => {
    console.log("i am onDelete" todo)
  }
}

-->code
   in Todos.js
      props.todos.map((todo)=>{
     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
   })}

6) Now we will pass the arrow function ()=> . whenever this function will call, the onDelete function will call with task
-->code
   in TodoItem.js
           <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>

we are passing the onDelete function in arrow fuction not calling it

<!-- now we will use hook  -->

1.1) Now we will use hook
--> code
   in App.js
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("i am onDelete", todo);
  const [todos, setTodos] = useState([
      {
        sno: 1,
        title: "go to the market",
        desc: "descrition"
      },
      {
        sno: 2,
        title: "go to the market",
        desc: "descrition"
      },
      {
        sno: 3,
        title: "go to the market",
        desc: "descrition"
      },
    ]);

what is useState?
useState is function that helps to update

1.2) Now we use filter with useState

function App() {
   setTodos(todos.filter((e)=>{
return e!==todo;
    }));
  }

what is filter?
filter is higher order array method

<!-- whenever we delete all todos on browser so a message should be displayed -->

1) This can be done by if else condition

-->
   in Todos.js
   {props.todos.length===0? "no todos to display":
   props.todos.map((todo)=>{
     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
   })}


   explanation:-
   This contain IF statement
   props.todos.length===0? "no todos to display"
   This contain ELSE statement
   :
   props.todos.map((todo)=>{
     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>

<!-- frontend work  -->
we will make a file and do the some frontend work
we have made a file here as AddTodo.js
Now we will make backend for this file

<!-- back to backend again -->
<!-- not we will make our frontend to works in beckend -->
To update we will use useState
1) we have made new variable as addTodo and define in App.js
--> code
  in App.js
 const addTodo=(title,desc)=> {
    console.log("i am addTodos", title, desc)
    let sno = todos[todos.length-1].sno + 1; //this will update the sno number like 1 2 3 
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

 2) now we will update our pre-made setTodos 
  setTodos([...todos, myTodo])
    console.log(myTodo);



