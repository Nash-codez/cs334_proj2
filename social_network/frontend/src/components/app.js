import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import GroupPage from "./GroupPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                 <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/groups" element={<GroupPage/>} />
                </Routes>
            </Router>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);