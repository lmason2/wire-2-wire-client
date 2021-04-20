import React from "react";
import { Typography, Paper } from "@material-ui/core";

const FriendProfile = () => {
    const friend = JSON.parse(localStorage.getItem('friend'));
    const data = friend.public;
    console.log(data);

    return (
        <Paper>
            <Typography>{data.firstName}&nbsp;{data.lastName}</Typography>
            <Typography>{data.currentForm}</Typography>
            <Typography>{data.email}</Typography>
            <Typography>{data.mileage}</Typography>
        </Paper>
    );
}

export default FriendProfile;