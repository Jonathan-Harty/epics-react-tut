import React from "react";
import { ITodo } from "../todos";
import { Todo } from "./Todo";
import styles from "../styles/TodoList.module.css";

interface ITodoList {
  todos: ITodo[];
}

export const TodoList = (props: ITodoList) => {
  return (
    <ul className={styles.todo_list}>
      {props.todos.map((todo) => (
        <li>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
