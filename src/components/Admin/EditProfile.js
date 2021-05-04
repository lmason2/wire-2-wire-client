import React, {useState} from "react";
import { Paper, Button, Typography } from "@material-ui/core";
import RadioComp from "../FormComponents/RadioComp";
import BasicProfile from "../FormComponents/BasicInfo";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProfile } from "../../actions/auth";

const EditProfile = () => {
    const userJSON = localStorage.getItem('editProfile');
    const userPreResult = JSON.parse(userJSON);
    const user = {result: userPreResult};
    const dispatch = useDispatch();
    const history = useHistory();
    const [userData, setUserData] = useState(user);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(userData, history))
        history.goBack();
    }

    return (
        <div>
        <form onSubmit={handleSubmit} method="post">
            <Typography>Public</Typography>
            <Paper style={{padding: "20px"}} elevation={3}>
                <BasicProfile userData={userData} setUserData={setUserData} noState={true}/>
                <hr></hr>
            </Paper>
            <Typography style={{marginTop: "20px"}}>Private</Typography>
            <Paper style={{padding: "20px", marginBottom: "20px"}} elevation={3}>
                <RadioComp userData={userData} setUserData={setUserData}/>
            </Paper>
            <Button variant="contained" type="submit" color="primary" style={{marginRight: "20px"}}>Update</Button>
        </form>
    </div>
    );
}

export default EditProfile;