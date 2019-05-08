import React from 'react';
import EntrySummary from '../EntrySummary/EntrySummary';
import './EntryList.css'

const EntryList = ({ entries }) => {
    return (
        <div className="entry-list">
            {entries && entries.map((entry) =>
                <EntrySummary entry={entry} className='entry' key={entry.id} />
            )}
        </div>

    )
}

export default EntryList;