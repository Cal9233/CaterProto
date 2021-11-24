import React from 'react';
import { AppBar, Typography, makeStyles } from '@material-ui/core';
import { Toolbar } from '@mui/material';

const Header = () => {

  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: 'red',
      },
    logo: {
      fontFamily: 'Work Sans, sans-serif',
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
      }
    })
  );

  const classes = useStyles();

  const defaultToolBar = () => {
    return <Toolbar className={classes.logo}>{logo}</Toolbar>
  }

  const logo = (
    <Typography variant="h6" component="h1">Logo</Typography>
  );

  return (
    <div>
      <AppBar className={classes.header}>{defaultToolBar()}</AppBar>
    </div>
  )
}

export default Header
