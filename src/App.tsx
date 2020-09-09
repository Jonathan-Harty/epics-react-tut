import React, { useState } from "react";
import { todos, ITodo } from "./todos";
import { TodoList } from "./components/TodoList";
import styles from "./styles/App.module.css";
import { AddTodoForm } from "./components/AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState(todos);

  const updateTodos = (todoId: number, action: string, newTitle?: string) => {
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
    } else if (action === "add") {
      if (!newTitle) {
        return;
      }
      const newTodo: ITodo = {
        id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
        title: newTitle,
        isCompleted: false,
      };

      setTodoList([...todoList, newTodo]);
    }
  };

  return (
    <div className={styles.App}>
      <TodoList todos={todoList} updateTodos={updateTodos} />
      <AddTodoForm updateTodos={updateTodos} />
    </div>
  );
}

export default App;
