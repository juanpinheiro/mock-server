const endPoints = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_END_POINTS':
            return [...action.endPoints];
        case 'RECEIVE_END_POINTS_ERROR':
            return [];
        default:
            return state;
    }
};

export default endPoints;
