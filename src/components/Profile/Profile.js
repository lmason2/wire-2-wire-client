import React, {useState} from 'react';
import { Paper, Button, Typography } from "@material-ui/core";
import RadioComp from "../FormComponents/RadioComp";
import BasicProfile from "../FormComponents/BasicInfo";
import CheckBoxInfo from "../FormComponents/CheckboxInfo";
import Address from "../FormComponents/AddressInfo";
import MultipleSelect from "../FormComponents/MultipleSelect";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProfile } from "../../actions/auth";
import Birthday from "../FormComponents/Birthday";
import DeleteAlert from "./DeleteAlert";


const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  let googleUser = false;
  if (user?.result?.googleId) {
    googleUser = true;
  }
  const [userData, setUserData] = useState(user);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(userData, history))
  }

  const handleDelete = () => {
    setDeleteAccount(true);
  }

  return (
    <div>
        <DeleteAlert deleteAccount={deleteAccount} setDeleteAccount={setDeleteAccount}/>
        <form onSubmit={handleSubmit} method="post">
            <Typography>Public</Typography>
            <Paper style={{padding: "20px"}} elevation={3}>
                <BasicProfile userData={userData} setUserData={setUserData} googleUser={googleUser}/>
                <hr></hr>
                <CheckBoxInfo userData={userData} setUserData={setUserData} googleUser={googleUser}/>
                <hr></hr>
                <MultipleSelect userData={userData} setUserData={setUserData} googleUser={googleUser}/>
            </Paper>
            <Typography style={{marginTop: "20px"}}>Private</Typography>
            <Paper style={{padding: "20px", marginBottom: "20px"}} elevation={3}>
                <RadioComp userData={userData} setUserData={setUserData} googleUser={googleUser}/>
                <hr></hr>
                <Address userData={userData} setUserData={setUserData} googleUser={googleUser}/>
                <hr></hr>
                <Birthday userData={userData} setUserData={setUserData} googleUser={googleUser}/>
            </Paper>
            <Button variant="contained" type="submit" color="primary" style={{marginRight: "20px"}}>Update</Button>
            <Button variant="contained" onClick={handleDelete} color="secondary">Delete Account</Button>
        </form>
    </div>
  );
}

export default Profile;