import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault(); //this will help to not reload page
        if (!title || !desc) {
            alert("Title or Description can not be empty")
        }
        //if we dont add else statement then it will add blank todos
        else {
            props.addTodo(title, desc); //we will defined this props.addTodo(title, desc) in App.js
            setTitle(""); // after the saving of a todo not a content will there on title box
            setDesc("");
        }
    }

    return (


        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    {/* onChange = {(e)=>{setTitle(e.target.value)}} this will help to write in box */}
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
