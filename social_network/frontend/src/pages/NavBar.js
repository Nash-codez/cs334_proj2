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
} from "@material-ui/core";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </Container>
  );
}


