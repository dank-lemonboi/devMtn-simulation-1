import React, { Component } from 'react';
import routes from './routes.js';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='nav_bar'>
     <Link to='/'><p>Home</p></Link>
      </div>
       {routes}
      </div>
    );
  }
}

export default App;
