// import logo from './logo.svg';
import './App.css';
// importing the child component which is interlink with below function 
import {Header} from './MyComponent/Header'; //method 1 importing from Header when using "rfce" 
import {Todos} from './MyComponent/Todos'; //method 2 importing from Header when using "rafc" 
import {Footer} from './MyComponent/Footer'; //method 2 importing from Header when using "rafc" 
import {AddTodo} from './MyComponent/AddTodo'; //method 2 importing from Header when using "rafc" 
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
return e!==todo;
    }));
  }
  // addTodo is defined 
  const addTodo=(title,desc)=> {
    let sno;
    if (todos.length===0) {
      sno = 1;
    } else {
      sno = todos[todos.length-1].sno + 1; //this will update the sno number like 1 2 3 
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
  }
  const [todos, setTodos] = useState([
      // {
      //   sno: 1,
      //   title: "Please Add Some Todos",
      //   desc: "Add todos in above boxes"
      // },
    ]);

  return (
    
    // linking the component here in parent component from child component here between <></>
    <>
      <Header title="MyTodosList" searchBar={false}/>
      {/* addTodo is defined  */}
      <AddTodo addTodo={addTodo}/> 
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
