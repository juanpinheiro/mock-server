import * as actions from './actions';
import { get, post } from './agent';

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
        case 'POST_END_POINT':
            // FIXME
            const responses = store.getState().endPointInfo.responses.reduce((prev, cur) => {
                prev[cur.code] = {data: cur.data || {}};
                return prev;
            }, {});

            const data = {
                ...store.getState().endPointInfo,
                responses,
            };

            console.log(data);

            post('/mock/save', data).then(
                res => {
                    next(actions.getEndPoints());
                },
                err => {
                    console.log(err);
                }
            );
            break;
        default:
            break;
    }
};

export default middleware;
