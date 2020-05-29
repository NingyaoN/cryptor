import React from 'react';

const Cryptor = (props) => (
  <div className="container cryptor">
    <h1>cryptoR</h1>
    <button
      onClick={(e) => props.handleClick('members')}
      className="btn btn-info ml-4"
    >
      Members
    </button>
    <button
      onClick={(e) => props.handleClick('activities')}
      className="btn btn-primary"
    >
      Activities
    </button>
    <button
      onClick={(e) => props.handleClick('notifications')}
      className="btn btn-success"
    >
      Notification
    </button>
    <button
      onClick={(e) => props.handleClick('join')}
      className="btn btn-danger"
    >
      Join
    </button>
  </div>
);
export default Cryptor;
