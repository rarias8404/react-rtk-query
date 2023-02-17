import React, { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis";

const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const prevTodo = () => setTodoId((prevTodoId) => prevTodoId - 1);
  const nextTodo = () => setTodoId((prevTodoId) => prevTodoId + 1);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button disabled={todoId === 1} onClick={prevTodo}>
        Prev Todo
      </button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};

export default TodoApp;
