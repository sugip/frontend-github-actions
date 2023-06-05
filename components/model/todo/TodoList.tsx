import { Todo } from '@/types/todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todoList: Todo[];
};

export const TodoList = (props: TodoListProps): JSX.Element => {
  const { todoList } = props;

  return (
    <ul className='max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400'>
      {todoList.map((todo) => (
        <TodoItem key={todo.title} todo={todo}></TodoItem>
      ))}
    </ul>
  );
};
