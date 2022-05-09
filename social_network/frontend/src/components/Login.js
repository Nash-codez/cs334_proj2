import React, { Component } from "react";
import { Grid, Avatar, Typography, TextField, Button, Paper, Stack } from "@material-ui/core";
import NavBar2 from "../pages/NavBar2";
import { Link } from "react-router-dom";

export default function Login() {
   return (
       <div className="background">
           <div className="home-row-wrapper">
                <div className="top">
                        <NavBar2 />
                </div>
                <div>
                <Grid>
                    <Paper  className='login-paper' elevation={10}>
                        <Grid align='center' sx={{ pb: 5}}>
                            <Avatar />
                            <Typography variant="h5" sx={{ margin: 1, fontSize: '1.7em' }}>Login</Typography>
                            <Typography variant="caption" color="text.secondary">Welcome back!!</Typography>
                        </Grid>
                        <form>
                            <Stack direction="column" spacing={2} sx={{ ml: 7 }}>
                                <TextField 
                                    variant="outlined" 
                                    required 
                                    label='Email' 
                                    size="small" 
                                    color="secondary" 
                                    placeholder="Enter your email..."
                                    focused
                                    sx={{ width: '75%'}}
                                />
                                <TextField 
                                    variant="outlined" 
                                    required 
                                    label='Password' 
                                    size="small" 
                                    color="secondary" 
                                    type="password"
                                    placeholder="Enter passwrod..." 
                                    focused
                                    sx={{ width: '75%'}}
                                />
                                <Button type="submit" variant="contained" color='secondary' sx={{ mt: 1, ml: 6, width: '20%'}}>Login</Button>
                                <Typography variant="subtitle2">Don't have an account? <Link to="/registration">Sign Up</Link></Typography>
                            </Stack>
                        </form>
                    </Paper>
                </Grid>
                </div>
            </div>
        </div>
   );
    
}