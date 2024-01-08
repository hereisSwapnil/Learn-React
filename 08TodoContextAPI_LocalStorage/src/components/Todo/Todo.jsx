import React, { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";

export const Todo = () => {
  const { todos, deleteTodo, markDoneTodo, updateTodo } = useTodo();
  const [updateTodo_, setUpdateTodo] = useState(null);

  const handleUpdate = (todo) => {
    setUpdateTodo(todo);
  };

  const handleInputChange = (e) => {
    setUpdateTodo((prevTodo) => ({ ...prevTodo, todo: e.target.value }));
  };

  const handleUpdateSubmit = () => {
    if (updateTodo_) {
      updateTodo(updateTodo_.id, updateTodo_.todo);
      setUpdateTodo(null);
    }
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <hr />
            {updateTodo_ && todo.id === updateTodo_.id ? (
              <div>
                <input value={updateTodo_.todo} onChange={handleInputChange} />
                <button onClick={handleUpdateSubmit}>Update</button>
              </div>
            ) : (
              <li className={todo.isDone ? "line-through" : ""}>
                {todo.todo} <br />
                <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
                <button onClick={() => markDoneTodo(todo.id)}>
                  Mark as done
                </button>
                <button onClick={() => handleUpdate(todo)}>Update</button>
              </li>
            )}
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
};
