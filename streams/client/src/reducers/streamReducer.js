import {CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types'
import _ from 'lodash'
//we import the omit function and use it with the underscore

export default (state = {} , action ) => {
    switch (action.type) {
        case FETCH_STREAM:
            // we are mappin this array into objects
            return {...state, ..._.mapKeys(action.payload, 'id')}
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