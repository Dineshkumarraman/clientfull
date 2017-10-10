import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/custom-style.css';
class App extends Component {
  render() {
    return (
        <div className="App-header frontend-header">
          <div>
            <h2>Welcome to <span>BanyanX</span></h2>
          </div>
          <div className="linking-button">
            <span> <Link to="/index">Start Now</Link></span>
             <span> <Link to="/send-msg">Send Message</Link></span>
          </div>

          <div>
            {this.props.children}
          </div>

        </div>
   );
  }
}

export default App;
