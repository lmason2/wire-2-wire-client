import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from "react-redux";
import {Button} from "@material-ui/core";

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'state', headerName: 'State', width: 150 },
  { field: 'friendCount', headerName: 'Friend Count', width: 150 },
  { field: 'allFields', headerName: 'Complete Account', width: 200 }
];


export default function DataTable() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const users = useSelector((state) => state.users);
  const rows = [];
  const [friendsSelected, setFriendsSelected] = useState(true);

  const handleRowClicked = (rowObject) => {
    setFriendsSelected(false);
    console.log(rowObject.data.id);
  }

  const friends = user?.result?.public.friends;

  users.forEach(totalUser => {
    const newUser = {
      id: totalUser._id, 
      firstName: totalUser.public.firstName, 
      state: totalUser.public.state, 
      lastName: totalUser.public.lastName, 
      friendCount: totalUser.public.friends.length,
      allFields: totalUser.public.allFields
    };
    if (!rows.includes(newUser) && !friends.includes(totalUser._id) && user?.result?._id !== totalUser._id) {
      rows.push(newUser);
    }
  });

  return (
    <div style={{ height: 400, width: '100%', backgroundColor: "white"}}>
      <DataGrid rows={rows} columns={columns} pageSize={5} onRowSelected={(getRowId) => handleRowClicked(getRowId)}/>
      <Button variant="contained" color="primary" disabled={friendsSelected}>Add Friend</Button>
    </div>
  );
}