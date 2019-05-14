const initState = {}

const entryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ENTRY':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        case 'UPDATE_ENTRY':
            return state;
        case 'UPDATE_ENTRY_ERROR':
            return state;
        case 'REMOVE_ENTRY':
            return state;
        case 'REMOVE_ENTRY_ERROR':
            return state;
        default:
            return state;
    }
}

export default entryReducer;