import React from 'react';
import EntrySummary from './EntrySummary';

const EntryList = ({entries}) => {
    console.log(entries)
    return (
        <div className="entry-list">
            { entries && entries.map((entry, i) => 
                <EntrySummary entry={entry} key={i} />
            )}
        </div>

    )
}

export default EntryList;