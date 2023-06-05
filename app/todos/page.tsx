import { TodoList } from '@/components/model/todo/TodoList';
import { Todo } from '@/types/todo';

const getData = async (): Promise<Todo[]> => {
  const res = await fetch('http://localhost:3000/api/todos');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const TodoListPage = async () => {
  const data = await getData();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <TodoList todoList={data} />
    </main>
  );
};

export default TodoListPage;
