import React from "react";
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from "@material-ui/core";


const CheckBoxInfo = ({ userData, setUserData, googleUser }) => {
    return (
        <FormGroup row>
        <FormLabel>What types of runs do you like to do?</FormLabel>
            <FormControlLabel 
                control={<Checkbox 
                            name="ez" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns, easy: e.target.checked}}}})}
                            value={userData?.result?.public?.typesOfRuns?.easy}
                        />} 
                label="Easy" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="wo" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns, workouts: e.target.checked}}}})}
                            value={userData?.result?.public?.typesOfRuns?.workouts}
                        />}
                label="Workouts" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="lr" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns, longRun: e.target.checked}}}})}
                            value={userData?.result?.public?.typesOfRuns?.longRun}
                        />} 
                label="Long Runs" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="hill" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns, hills: e.target.checked}}}})}
                            value={userData?.result?.public?.typesOfRuns?.hills}
                        />} 
                label="Hills" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="flat" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns, flat: e.target.checked}}}})}
                            value={userData?.result?.public?.typesOfRuns?.flat}
                        />} 
                label="Flat" 
            />
            <FormControlLabel 
                control={<Checkbox 
                            name="trails" 
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, typesOfRuns: {...userData.result.public.typesOfRuns, trails: e.target.checked}}}})}
                            value={userData?.result?.public?.typesOfRuns?.trails}
                        />} 
                label="Trails" 
            />
        </FormGroup>
      );
}

export default CheckBoxInfo;