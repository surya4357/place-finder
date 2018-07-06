import React, {Component} from 'react';

import '../styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="heading">Hey there, welcome buddy!!!</div>
          <div className="content">
            <div className="sub-content">You have successfully completed the initial step - Setting up React project.</div>
            <div className="sub-content">
              <span>See, what do I got for you,</span>
              <ul>
                <li>Webpack</li>
                <li>Babel</li>
                <li>SASS</li>
              </ul>
            </div>
            <div className="sub-content">
              What are you waiting for? It's time to make hands dirty. Let's code :)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;