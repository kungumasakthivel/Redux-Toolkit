import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

function Todos() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map(todo => (
          <div style={
            {
              display: 'flex',
              justifyContent: 'center',
              gap: '20px', 
            }
            }>
            <li key={todo.id}>{todo.text}</li>
            <button 
            style={
              {
                border: '1px solid',
                backgroundColor: 'red',
                color: 'white'
              }
            }
            onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Todos
