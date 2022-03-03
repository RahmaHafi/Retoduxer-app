import {REQUEST_STARTED,REQUEST_SUCCEEDED,REQUEST_FAILED} from '../types/feedbackTypes'

export const requestStarted = () => ({
    type: REQUEST_STARTED
})
export const requestSucceeded = () => ({
    type: REQUEST_SUCCEEDED
})
export const requestFailed = (errorMessage) => ({
    type: REQUEST_FAILED,
    payload: errorMessage
})