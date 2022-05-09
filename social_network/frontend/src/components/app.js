import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import GroupPage from "./GroupPage";
import LandingPage from "./LandingPage";
import Register from "./Register";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                 <Routes>
                    <Route exact path="/" element={<LandingPage/>} />
                    <Route exact path="/home" element={<HomePage/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/groups" element={<GroupPage/>} />
                    <Route exact path="/registration" element={<Register/>} />
                </Routes>
            </Router>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);