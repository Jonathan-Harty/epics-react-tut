import React from "react";
import { ITodo } from "../todos";
import { Todo } from "./Todo";

interface ITodoList {
  todos: ITodo[];
}

export const TodoList = (props: ITodoList) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
