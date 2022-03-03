import { ADD_COLLABORATOR } from "../types/collaboratorTypes"

export const addCollaborator = (obj) => { 
    return {
        type: ADD_COLLABORATOR,
        payload: obj
    }
}