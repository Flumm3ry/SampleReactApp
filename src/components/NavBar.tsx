import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    title: {
        padding: 10,
        color: 'white',
    }
});

const NavBar = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                        <Typography variant="h6" className={classes.title}>Home</Typography>
                    </Link>
                    <Link to="/deleted" style={{textDecoration: "none", color: "inherit"}}>
                        <Typography variant="h6" className={classes.title}>Deleted Items</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;