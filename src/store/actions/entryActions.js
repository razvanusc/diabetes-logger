export const createEntry = (entry) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const creatorId = getState().firebase.auth.uid;

        firestore.collection('entries').add({
            ...entry,
            creatorId: creatorId,
            unit: 'mg/dl'
        }).then(() => {
            dispatch({ type: 'CREATE_ENTRY', entry })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ENTRY_ERROR', err })
        })
    }
}

export const updateEntry = (entry, uid) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();

        firestore.collection('entries').doc(uid).update({
            ...entry
        }).then(() => {
            dispatch({ type: 'UPDATE_ENTRY', entry })
        }).catch((err) => {
            dispatch({ type: 'UPDATE_ENTRY_ERROR', err })
        })
    }
}

export const removeEntry = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('entries').doc(id).delete().then(() => {
            dispatch({ type: 'REMOVE_ENTRY', })
        }).catch((err) => {
            dispatch({ type: 'REMOVE_ENTRY_ERROR', err })
        })
    }
}