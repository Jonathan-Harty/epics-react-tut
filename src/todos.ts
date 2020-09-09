export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
};

export let todos: Todo[] = [
  {
    id: 1,
    title: 'todo 1',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'todo 2',
    isCompleted: true,
  },
  {
    id: 3,
    title: 'todo 3',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'todo 4',
    isCompleted: true,
  },
  {
    id: 5,
    title: 'todo 5',
    isCompleted: false,
  },
];