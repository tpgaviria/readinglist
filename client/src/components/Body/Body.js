import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Body.css";
import Saved from "./Saved";
import Search from "./Search";

const Body = props => (
    <div className="container">
        <Router>
            <main>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route path="/saved" component={Saved} />
                </Switch>
            </main>
        </Router>
    </div>
);

export default Body;