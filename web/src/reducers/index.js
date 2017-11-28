import { combineReducers } from 'redux';
import endPoints from './endPoints';
import endPointInfo from './endPointInfo';

const app = combineReducers({
    endPoints,
    endPointInfo,
});

export default app;
