import { readFileSync, writeFileSync } from 'fs';
import { TodoType } from '../../types/todo';

// todo 데이터 조회
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

// id 투두 존재 여부 체크
const exist = ({ id }: { id: number }) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};

const write = async (todos: TodoType[]) => {
  writeFileSync('data/todos.json', JSON.stringify(todos));
};

export default { getList, exist, write };
