import React from "react";
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from "@material-ui/core";


const CheckBoxInfo = ({ userData, setUserData, googleUser }) => {
    return (
        <FormGroup row>
        <FormLabel>What types of runs do you like to do?</FormLabel>
            <FormControlLabel 
                control={<Checkbox 
                            name="ez" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns[0], easy: e.target.checked}}}})}
                            checked={userData?.result?.public?.typesOfRuns[0]?.easy}
                        />} 
                label="Easy" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="wo" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns[0], workouts: e.target.checked}}}})}
                            checked={userData?.result?.public?.typesOfRuns[0]?.workouts}
                        />}
                label="Workouts" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="lr" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns[0], longRun: e.target.checked}}}})}
                            checked={userData?.result?.public?.typesOfRuns[0]?.longRun}
                        />} 
                label="Long Runs" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="hill" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns[0], hills: e.target.checked}}}})}
                            checked={userData?.result?.public?.typesOfRuns[0]?.hills}
                        />} 
                label="Hills" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="flat" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns[0], flat: e.target.checked}}}})}
                            checked={userData?.result?.public?.typesOfRuns[0]?.flat}
                        />} 
                label="Flat" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="trails" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns[0], trails: e.target.checked}}}})}
                            checked={userData?.result?.public?.typesOfRuns[0]?.trails}
                        />} 
                label="Trails" 
            />
        </FormGroup>
      );
}

export default CheckBoxInfo;