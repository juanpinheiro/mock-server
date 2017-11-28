export const getEndPoints = () => ({
    type: 'GET_END_POINTS',
});

export const receiveEndPoints = endPoints => ({
    type: 'RECEIVE_END_POINTS',
    endPoints,
});

export const receiveEndPointsError = err => ({
    type: 'RECEIVE_END_POINTS_ERROR',
    err,
});

export const getEndPointInfo = id => ({
    type: 'GET_END_POINT_INFO',
    id
});

export const receiveEndPointInfo = endPointInfo => ({
    type: 'RECEIVE_END_POINT_INFO',
    endPointInfo,
});

export const receiveEndPointInfoError = err => ({
    type: 'RECEIVE_END_POINT_INFO_ERROR',
    err,
});
