import React, { Component } from 'react';


export default class Bin extends Component {
    render() {
        console.log(this.props)
        return(
          <div className='bin_container'>
          <p>Bin {`${this.props.match.params.id}`}</p>
            <div className='bin_contents'>
            <input /> <button>Update</button>
            <input /> <button>Delete</button>
            </div>
          </div>
        );
    }
}