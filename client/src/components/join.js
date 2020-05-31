import React from 'react';

const Join = () => (
  <div className="container join">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="name"
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          placeholder="Phone Number"
        />
      </div>
      <button className="btn btn-success pull-right">Join cryptoR</button>
    </form>
  </div>
);

export default Join;
