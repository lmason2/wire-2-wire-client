import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import DeleteAlert from "../Profile/DeleteAlert";
import { getUsers } from "../../actions/users";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});
  
function createData(id, email, firstName, lastName) {
return { id, email, firstName, lastName };
}

const AdminDash = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const tableUsers = [];
    const users = useSelector((state) => state.users);
    const classes = useStyles();
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    console.log(users);

    users.forEach(user => {
        tableUsers.push(createData(user._id, user.public.email, user.public.firstName, user.public.lastName))
    });

    console.log(tableUsers);

    const handleDelete = (index) => {
        const user = tableUsers[index];
        setDeleteAccount(true);
        setDeleteId(user.id);
    }

    const handleEdit = (index) => {
        localStorage.setItem('editProfile', JSON.stringify(users[index]));
        history.push("/edit-profile");
    }

    return (
        <div>
            <DeleteAlert deleteAccount={deleteAccount} setDeleteAccount={setDeleteAccount} adminId={deleteId}/>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {tableUsers.map((user) => (
                    <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                        {user.id}
                    </TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.firstName}</TableCell>
                    <TableCell align="right">{user.lastName}</TableCell>
                    <TableCell align="center"><Button onClick={() => handleEdit(tableUsers.indexOf(user))}><EditIcon></EditIcon></Button></TableCell>
                    <TableCell align="center"><Button onClick={() => handleDelete(tableUsers.indexOf(user))}><DeleteIcon></DeleteIcon></Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default AdminDash;
