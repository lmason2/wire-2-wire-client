import React from 'react';
import {Button} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useSelector} from "react-redux";

const RunData = ({setDay}) => {
  const userTraining = useSelector((state) => state.training);

  const handleMore = (day) => {
    setDay(day)
  }

  if (userTraining.length === 0) {
    return (<div></div>);
  }
  else {
    const training = userTraining[0].training;
    console.log("ut", userTraining);
    console.log("training", training);
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">AM Mileage</TableCell>
              <TableCell align="right">PM Mileage</TableCell>
              <TableCell align="right">Strides</TableCell>
              <TableCell align="right">More</TableCell>
              <TableCell align="right">Share</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {training.map((day) => (
              <TableRow key={day.date}>
                <TableCell component="th" scope="row">
                  {day.date}
                </TableCell>
                <TableCell align="right">{day.am}</TableCell>
                <TableCell align="right">{day.pm}</TableCell>
                <TableCell align="right">{day.strides}</TableCell>
                <TableCell align="right"><Button onClick={() => handleMore(day)}><MoreHorizIcon></MoreHorizIcon></Button></TableCell>
                <TableCell align="right">
                      <Button>
                          <a href = {`mailto:?subject=Training-${day.date}&body=Hey!%0A%0AToday%20I%20ran%20${parseInt(day.am)+parseInt(day.pm)}%20miles!%0AYou%20should%20check%20out:%20www.wire-2-wire.netlify.app.com`}>
                              <SendIcon></SendIcon>
                          </a>
                      </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default RunData;