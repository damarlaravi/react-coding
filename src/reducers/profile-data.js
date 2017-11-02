import {EDIT_FORM, READ_DATA} from '../actions/index';

export default function(state = [], action) {
    //console.log(' Action Received :: ', action.payload);
    switch (action.type){
        case EDIT_FORM:
            return [action.payload.data, ...state];
            break;
        case READ_DATA:
            return [action.payload, ...state];
            break;
    }
    return state;
}