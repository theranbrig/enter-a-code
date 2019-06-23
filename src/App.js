import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Success from './Success';
import Fail from './Fail';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Route path="/" exact component={Home} />
        <Route path="/success" component={Success} />
        <Route path="/fail" component={Fail} />
      </div>
    </Router>
  );
}

export default App;
