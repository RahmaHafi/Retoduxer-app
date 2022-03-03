import { ADD_TODO } from '../types/todoTypes'
import { DELETE_TODO } from '../types/todoTypes'
import { UPDATE_TODO } from '../types/todoTypes'
import { TOGGLE_TODO} from '../types/todoTypes'
export const addTodo = (obj) => {
    return {
        type: ADD_TODO,
        payload: obj
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
export const updateTodo = (id, obj) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            obj
        }
    }
}
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}