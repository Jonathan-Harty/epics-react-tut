import React, { useState } from "react";

interface IAddTodoFormProps {
  updateTodos(todoId: number, action: string, newTitle?: string): void;
}

export const AddTodoForm = (props: IAddTodoFormProps) => {
  const [title, setTitle] = useState("");

  return (
    <div className="add-todo-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.updateTodos(0, "add", title);
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
