import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Box,
  Button,
  IconButton,
  Container,
  ButtonGroup
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountIcon from "@material-ui/icons/AccountCircleTwoTone";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function NavBar() {
  return (
    <div className='nav-container'>
     <AppBar color='secondary' position='sticky'>
        <Toolbar disableGutters sx={{ order: 0, display: 'flex', position:'sticky' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/login"><img className='logo' src='../../static/images/myapplogo.png' alt='logo'></img></Link>
            </Box>
              <ButtonGroup
                size="large"
                edge="flex-end"
                color='inherit'
                aria-label="open drawer"
                positon="absolute"
                sx={{ order: 5, justifyContent: 'flex-end', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '20%' }}
              >
                <IconButton><AccountIcon color='dark_button'/></IconButton>
                <IconButton><KeyboardArrowDownIcon color='dark_button' /></IconButton>
              </ButtonGroup>
       </Toolbar>
     </AppBar>
    </div>
  );
}


