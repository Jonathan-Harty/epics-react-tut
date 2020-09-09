import React from "react";
import { Todo } from "../todos";

interface ITodoList {
  todos: Todo[];
}

export const TodoList = (props: ITodoList) => {
  return <div className="todo-list"></div>;
};
