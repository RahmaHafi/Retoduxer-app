import axios from 'axios'
import { ADD_TODO, SET_TODOS } from '../types/todoTypes'
import { DELETE_TODO } from '../types/todoTypes'
import { UPDATE_TODO } from '../types/todoTypes'
import { TOGGLE_TODO} from '../types/todoTypes'
import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreator'
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
export const setTodos = (todos) => {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

export const fetchTodos = () => {
    return (dispatch, getState) => {
        dispatch(requestStarted())
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                dispatch(requestSucceeded())
                dispatch(setTodos(res.data))
            }).catch(err => {
                dispatch(requestFailed(err.message))
            })
    }
}