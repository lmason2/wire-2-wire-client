import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

export const RadioComp = ({userData, setUserData, googleUser}) => {

    const handleChange = (event) => {
        setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, gender: event.target.value}}});
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={userData?.result?.private?.gender} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioComp;