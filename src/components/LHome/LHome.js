import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormControlLabel, Checkbox } from "@material-ui/core";
import {useDispatch} from "react-redux";

import Input from "./Input";
import RunData from "./RunData";
import SingleRun from "./SingleRun";
import {saveTraining, getTraining} from "../../actions/training";

const newRun = {am: 0, pm: 0, strides: "", workout: "", reflection: "", date: new Date().toDateString()};
const LHome = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workout, setWorkout] = useState(false);
  const [strides, setStrides] = useState(false);
  const [reflection, setReflection] = useState(false);
  const [runData, setRunData] = useState(newRun);
  const [day, setDay] = useState(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getTraining(user?.result?._id));
  }, [dispatch]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setRunData({ ...runData, date: date.toDateString()});
  };

  const addRun = () => {
    setOpen(true);
  }

  const handleSave = () => {
    setOpen(false);
    dispatch(saveTraining(user?.result?._id, runData));
    setRunData(newRun);
  }

  const handleClose = () => {
    setOpen(false);
    setRunData(newRun);
  }

  const handleWorkout = (e) => {
    if (e.target.checked) {
      setWorkout(true);
    }
    else {
      setRunData({ ...runData, workout: ""})
      setWorkout(false);
    }
  }

  const handleStrides = (e) => {
    if (e.target.checked) {
      setStrides(true);
    }
    else {
      setRunData({ ...runData, strides: ""})
      setStrides(false);
    }
  }

  const handleChange = (e) => {
    setRunData({ ...runData, [e.target.name]: e.target.value });
  };

  const handleReflection = (e) => {
    if (e.target.checked) {
      setReflection(true);
    }
    else {
      setRunData({ ...runData, reflection: ""})
      setReflection(false);
    }
  }

  return (
    <div>
      { !day && (
        <Fab style={{marginBottom: "10px"}} onClick={addRun} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">New Training Day</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSave}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date of training"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              </Grid>
            </MuiPickersUtilsProvider>
            <Input style={{marginBottom: "10px"}} name="am" label="AM Mileage" type="number" handleChange={handleChange} autoFocus required></Input>
            <Input name="pm" label="PM Mileage" handleChange={handleChange} type="number"></Input>
            <FormControlLabel 
                control={<Checkbox 
                            name="strides"
                            onChange={handleStrides}
                            checked={strides}
                        />} 
                label="Strides" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="workout" 
                            onChange={handleWorkout}
                            checked={workout}
                          />} 
                label="Workout" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="reflection" 
                            onChange={handleReflection}
                            checked={reflection}
                          />} 
                label="Reflection" 
            />
            {strides && (
              <Input name="strides" label="How Many Strides?" type="number" required
                handleChange={handleChange}
              ></Input>
            )}
            {workout && (
              <Input name="workout" label="Workout Description" handleChange={handleChange} required></Input>
            )}
            {reflection && (
              <Input name="reflection" label="How were the runs?" handleChange={handleChange} required></Input>
            )}
            <Button color="primary" type="submit">
              Save
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      { day? (
        <SingleRun day={day} setDay={setDay}/>
      ): (
        <RunData setDay={setDay}/>
      )}
      
    </div>
  )
}

export default LHome;

