import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    grow: {
        flexGrow: 1,
    },
    title: {
        margin: theme.spacing(3),
        color: theme.palette.grey[100],
    }
}));

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
                    <Link to="/jokes" style={{textDecoration: "none", color: "inherit"}}>
                        <Typography variant="h6" className={classes.title}>Jokes</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;