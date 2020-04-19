import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Notfoundpage from '../shared/Notfound/Notfoundpage';
import Dashboard from '../components/dashboard/Dashboard';
import NoSurvey from '../components/surveys/NoSurveys';
import ViewSurveys from '../components/surveys/ViewSurveys'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ Dashboard } />
            <Route path="/viewsurveys" exact component={ViewSurveys}/>
            {/* <Route path="/notfound" exact component={ Notfoundpage } /> */}
            <Route path="/nosurvey" exact component={ NoSurvey }/>
        </Switch>
    </Router>
)

export default Routes;