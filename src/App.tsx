import React, { useState } from "react";
import { todos } from "./todos";
import { TodoList } from "./components/TodoList";
import styles from "./styles/App.module.css";

function App() {
  const [todoList, setTodoList] = useState(todos);

  const updateTodos = (todoId: number, action: string) => {
    if (action === "delete") {
      setTodoList(todoList.filter((todo) => todo.id !== todoId));
    } else if (action === "changeCompletion") {
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === todoId) {
            todo.isCompleted = !todo.isCompleted;
          }

          return todo;
        })
      );
    }
  };

  return (
    <div className={styles.App}>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
