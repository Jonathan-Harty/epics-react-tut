import React, { useState } from "react";
import { todos } from "./todos";
import { TodoList } from "./components/TodoList";
import styles from "./styles/App.module.css";

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div className={styles.App}>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
