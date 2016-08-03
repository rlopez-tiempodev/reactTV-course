import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


import App from './components/App';
import Home from './components/pages/Home';
import TVListPage from './components/pages/TVListPage';
import MovieListPage from './components/pages/MovieListPage';

import HelloWorld from './helloworld';

const Routes = (
   <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={MovieListPage} />
        <IndexRoute component={Home} />
            <Route path="tvlist" component={TVListPage} />
            <Route path="genre/:id" component={MovieListPage} />
            <Route path="hello" component={HelloWorld} />
        </Route>
    </Router>
);


ReactDOM.render(Routes, document.getElementById('app'));
