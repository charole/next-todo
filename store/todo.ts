import { TodoType } from '../types/todo';

export const SET_TODO_LIST = 'todo/SET_TODO_LIST';

export const setTodo = (payload: TodoType[]) => ({
  type: SET_TODO_LIST,
  payload,
});

export const todoActions = { setTodo };

interface TodoState {
  todos: TodoType[];
}

const initialState: TodoState = {
  todos: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
