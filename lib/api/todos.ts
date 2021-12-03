import axios from '.';
import { TodoType } from '../../types/todo';

// todo list get
export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');

// todo check
export const checkTodoAPI = (id: number) => axios.patch(`api/todo/${id}`);

// todo add
interface AddTodoAPIBody {
  text: string;
  color: TodoType['color'];
}
export const addTodoAPI = (body: AddTodoAPIBody) =>
  axios.post('api/todo', body);

// todo delete
export const deleteTodoAPI = (id: number) => axios.delete(`api/todo/${id}`);
