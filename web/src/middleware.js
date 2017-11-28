import * as actions from './actions';
import { get } from './agent';

const middleware = store => next => action => {

    next(action);

    switch (action.type) {
        case 'GET_END_POINTS':
            get('/mocks').then(
                res => {
                    next(actions.receiveEndPoints(res.data));
                },
                err => {
                    next(actions.receiveEndPointsError(err));
                }
            );
            break;
        case 'GET_END_POINT_INFO':
            get('/mock/' + action.id).then(
                res => {
                    next(actions.receiveEndPointInfo(res.data));
                },
                err => {
                    next(actions.receiveEndPointInfoError(err));
                }
            );
            break;
        default:
            break;
    }
};

export default middleware;
