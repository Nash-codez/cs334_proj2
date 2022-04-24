import { Box, Card, CardHeader, CardContent, IconButton, Paper, styled, Typography, Avatar, Stack, CardMedia } from "@material-ui/core";
import React, { Component } from "react";
import NavBar from "../pages/NavBar";
import SideBar from "../pages/SideBar"
import VisibilityIcon from '@material-ui/icons/Visibility'


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
                            <Box sx={{ display: 'flex', alignContent: 'center', pl: 4, pr: 4, pt: 4 }}>
                                <Stack spacing={1}>
                                    <Box className="home-post">
                                        <Card raised= 'true' sx={{ width: '100%', opacity: '65%' }}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="group-icon" sx={{ width: 28, height: 28 }}>
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="view">
                                                      <VisibilityIcon />
                                                    </IconButton>
                                                }
                                                title="Group 1"
                                            />
                                            <CardContent>
                                                <Box className="home-inner-post" sx={{ display: 'flex', pl: 1.5, pr: 1.5 }}>
                                                    <Typography>
                                                        Direct messages are another bonus mark opportunity. These messages should be in real-time
                                                        which means that they will primarily be peer-to-peer and this can be achieved using frameworks
                                                        such as WebRTC. One may store posts and group messages server-side.
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Box> 

                                    <Box className="home-post">
                                        <Card raised= 'true' sx={{ width: '100%', opacity: '65%' }}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="group-icon" sx={{ width: 28, height: 28 }}>
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="view">
                                                      <VisibilityIcon />
                                                    </IconButton>
                                                }
                                                title="Group 2"
                                            />
                                            <CardContent>
                                                <Box className="home-inner-post" sx={{ display: 'flex', pl: 1.5, pr: 1.5 }}>
                                                    <Typography>
                                                        Direct messages are another bonus mark opportunity. These messages should be in real-time
                                                        which means that they will primarily be peer-to-peer and this can be achieved using frameworks
                                                        such as WebRTC. One may store posts and group messages server-side.
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Box> 
                                </Stack>
                            </Box>
                        </div>
                    </div>
                </div>
           </div>
        );
}