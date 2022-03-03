
import { ADD_TODO, SET_TODOS } from "../types/todoTypes";
import { DELETE_TODO } from '../types/todoTypes';
import { UPDATE_TODO } from '../types/todoTypes';
import { TOGGLE_TODO } from '../types/todoTypes';

const initialState = [];

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
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
    case SET_TODOS: {
      return action.payload.map(todo => ({
        ...todo,
        id: todo.id ? todo.id.toString() : "",
        userId: todo.userId && todo.userId.toString(),
        description: todo.description ? todo.description : ""
      }));
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;