import React from "react";
import { todos } from "./todos";
import { TodoList } from "./components/TodoList";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
