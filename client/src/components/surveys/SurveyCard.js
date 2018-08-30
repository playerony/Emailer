import React from 'react';

export default ({ _id, title, body, dateSent, yes, no, lastResponded, onDelete }) => {
  return (
    <div className="card darken-1" key={_id}>
      <div className="card-content">
        <div className="right" onClick={() => onDelete(_id)}>
          <i className="material-icons">
            remove
          </i>
        </div>
        <span className="card-title">{title}</span>
        <p>{body}</p>
        {lastResponded && 
          <p className="right">
            / Last responded: {new Date(lastResponded).toLocaleDateString()}
          </p>
        }
        <p className="right">
          Send on: {new Date(dateSent).toLocaleDateString()}
        </p>
      </div>
      <div className="card-action">
        <a>Yes: {yes}</a>
        <a>No: {no}</a>
      </div>
    </div>
  );
};
