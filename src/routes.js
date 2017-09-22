import React from 'react';
import {Router, Route,} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactRouter from 'react-router';

const browserHistory = createHistory();

import MainPage from './components/main-page';

export default () => (
    <Router history={browserHistory}>
        <Route path='/' component={MainPage} />
    </Router>
);