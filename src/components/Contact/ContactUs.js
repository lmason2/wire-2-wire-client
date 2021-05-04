import React from "react"
import { Typography, Container, Paper } from "@material-ui/core";

import useStyles from "./styles";

const ContactUs = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="s">
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.writing}>We Would love to hear from you!</Typography>
                <hr></hr>
                <Typography className={classes.smallWriting}>If you would like to contact us, please hit the link below.</Typography>
                <Typography><a href = "mailto:lukesamuelmason@gmail.com?subject=Wire2Wire%20Contact&body=Dear%20Wire2Wire,">I'm the link!</a></Typography>
            </Paper>
        </Container>
    )
}

export default ContactUs;