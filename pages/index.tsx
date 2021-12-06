import React from 'react';
import { NextPage } from 'next';
import TodoList from '../components/TodoList';
import { getTodosAPI } from '../lib/api/todos';
import { TodoType } from '../types/todo';
import { wrapper } from '../store';
import { todoActions } from '../store/todo';

interface IProps {
  todos: TodoType[];
}
const index: NextPage<IProps> = () => {
  return <TodoList todos={[]} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      try {
        const { data } = await getTodosAPI();
        store.dispatch(todoActions.setTodo(data));
        return { props: {} };
      } catch (e) {
        console.log(e);
        return { props: {} };
      }
    }
);

export default index;
