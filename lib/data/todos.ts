import { readFileSync } from 'fs';
import { TodoType } from '../../types/todo';

const getList = () => {
  /* readFile, Promise 사용 시
    const todos = new Promise<TodoType[]>((resolve, reject) => {
      fs.readFile('data/todos.json', (err, data) => {
        if (err) {
          return reject(err.message);
        }
        const todoData = data.toString();
        if (!todoData) {
          return resolve([]);
        }
        const todos = JSON.parse(data.toString());
        return resolve(todos);
      });
    });
  */

  const todoBuffer = readFileSync('data/todos.json');
  const todoString = todoBuffer.toString();
  if (!todoString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todoString);
  return todos;
};

export default { getList };
