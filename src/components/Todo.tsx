import React from "react";
import { ITodo } from "../todos";
import styles from "../styles/Todo.module.css";

interface ITodoProps {
  todo: ITodo;
}

export const Todo = (props: ITodoProps) => {
  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        defaultChecked={props.todo.isCompleted}
      />
      <h2 className={props.todo.isCompleted ? styles.completed : undefined}>
        {props.todo.title}
      </h2>
      <button className={styles.btn}>x</button>
    </div>
  );
};
