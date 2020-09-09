import React from "react";
import { ITodo } from "../todos";

interface ITodoProps {
  todo: ITodo;
}

export const Todo = (props: ITodoProps) => {
  return (
    <div className="todo">
      <input type="checkbox" defaultChecked={props.todo.isCompleted} />
      <h2>{props.todo.title}</h2>
    </div>
  );
};
