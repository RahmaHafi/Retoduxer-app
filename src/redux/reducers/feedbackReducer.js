

import toast from 'react-simple-toasts'
import {REQUEST_STARTED,REQUEST_SUCCEEDED,REQUEST_FAILED} from '../types/feedbackTypes'
 
const initilaState={
    loading:false,
    error:""
}

const feedbackReducer = (state= initilaState,action)=>{
    switch (action.type) {
        case REQUEST_STARTED:{
            return{
                ...state,
                loading:true
            }
        }
            
        case REQUEST_SUCCEEDED:{
            return{
                ...state,
                loading:false
            }
        }

        case REQUEST_FAILED:{
        toast(action.payload)
        return{
            ...state,
            loading:false,
            error:action.payload
        }
        }
    
        default:
            return state;
    }

}
export default feedbackReducer

