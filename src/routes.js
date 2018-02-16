import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShelfA from './components/shelfA';
import ShelfB from './components/shelfB';
import ShelfC from './components/shelfC';
import ShelfD from './components/shelfD';

export default (
    <Switch>
        <Route path="/shelfA" component={ShelfA} />
        <Route path="/shelfB" component={ShelfB} />
        <Route path="/shelfC" component={ShelfC} />
        <Route path="/shelfD" component={ShelfD} />
    </Switch>
)