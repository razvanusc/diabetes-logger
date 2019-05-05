export const createEntry = (entry) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('entries').add({
            ...entry,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ENTRY', entry })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ENTRY_ERROR', err })
        })
    }
}