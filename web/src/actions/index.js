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

export const addResponse = () => ({
    type: 'ADD_RESPONSE',
});

export const editResponseCode = (index, code) => ({
    type: 'EDIT_RESPONSE_CODE',
    index,
    code,
});

export const editResponseData = (index, data) => ({
    type: 'EDIT_RESPONSE_DATA',
    index,
    data,
});

export const editUse = use => ({
    type: 'EDIT_USE',
    use,
});

export const editMethod = method => ({
    type: 'EDIT_METHOD',
    method,
});

export const editRoute = route => ({
    type: 'EDIT_ROUTE',
    route,
});

export const editTimeout = timeout => ({
    type: 'EDIT_TIME_OUT',
    timeout,
});

export const postEndPoint = endPoint => ({
    type: 'POST_END_POINT',
    endPoint,
});

export const newEndPoint = endPoint => ({
    type: 'NEW_END_POINT',
});

export const addEndPoint = endPoint => ({
    type: 'ADD_END_POINT',
    endPoint,
});

export const deleteEndPoint = id => ({
    type: 'DELETE_END_POINT',
    id,
});

export const removeEndPointFromList = id => ({
    type: 'REMOVE_END_POINT_FROM_LIST',
    id,
});
