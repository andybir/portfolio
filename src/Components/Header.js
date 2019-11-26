import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import red from '@material-ui/core/colors/red';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-5),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: 'Calistoga, cursive',
    fontSize: 35
  },
  palette: {
    //   primary: red[500],
  }
}));


function Header() {
    const classes = useStyles();
    // const primary = red[500]; // #F44336

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        className={classes.title}>
                        Andy Birosak
                    </Typography>
                    {/* <Button 
                        color="inherit">
                        Contact
                    </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header