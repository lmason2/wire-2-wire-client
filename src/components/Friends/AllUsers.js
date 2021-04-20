import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from "react-redux";

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'state', headerName: 'State', width: 150 },
  { field: 'friendCount', headerName: 'Friend Count', width: 150 }
];


export default function DataTable() {
  const users = useSelector((state) => state.users);
  const rows = [];
  users.forEach(user => {
    const newUser = {id: user._id, firstName: user.public.firstName, state: user.public.state, lastName: user.public.lastName, friendCount: user.public.friends.length};
    if (!rows.includes(newUser)) {
      rows.push(newUser);
    }
  });
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}