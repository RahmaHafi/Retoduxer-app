import {ADD_COLLABORATOR} from '../types/collaboratorTypes';

const initialState = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "graham",
    email: "leanne@gmail.com",
    phone: "1-770-736-8031"
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "ervinh",
    email: "ervin@outlook.com",
    phone: "010-692-6593"
  },
];
const collaboratorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLABORATOR:
     const newCollabToAdd={
       ...action.payload,
       id :Math.floor(Math.random()*10000).toString()
     } 
     return [...state,newCollabToAdd]
    default:
    return state;
  }
  
}

export default collaboratorsReducer;