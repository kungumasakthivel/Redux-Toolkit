import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: 'Hello'}],
}

export const todoSlice = createSlice({
    name: 'todos', // name of the slice because we may have multiple slice in application eg: login, api data, etc
    initialState,
    reducers: { // reducer will update the state 
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
