export const createEntry = (entry) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to db
        const firestore = getFirestore();
        const creatorId = getState().firebase.auth.uid;

        firestore.collection('entries').add({
            ...entry,
            creatorId: creatorId,
            createdAt: new Date(),
            unit: 'mg/dl'
        }).then(() => {
            dispatch({ type: 'CREATE_ENTRY', entry })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ENTRY_ERROR', err })
        })
    }
}

export const updateEntry = (entry) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const creatorId = getState().firebase.auth.uid;

        firestore.collection('entries').update({
            ...entry,
            creatorId: creatorId,
            createdAt: new Date(),
            unit: 'mg/dl'
        }).then(() => {
            dispatch({ type: 'UPDATE_ENTRY', entry })
        }).catch((err) => {
            dispatch({ type: 'UPDATE_ENTRY_ERROR', err })
        })
    }
}