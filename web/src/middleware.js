import * as actions from './actions';
import { get, post, del } from './agent';

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
            const data = store.getState().endPointInfo;

            post('/mock', data).then(
                res => {
                    next(actions.addEndPoint(
                        {
                            ...data,
                            _id: res.data._id,
                        }
                    ));
                },
                err => {
                    console.log(err);
                }
            );
            break;
        case 'DELETE_END_POINT':
            del('/mock/' + action.id).then(
                res => {
                    next(actions.removeEndPointFromList(action.id));
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
