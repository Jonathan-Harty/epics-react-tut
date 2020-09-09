import React from "react";
import { todos } from "./todos";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
