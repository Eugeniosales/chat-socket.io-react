import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateChat from './pages/PrivateChat';
import PublicChat from './pages/PublicChat';
import Login from './pages/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/private" component={PrivateChat} />
                <Route exact path="/public" component={PublicChat} />
            </Switch>
        </Router>
    );
}

export default Routes;