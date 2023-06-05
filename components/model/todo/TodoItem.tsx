import {
  CompleteMark,
  IncompleteMark,
} from '@/components/ui/icon/ProgressMark';
import { Todo } from '@/types/todo';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: React.FC<TodoItemProps> = (props): JSX.Element => {
  const { todo } = props;

  return (
    <li className="flex items-center">
      {todo.done ? <CompleteMark /> : <IncompleteMark />}
      {todo.title}
    </li>
  );
};
