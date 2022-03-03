import {ADD_COLLABORATOR, SET_COLLABORATORS} from '../types/collaboratorTypes';

const initialState = [];
const collaboratorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLABORATOR:
     const newCollabToAdd={
       ...action.payload,
       id :Math.floor(Math.random()*10000).toString()
     } 
     return [...state,newCollabToAdd]
     case SET_COLLABORATORS: {
      return action.payload.map(user => {
        delete user.address;
        delete user.company;
        delete user.website;
        return {
          ...user,
          id: user.id ? user.id.toString() : ""
        }
      });
    }
    default:
    return state;
  }
  
}

export default collaboratorsReducer;