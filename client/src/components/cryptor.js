import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';

const Cryptor = (props) => (
  <>
    <Logo />
    <h1 style={{ textAlign: 'center' }}>
      <u>
        <b>cryptoR</b>
      </u>
    </h1>
    <div className="container cryptor">
      <div className="row">
        <div className="col-sm-12">
          <button
            onClick={(e) => props.handleClick('members')}
            className="btn btn-sm btn-outline-primary ml-4"
          >
            Members
          </button>
          <button
            onClick={(e) => props.handleClick('activities')}
            className="btn btn-sm btn-primary"
          >
            Jobs
          </button>
          <button
            onClick={(e) => props.handleClick('notifications')}
            className="btn btn-sm btn-success"
          >
            Notification
          </button>
          <button
            onClick={(e) => props.handleClick('join')}
            className="btn btn-sm btn-danger"
          >
            Become a cryptoR member
          </button>
          <Link to="/team/logo">
            <button className="btn btn-sm btn-primary">Teams Logo</button>
          </Link>
        </div>
      </div>
    </div>
  </>
);
export default Cryptor;
