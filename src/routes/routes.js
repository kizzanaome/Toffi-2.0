import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfoundpage from '../shared/Not';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ DashboardView } />
            <Route path="/notfound" exact component={ Notfoundpage } />
        </Switch>
    </Router>
)

export default Routes;