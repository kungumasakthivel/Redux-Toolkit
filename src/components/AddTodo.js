import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice.js"


function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input 
          value={input}
          type="text"
          placeholder="Enter a Todo..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodo;
