import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./containers/HomePage";
import ProgressBars from "./containers/ProgressBars/ProgressBars";
import propTypes from "prop-types";

class App extends React.Component {
    render () {
        return (<Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/progress-bars" component={ProgressBars} />
            </Switch>
        </Router>);
    }
}

App.propTypes = {
    children: propTypes.element
};

export default App;
