import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    transactions: transactionsReducer
})

export default rootReducer