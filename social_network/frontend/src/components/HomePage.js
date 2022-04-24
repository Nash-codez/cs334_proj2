import { Box, Container, CssBaseline, Grid, Paper, styled, Typography } from "@material-ui/core";
import React, { Component } from "react";
import NavBar from "../pages/NavBar";
import SideBar from "../pages/SideBar"

export default function Homepage(){

        return (
            <div className="background">
                <div className="home-row-wrapper">
                    <div className="top">
                        <NavBar />
                    </div>
                    <div className="home-col-wrapper">
                        <div className="home-left">
                            <SideBar />
                        </div>
                        <div className="home-right">
                        </div>
                    </div>
                </div>
           </div>
        );
}