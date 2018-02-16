import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    let arr = ['A', 'B', 'C', 'D'];

    const routeId = arr.map( (element, i) => {
      return <Link to={`/bins/${element}`} key={i}><p>{`Shelf ${element}`}</p></Link>

    } )
    return (
      <div className="App">
       <div className="shelf_container">
      {routeId}
       </div>
      </div>
    );
  }
}

export default Home;