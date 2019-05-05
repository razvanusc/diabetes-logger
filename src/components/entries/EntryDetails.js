import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import EntrySummary from './EntrySummary'


const EntryDetails = (props) => {
    const { entry } = props
    if (entry) {
        return (
            <div className="entry-list">
                <EntrySummary entry={entry}/>
            </div>
        )
    } else {
        return (
            <div><p>Loading entry...</p></div>
        )
    }
}

const mapStateToProps = (state, ownParams) => {
    const id = ownParams.match.params.id
    const entries = state.firestore.data.entries;
    const entry = entries ? entries[id] : null
    return {
        entry: entry
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'entries' }
    ])
)(EntryDetails);