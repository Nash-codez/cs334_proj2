import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountIcon from "@material-ui/icons/AccountCircleTwoTone";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatIcon from '@material-ui/icons/Chat';

export default function NavBar2() {
  
  return (
    <div className='nav-container'>
     <AppBar color='secondary' position='sticky'>
        <Toolbar disableGutters sx={{ order: 0, display: 'flex', position:'sticky' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <img className='logo' src='../../static/images/myapplogo.png' alt='logo'></img>
            </Box>
       </Toolbar>
     </AppBar>
    </div>
  );
}