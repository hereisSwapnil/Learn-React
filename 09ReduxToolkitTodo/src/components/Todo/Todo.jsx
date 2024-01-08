import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../features/todo/todoSlice";

export const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray-500 hover:bg-teal"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <div>
            {todos.map((todo) => (
              <div class="flex mb-4 items-center" key={todo.id}>
                <p class="w-full text-grey-darkest">{todo.value}</p>
                <button
                  class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
