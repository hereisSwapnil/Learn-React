import { createContext, useState, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 123,
      todo: "thsi is a demo todo",
      isDone: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  markDoneTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
