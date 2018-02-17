import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Shelf from './components/shelf.js';
import Home from './components/home.js';
import Bin from './components/bin.js';

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/bins/:id" component={Shelf} />
        <Route path='/bin/:id' component={Bin} />
    </Switch>
)