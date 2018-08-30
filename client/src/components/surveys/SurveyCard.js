import React from 'react';

export default ({ id, title, body, dateSent, yes, no, lastResponded }) => {
  return (
    <div className="card darken-1" key={id}>
      <div className="card-content">
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
