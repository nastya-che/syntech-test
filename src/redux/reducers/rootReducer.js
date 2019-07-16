import {combineReducers} from 'redux';
import {changePageReducer} from './changePageReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    pageNum: changePageReducer,
    form: reduxFormReducer
});