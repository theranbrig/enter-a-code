import React, { useState } from 'react';

const Home = props => {
  const code = '4353452';
  const [enterCode, setEnterCode] = useState('');
  return (
    <div className="center-div">
      <div className="input-form">
        <h1>Enter Your Six Digit Code</h1>
        <input
          type="text"
          id="enterCode"
          name="enterCode"
          required
          onChange={e => setEnterCode(e.target.value)}
          value={enterCode}
        />
        <div className="button-area">
          <button
            onClick={() => {
              if (enterCode === code) {
                props.history.push('/success');
              } else {
                props.history.push('/fail');
              }
            }}>
            Enter Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
