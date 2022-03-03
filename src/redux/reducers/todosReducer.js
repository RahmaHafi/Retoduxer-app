
import { ADD_TODO } from "../types/todoTypes";
import { DELETE_TODO } from '../types/todoTypes';
import { UPDATE_TODO } from '../types/todoTypes';
import { TOGGLE_TODO } from '../types/todoTypes';

const initialState = [
  {
    id: "1",
    title: "Learn Node.js",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
    completed: false,
    userId: "2"
  },
  {
    id: "2",
    title: "Learn MongoDB",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
    completed: false,
    userId: ""
  },
];
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todoToInsert = {
        ...action.payload,
        id: Math.floor(Math.random() * 10000).toString(),
        completed: false
      }
      return [...state, todoToInsert]

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    case UPDATE_TODO:
      return state.map(todo => todo.id === action.payload.id ? { ...todo, ...action.payload.obj } : todo)
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)

    default: {
      return state;
    }
  }
}

export default todosReducer;