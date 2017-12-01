const endPoints = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_END_POINTS':
            return [...action.endPoints];
        case 'RECEIVE_END_POINTS_ERROR':
            return [];
        case 'ADD_END_POINT':
            if(state.some(endPoint => endPoint._id === action.endPoint._id))
                return state.map(endPoint => {
                    if(endPoint._id === action.endPoint._id)
                        return {...action.endPoint};

                    return endPoint;
                })

            return [
                ...state,
                action.endPoint,
            ];
        case 'REMOVE_END_POINT_FROM_LIST':
            return state.filter(endPoint => endPoint._id !== action.id);
        default:
            return state;
    }
};

export default endPoints;
