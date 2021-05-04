import React from "react";
import {Paper, Button, Typography} from "@material-ui/core";

const SingleRun = ({day, setDay}) => {
    console.log(day);

    const handleBack = () => {
        setDay(null);
    }
    return (
        <div>
            <Button color="primary" variant="contained" onClick={() => handleBack()}>Back</Button>
            <Paper style={{marginTop: "10px", padding: "10px"}}>
                <Typography><b>Date</b></Typography>
                <Typography>{day.date}</Typography>
                <hr></hr>
                <Typography><b>AM Mileage</b></Typography>
                <Typography>{day.am}</Typography>
                <hr></hr>
                <Typography><b>PM Mileage</b></Typography>
                <Typography>{day.pm}</Typography>
                <hr></hr>
                <Typography><b>Strides</b></Typography>
                <Typography>{day.strides}</Typography>
                <hr></hr>
                <Typography><b>Workout</b></Typography>
                <Typography>{day.workout}</Typography>
                <hr></hr>
                <Typography><b>Reflection</b></Typography>
                <Typography>{day.reflection}</Typography>
            </Paper>
        </div>
    )
}

export default SingleRun;