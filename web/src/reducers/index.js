import { combineReducers } from 'redux';
import endPoints from './endPoints';
import endPointInfo from './endPointInfo';
import loading from './loading';

const app = combineReducers({
    endPoints,
    endPointInfo,
    loading,
});

export default app;
