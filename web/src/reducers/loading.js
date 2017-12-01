const initialState = {
    active: false,
};

const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_END_POINTS':
        case 'GET_END_POINT_INFO':
        case 'POST_END_POINT':
        case 'DELETE_END_POINT':
            return {
                active: true,
            };
            case 'RECEIVE_END_POINT_INFO':
            case 'RECEIVE_END_POINT_INFO_ERROR':
            case 'ADD_RESPONSE':
            case 'EDIT_RESPONSE_CODE':
            case 'EDIT_RESPONSE_DATA':
            case 'EDIT_USE':
            case 'EDIT_METHOD':
            case 'EDIT_ROUTE':
            case 'EDIT_TIME_OUT':
            case 'NEW_END_POINT':
            case 'ADD_END_POINT':
            case 'RECEIVE_END_POINTS':
            case 'RECEIVE_END_POINTS_ERROR':
            case 'REMOVE_END_POINT_FROM_LIST':
            return {
                active: false,
            };
        default:
            return state;
    }
};

export default loading;
