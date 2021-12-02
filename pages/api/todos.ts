import { NextApiResponse, NextApiRequest } from 'next';
import fs from 'fs';
import { TodoType } from '../../types/todo';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
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
      const todoBuffer = fs.readFileSync('data/todos.json');
      const todoString = todoBuffer.toString();
      if (!todoString) {
        res.statusCode = 200;
        return res.send([]);
      }
      const todos: TodoType[] = JSON.parse(todoString);
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
};
