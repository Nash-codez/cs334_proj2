import { Typography, Fab, Stack, Paper } from '@material-ui/core';
import { Box, flexbox } from '@material-ui/system';
import React from 'react';
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function LandingPage() {
  return (
    <div className='landing-background'>
        <div className='landing-shadow'>
          <div className='landing-rows'>
            <div className='landing-top'>
              <Box sx={{ display: 'flex', width: '85%', maxHeight: '100%' }}>
                <img className='landing-logo' src='../../static/images/myapplogo1.png' alt='logo' />
              </Box>
            </div>
            <div className='landing-bot'>
              <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Stack spacing={2}>
                  <Paper elevation={0} sx={{ bgcolor: 'transparent', pb: 6}}>
                    <Typography className='welcome' variant='h1' color='GrayText'>
                      WELCOME!!
                    </Typography>
                  </Paper>
                  <Link to="/login">
                    <Fab variant='extended' color='white' aria-label='login' sx={{ width: '14em', fontSize: '1.3em', ml: 11.5}}>
                        LOGIN
                        <ArrowForwardIcon />
                    </Fab>
                  </Link>
                  <Link to="/registration">
                    <Fab variant='extended' color='white' aria-label='login' sx={{ width: '14em', fontSize: '1.3em', ml: 11.5}}>
                        REGISTER
                        <ArrowForwardIcon />
                    </Fab>
                  </Link>
                </Stack>
              </Box>
            </div>
          </div>
        </div>
    </div>
  )
}
