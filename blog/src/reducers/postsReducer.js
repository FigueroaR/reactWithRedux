import { bindActionCreators } from "redux"

export default (state = [], action) => {

    switch(action){
        case 'FETCH_POSTS':
            return [...state, action.payload]   


        default: 
            return state;
    }
}