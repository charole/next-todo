import axios from '.';
import { TodoType } from '../../types/todo';

// todo list 데이터를 가져옴
export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');

// todo check
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
