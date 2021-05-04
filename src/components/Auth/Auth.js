import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';

import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import { signin, signup } from "../../actions/auth";

import AdminLogin from "./Admin";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [isCaptchaValidated, setIsCaptchaValidated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            if (isCaptchaValidated) {
                dispatch(signup(formData, history))
            }
        }
        else {
            dispatch(signin(formData, history))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsCaptchaValidated(false);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const setAdmin = () => {
        setIsAdmin(true);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;

        try {
            if(isSignup) {
                if (isCaptchaValidated) {
                    dispatch(signup(result, history))
                }
                else {
                    alert("you are a robot");
                }
            }
            else {
                dispatch(signin(result, history))
            }
        } catch (error) {
            console.log(error);
        }
    };

    function captchaChange() {
        setIsCaptchaValidated(true);
    }

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Aagain later");
    };

    if (isAdmin) {
        return (
            <AdminLogin setIsAdmin={setIsAdmin} />
        )
    }

    return (
        <Container component="main" maxWidth="xs">
            <GoogleReCaptchaProvider reCaptchaKey="6LdJSsMaAAAAAL1sJEipgkT-KqcslpaLzyTYPogC">
                <GoogleReCaptcha onVerify={captchaChange} />
            </GoogleReCaptchaProvider>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" /> 
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin 
                        clientId="972842827607-9el0aot1sjuq25dnlimrtb1meq1o3hce.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />} 
                                variant="contained"
                            >
                            {isSignup ? "Google Sign Up" : "Google Sign In"}
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={setAdmin}>
                                Admin?
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
