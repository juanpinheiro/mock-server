const endPointInfo = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_END_POINT_INFO':
            return {...action.endPointInfo};
        case 'RECEIVE_END_POINT_INFO_ERROR':
            return {};
        default:
            return state;
    }
};

export default endPointInfo;
