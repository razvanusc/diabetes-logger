import React from 'react';
import EntrySummary from '../EntrySummary/EntrySummary';
import './EntryList.css'

const EntryList = ({ entries }) => {
    if(!entries) return <div></div>

    return (
        <div className="entry-list">
            {entries && entries.map((entry, i, arr) =>
                <EntrySummary entry={entry} i={i} arr={arr} className='entry' key={entry.id} />
            )}
        </div>

    )
}

export default EntryList;