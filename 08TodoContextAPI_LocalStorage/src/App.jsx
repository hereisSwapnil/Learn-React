import { useState } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <>
      <TodoForm />
      <Todo />
    </>
  );
}

export default App;
