import React from 'react';
import { Link } from 'react-router-dom';

const Fail = () => {
  return (
    <div className="fail-center-div">
      <div className="fail-info">
        <h1>Fail</h1>
        <h2>Go Back and Try Again</h2>
        <a>
          <Link to="/">Back To Code</Link>
        </a>
      </div>
    </div>
  );
};

export default Fail;
