import React, { Component } from "react";
import Login from "./Login";
import GroupPage from "./GroupPage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>This is the Home Page!!</p>;
    }
}