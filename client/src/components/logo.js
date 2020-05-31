import React from 'react';

const Logo = () => {
  return (
    <div className="container-fluid">
      <h1 className="blinking" style={{ textAlign: 'center' }}>
        Work in Progress
      </h1>
      <br />
      <div id="diamond-narrow"></div>
      <div className="row">
        <div className="col-sm-6">
          <div id="diamond-narrow1"></div>
        </div>
        <div className="col-sm-6">
          <div id="diamond-narrow2"></div>
        </div>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-sm-6">
          <div id="diamond-narrow3"></div>
        </div>
        <div className="col-sm-6">
          <div id="diamond-narrow4"></div>
        </div>
      </div>

      <br />
      <div id="diamond-narrow5"></div>
    </div>
  );
};

export default Logo;
