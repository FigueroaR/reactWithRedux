import {CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types'
import _ from 'loadash'
//we import the omit library and use it with the underscore

export default (state = {} , action ) => {
    switch (action.type) {
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM: 
            return {...state, [action.payload.id]: action.payload}
        case DELETE_STREAM: 
            // we use state and get back payload with out the deleted item 
            return _.omit(state, action.payload.id)
        default:
            return state
    }
}