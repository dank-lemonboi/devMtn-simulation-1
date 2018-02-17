import React, { Component } from 'react';
import routes from './routes.js';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
         <div>
           {routes}
         </div>
      </div>
    );
  }
}

export default App;
