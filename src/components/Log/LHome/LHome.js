import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";

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

function createData(date, runs, workouts, strides, mileage) {
  return { date, runs, workouts, strides, mileage };
}

const rows = [
  createData('03/14-03/20', 3, 1, 4, 29),
  createData('03/14-03/20', 3, 1, 4, 29),
  createData('03/14-03/20', 3, 1, 4, 29),
  createData('03/14-03/20', 3, 1, 4, 29),
  createData('03/14-03/20', 3, 1, 4, 29),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Date Range</StyledTableCell>
                <StyledTableCell align="right">Runs</StyledTableCell>
                <StyledTableCell align="right">Workouts</StyledTableCell>
                <StyledTableCell align="right">Strides</StyledTableCell>
                <StyledTableCell align="right">Mileage</StyledTableCell>
                <StyledTableCell align="right">More</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.date}
                </StyledTableCell>
                <StyledTableCell align="right">{row.runs}</StyledTableCell>
                <StyledTableCell align="right">{row.workouts}</StyledTableCell>
                <StyledTableCell align="right">{row.strides}</StyledTableCell>
                <StyledTableCell align="right">{row.mileage}</StyledTableCell>
                <StyledTableCell align="right"><Button color="primary">Expand</Button></StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

