import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todo = {
        id: nanoid(),
        value: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducers = todoSlice.reducer;
