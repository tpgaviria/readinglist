import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Body.css";
import SavedPage from "../../pages/SavedPage";
import SearchPage from "../../pages/SearchPage";

const Body = props => (
    <div className="container">
        <Router>
            <main>
                <Switch>
                    <Route exact path="/" component={SearchPage} />
                    <Route path="/saved" component={SavedPage} />
                </Switch>
            </main>
        </Router>
    </div>
);

export default Body;