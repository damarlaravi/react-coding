import {combineReducers} from 'redux';
import ProfileReducer from './profile-data'
const rootReducer = combineReducers({
    profileData: ProfileReducer
});

export default rootReducer;