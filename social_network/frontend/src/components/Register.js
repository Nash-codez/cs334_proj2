import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@material-ui/core";
import React, { Component, useState } from "react";
import NavBar2 from "../pages/NavBar2";

export default function Register() {
    const [usrName, setUsrName] = React.useState('');
    const [usrSurname, setSurname] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Gender, setGender] = React.useState('');
    const [Pass1, setPass1] = React.useState('');
    const [Pass2, setPass2] = React.useState('');

    const handleUsrName = (e) => {
        setUsrName(e.target.value);
    };

    const handleSurname = (e) => {
        setSurname(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleGender = (e) => {
        console.log(e.target.value)
        setGender(e.target.value);
    };

    const handlePass1 = (e) => {
        setPass1(e.target.value);
    };

    const handlePass2 = (e) => {
        setPass2(e.target.value);
    };

    const handleReg = () => {
       
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            usr_name: usrName,
            usr_surname: usrSurname,
            email: Email,
            phone_num: Phone,
            gender: Gender,
            password: Pass2
          })
        };
        fetch('/api/create-user', requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data));
    };

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
                                        <TextField variant="standard" required label='Name' size="small" color="secondary" onChange={handleUsrName}/>
                                        <TextField variant="standard" required label='Surname' size="small" color="secondary" onChange={handleSurname}/>
                                    </Stack>
                                    <TextField variant="standard" required label='Email' size="small" fullWidth color="secondary" onChange={handleEmail}/>
                                    <TextField variant="standard" label='Phone Number' size="small" fullWidth color="secondary" onChange={handlePhone}/>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender1" style={{display: 'initial'}} onChange={handleGender}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                    <TextField variant="standard" required label='Password' size="small" fullWidth color="secondary" type="password" onChange={handlePass1}/>
                                    <TextField variant="standard" required label='Confirm Password' size="small" fullWidth color="secondary" type="password" onChange={handlePass2}/>
                                    <Stack direction='column' spacing={1}>
                                        <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." />
                                        <Button type="submit" variant="contained" color='secondary' onClick={handleReg}>Sign Up</Button>
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