import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useStyles } from "./styles";
import memories from "../../images/memories.png";

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    console.log(user);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });

        history.push("/");

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={memories} alt="memories" height="60" />
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">W2W</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                <Button component={Link} to="/about" variant="contained" color="secondary">About</Button>
                <Button style={{margin: "5px"}} component={Link} to="/contact-us" variant="contained" color="secondary">Contact Us</Button>
                {user ? (
                    <div className={classes.profPic}>
                        {user.result.public.profilePic ? 
                        (
                            <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.purple} src={user.result.public.profilePic}></Avatar>
                        ):
                        (
                            <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.purple}>{user.result.public.firstName.charAt(0)}</Avatar>
                        )}
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><Button component={Link} variant="contained" to="/log" className={classes.about} color="primary">MyLog</Button></MenuItem>
                            {/* <MenuItem onClick={handleClose}><Button component={Link} variant="contained" to="/teams" className={classes.about} color="primary">MyTeams</Button></MenuItem> */}
                            <MenuItem onClick={handleClose}><Button component={Link} variant="contained" to="/profile" className={classes.about} color="primary">MyProfile</Button></MenuItem>
                            <MenuItem onClick={handleClose}><Button component={Link} variant="contained" to="/allUsers" className={classes.about} color="primary">AddFriends</Button></MenuItem>
                            <MenuItem onClick={handleClose}> <Button variant="contained" className={classes.about} color="secondary" onClick={logout}>Logout</Button></MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Button style={{marginRight: "5px"}} className={classes.toolbarMargin} component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;