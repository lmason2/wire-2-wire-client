import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function AlertDialog({deleteAccount, setDeleteAccount}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    setDeleteAccount(false);
  };

  const deleteAccountConfirmed = () => {
    dispatch({ type: "LOGOUT" });
    
    history.push("/");
  }

  return (
    <div>
      <Dialog
        open={deleteAccount}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DELETING ACCOUNT (CAUTION)"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus variant="outlined">
            No
          </Button>
          <Button onClick={deleteAccountConfirmed} color="secondary" variant="outlined">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}