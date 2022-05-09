import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import NavBar2 from "../pages/NavBar2";

export default function Register() {
   return (
       <div className="background">
           <div className="home-row-wrapper">
                <div className="top">
                        <NavBar2 />
                </div>
                <div>
                    <Grid>
                        <Paper  className='reg-paper' elevation={10}>
                            <Grid align='center'>
                                <Avatar />
                                <Typography variant="h5" sx={{ margin: 0, fontSize: '1.7em' }}>Sign Up</Typography>
                                <Typography variant="caption">Please fill in all the fields below!</Typography>
                            </Grid>
                            <form sx={{ pt: '1.5em'}}>
                                <Stack direction='column' spacing={1}>
                                    <Stack direction='row' spacing={5}>
                                        <TextField variant="standard" required label='Name' size="small" color="secondary"/>
                                        <TextField variant="standard" required label='Surname' size="small" color="secondary"/>
                                    </Stack>
                                    <TextField variant="standard" required label='Email' size="small" fullWidth color="secondary"/>
                                    <TextField variant="standard" label='Phone Number' size="small" fullWidth color="secondary"/>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender1" style={{display: 'initial'}}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                    <TextField variant="standard" required label='Password' size="small" fullWidth color="secondary" type="password" />
                                    <TextField variant="standard" required label='Confirm Password' size="small" fullWidth color="secondary" type="password"/>
                                    <Stack direction='column' spacing={1}>
                                        <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." />
                                        <Button type="submit" variant="contained" color='secondary'>Sign Up</Button>
                                    </Stack>
                                </Stack>
                            </form>
                        </Paper>
                    </Grid>
                </div>
            </div>
        </div>
   );
    
}