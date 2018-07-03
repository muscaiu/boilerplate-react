import React from 'react';
import {
    Router,
    Route,
} from 'react-router';

import Home from 'components/Home';
import Login from 'components/Login';
import ReduxTest from 'components/ReduxTest';

export default function createRouter(history) {
    return () => (
        <Router history={history}>
            <Route path="/" component={Home}></Route>
            <Route path="login" component={Login}></Route>
            <Route path="redux" component={ReduxTest}></Route>
        </Router>
    );
}
