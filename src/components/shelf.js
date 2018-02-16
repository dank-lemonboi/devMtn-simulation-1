import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Shelf extends Component {
    constructor() {
        super()
    }

    render() {
        let arr = [1,2,3,4,5]
        const binList = arr.map( (e, i) => {
            return <Link to={`/bin/${this.props.match.params.id}${e}`} key={i}><p>{`Bin ${e}`}</p></Link>
        })
        return(
            <div className='shelf_container'>
              <p>{`This is shelf ${this.props.match.params.id}`}</p>
              <div className='shelf'>
              {binList}
              </div>
            </div>
        );
    }
}