import React, { useState } from "react";
import useStyles from "./styles";
import { Avatar, Typography, Button, Paper, Grid, Container } from "@material-ui/core";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';

import Input from "./Input";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {useHistory} from "react-router-dom";

const initialPassword = "";

const AdminLogin = ({ setIsAdmin }) => {
    const classes = useStyles();
    const [isCaptchaValidated, setIsCaptchaValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState(initialPassword);
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "310Admin") {
            history.push("/admin");
        }
        else {
            alert("Wrong Password");
        }
    };

    const setNotAdmin = () => {
        setIsAdmin(false);
    }

    function captchaChange() {
        setIsCaptchaValidated(true);
    }

    return (
        <Container component="main" maxWidth="xs">
            <GoogleReCaptchaProvider reCaptchaKey="6LdJSsMaAAAAAL1sJEipgkT-KqcslpaLzyTYPogC">
                <GoogleReCaptcha onVerify={captchaChange} />
            </GoogleReCaptchaProvider>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <SupervisorAccountIcon />
                </Avatar>
                <Typography variant="h5">
                    ADMIN
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Input name="password" label="Password" handleChange={passwordChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={setNotAdmin}>
                                Not Admin?
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default AdminLogin;