import { ADD_COLLABORATOR, SET_COLLABORATORS } from "../types/collaboratorTypes"

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