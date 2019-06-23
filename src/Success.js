import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success-center-div">
      <div className="success-text">
        <h1>Success</h1>
        <h2>Whisper the word "Penguin" to your teacher to receive your next clue.</h2>
        <a>
          <Link to="/">Back To Code</Link>
        </a>
      </div>
    </div>
  );
};

export default Success;
