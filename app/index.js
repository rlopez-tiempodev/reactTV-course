import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './components/App';
import Home from './components/pages/Home';
import TVListPage from './components/pages/TVListPage';

import HelloWorld from './helloworld';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tvlist" component={TVListPage} />
            <Route path="hello" component={HelloWorld} />
        </Route>
    </Router>
);


ReactDOM.render(Routes, document.getElementById('app'));
