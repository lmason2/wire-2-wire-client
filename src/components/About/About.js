import React from "react";
import { Typography, Container, Paper } from "@material-ui/core";

import useStyles from "./styles";

const About = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="s">
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.writing}><b>Wire to Wire</b></Typography>
                <Typography className={classes.mediumWriting}>Created to return the sport of running to its <u>purest form</u> as it fits in today's society.</Typography>
                <hr></hr>
                <Typography className={classes.smallWriting}><u>Get connected with your friends</u>, but without the numbers</Typography>
                <Typography className={classes.smallWriting}><u>Enjoy your runs</u>, without worrying about what anyone will think</Typography>
                <Typography className={classes.smallWriting}><u>Stay up to date with news</u>, only coming from verified users and news outlets</Typography>
                <Typography className={classes.mediumWriting}>We are not Strava and we don't intend to be. Our platform is to help prevent you from making the same mistakes that even the best in the world have made. <b><u>Appreciate the run.</u></b></Typography>
            </Paper>
        </Container>
    )
}

export default About;