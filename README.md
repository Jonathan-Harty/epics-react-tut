# EPICS React & Typescript Tutorial

## Steps

1. Run `npx create-react-app template=typescript name_of_project_here`
2. Go into the src folder and delete the following files
   - App.css
   - App.test.tsx
   - index.css
   - logo.svg
   - react-app-env.d.ts
   - setupTest.ts
   - serviceWorker.ts
3. Go into index.tsx and remove the following
   ```typescript
     import './index.css';
     import './index.css
     import * as serviceWorker from './serviceWorker';
   ```
   ```typescript
   // If you want your app to work offline and load faster, you can change
   // unregister() to register() below. Note this comes with some pitfalls.
   // Learn more about service workers: https://bit.ly/CRA-PWA
   serviceWorker.unregister();
   ```
4. Got into App.tsx and remove the following
   ```typescript
   import logo from "./logo.svg";
   import "./App.css";
   ```
   ```html
   <header className="App-header">
     <img src="{logo}" className="App-logo" alt="logo" />
     <p>Edit <code>src/App.tsx</code> and save to reload.</p>
     <a
       className="App-link"
       href="https://reactjs.org"
       target="_blank"
       rel="noopener noreferrer"
     >
       Learn React
     </a>
   </header>
   ```
5. Create a components folder
6. Make the following files
   - Todo.tsx
   - TodoList.tsx
   - AddTodoForm.tsx
7. Initialize files above with format below

   ```typescript
   import React from "react";

   interface INameOfComponentProps {}

   export const NameOfComponent = (props: INameOfComponentProps) => {
     return <div className="name-of-component"></div>;
   };
   ```

8. Create a todos.ts file in the src folder
9. Insert the following code into the file
   ```typescript
   export interface Todo {
     id: number;
     title: string;
     isCompleted: boolean;
   }
   ```
10. Create a list of todos

    ```typescript
    export let todos: Todo[] = [
      {
        id: 1,
        title: "todo 1",
        isCompleted: true,
      },
      {
        id: 2,
        title: "todo 2",
        isCompleted: true,
      },
      {
        id: 3,
        title: "todo 3",
        isCompleted: false,
      },
      {
        id: 4,
        title: "todo 4",
        isCompleted: true,
      },
      {
        id: 5,
        title: "todo 5",
        isCompleted: false,
      },
    ];
    ```

11. Add TodoList to App.tsx and pass it the todos
12. Map through the todos
13. Add title and checkbox to Todo
14. Center list
15. Add delete button
16. Use state for the Todo list
17. Add conditional styling for todo title
