import React from "react";
import { ITodo } from "../todos";

interface ITodoProps {
  todo: ITodo;
}

export const Todo = (props: ITodoProps) => {
  return <div className="todo"></div>;
};
