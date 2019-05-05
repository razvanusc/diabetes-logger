import authReducer from './authReducer';
import entryReducer from './entryReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    entry: entryReducer,
    firestore: firestoreReducer
})

export default rootReducer;