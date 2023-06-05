'use client';

import { useEffect } from 'react';

const TodoListError = ({ error }: { error: Error }): JSX.Element => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div>Error while fetching todo list</div>;
};

export default TodoListError;
