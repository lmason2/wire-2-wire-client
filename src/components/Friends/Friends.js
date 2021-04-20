import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 40,
  },
});


export default function Friends({friends}) {
  const classes = useStyles();
  const history = useHistory();

  function handleMore(id) {
    localStorage.setItem('friend', JSON.stringify(friends[id]));
    history.push("/friend-profile");
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Mileage</StyledTableCell>
            <StyledTableCell align="right">Form</StyledTableCell>
            <StyledTableCell align="right">Expand</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {friends.map((friend) => (
            <StyledTableRow key={friend.public.lastName}>
              <StyledTableCell component="th" scope="row">
                {friend.public.firstName}&nbsp;{friend.public.lastName.charAt(0)}.
              </StyledTableCell>
              <StyledTableCell align="right">{friend.public.mileage}</StyledTableCell>
              <StyledTableCell align="right">{friend.public.form}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={() => handleMore(friends.indexOf(friend))}>More</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}