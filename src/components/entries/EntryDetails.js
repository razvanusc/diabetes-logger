import React from 'react';

const EntryDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="project-details">
            <div className="card">
                <div className="card-category">Popular - {id}</div>
                <div className="card-description">
                    <h2>Le Wagon Shanghai</h2>
                    <p>Very cool city, the best</p>
                </div>
            </div>
        </div>
  )
}

export default EntryDetails;
