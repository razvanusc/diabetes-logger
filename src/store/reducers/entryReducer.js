const initState = {}

const entryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ENTRY':
            console.log('created entry', action.entry) 
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        case 'UPDATE_ENTRY':
            console.log('updated entry', action.entry)
            return state;
        case 'UPDATE_ENTRY_ERROR':
            console.log('update entry error', action.err)
            return state;
        default:
            return state;
    }
}

export default entryReducer;