import axios from "axios"
import { ADD_COLLABORATOR, SET_COLLABORATORS } from "../types/collaboratorTypes"
import { requestFailed, requestStarted, requestSucceeded } from "./feedbackActionCreator"

export const addCollaborator = (obj) => { 
    return {
        type: ADD_COLLABORATOR,
        payload: obj
    }
}

export const setCollaborators = (users) => {
    return {
        type: SET_COLLABORATORS,
        payload: users
    }
}


export const fetchCollaborators = () => (dispatch) => {
    dispatch(requestStarted())
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(requestSucceeded())
            dispatch(setCollaborators(res.data))
        }).catch(err => {
            dispatch(requestFailed(err.message))
        })
}