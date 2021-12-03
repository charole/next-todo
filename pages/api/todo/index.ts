import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { text, color } = req.body;
      if (!text || !color) {
        res.statusCode = 400;
        return res.send('color 혹은 text가 존재하지 않습니다.');
      }
      const todos = Data.todos.getList();
      let todoId: number;
      if (todos.length > 0) {
        todoId = todos[todos.length - 1].id + 1;
      } else {
        todoId = 1;
      }
      const newTodo = {
        id: todoId,
        text,
        color,
        checked: false,
      };
      Data.todos.write([...todos, newTodo]);
      res.statusCode = 200;
      return res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  }
  res.statusCode = 405;
  return res.end();
};
