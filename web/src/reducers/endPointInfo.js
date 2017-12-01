const initialState = {
    method: 'GET',
    route: '',
    responses: [],
    timeout: 200,
};

const endPointInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_END_POINT_INFO':
            return {...action.endPointInfo};
        case 'RECEIVE_END_POINT_INFO_ERROR':
            return {};
        case 'ADD_RESPONSE':
            return {
                ...state,
                responses: [
                    ...state.responses,
                    {data: {}},
                ],
            };
        case 'EDIT_RESPONSE_CODE': {
            let responses = [...state.responses];

            responses[action.index].code = Number(action.code);

            return {
                ...state,
                responses,
            };
        }
        case 'EDIT_RESPONSE_DATA': {
            let responses = [...state.responses];

            try {
                responses[action.index].data = JSON.parse(action.data);
                delete responses[action.index].isJsonWrong;
            } catch(err) {
                responses[action.index].isJsonWrong = true;
            }

            return {
                ...state,
                responses,
            };
        }
        case 'EDIT_USE':
            return {
                ...state,
                use: action.use,
            };
        case 'EDIT_METHOD':
            return {
                ...state,
                method: action.method,
            };
        case 'EDIT_ROUTE':
            return {
                ...state,
                route: action.route,
            };
        case 'EDIT_TIME_OUT':
            return {
                ...state,
                timeout: action.timeout,
            };
        case 'NEW_END_POINT':
            return {...initialState};
        case 'ADD_END_POINT':
            return {
                ...state,
                _id: action.endPoint._id,
            };
        default:
            return state;
    }
};


export default endPointInfo;
