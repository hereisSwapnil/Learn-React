import React, { useEffect, useState } from "react";
import { useTodo } from "../../contexts/TodoContext";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };
  return (
    <>
      <h1>Add Todos</h1>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};
