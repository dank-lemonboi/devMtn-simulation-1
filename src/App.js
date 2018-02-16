import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="shelf_container">
       <Link to="/shelfA"><p>Shelf A</p></Link>
       <Link to='/shelfB'><p>Shelf B</p></Link>
       <Link to='/shelfC'><p>Shelf C</p></Link>
       <Link to='/shelfD'><p>Shelf D</p></Link>
       {routes}
       </div>
      </div>
    );
  }
}

export default App;
