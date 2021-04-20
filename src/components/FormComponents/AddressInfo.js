import { FormGroup, FormLabel, TextField, FormControlLabel, Checkbox } from "@material-ui/core";

import React, { useState } from "react";


const Address = ({ userData, setUserData, googleUser }) => {
    const [checkBoxValue, setCheckBoxValue] = useState(true);
    const [shipping, setShipping] = useState(true);

    const handleClick = () => {
        setCheckBoxValue((prevCheckBoxValue) => !prevCheckBoxValue);
        if (checkBoxValue) {
            setShipping(false);
        }
        else {
            setShipping(true);
        }
    }

    return (
        <FormGroup>
            <FormLabel style={{marginBottom: "10px"}}>Primary Address</FormLabel>
            <div>
                { userData?.result?.private?.primaryAddress?.street ? 
                    <TextField
                        value={userData.result.private.primaryAddress.street}
                        label="Street"
                        helperText="101 N. First St."
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress, street: e.target.value }}}})}
                    />
                    :
                    <TextField
                        label="Street"
                        helperText="101 N. First St."
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress, street: e.target.value }}}})}
                    />
                }
                
                { userData?.result?.private?.primaryAddress?.city ? 
                    <TextField
                        value={userData.result.private.primaryAddress.city}
                        label="City"
                        helperText="Phoenix"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress, city: e.target.value }}}})}
                    />
                    :
                    <TextField
                        label="City"
                        helperText="Phoenix"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress, city: e.target.value }}}})}
                    />
                }
            </div>
            <hr></hr>
            <FormLabel>Shipping Address</FormLabel>
            <FormControlLabel control={<Checkbox name="address" checked={checkBoxValue} onClick={handleClick}/>} label="My shipping address is the same as my primary address"/>
            <div>
                { shipping ?
                    <>
                        <TextField
                            value={userData.result.private.primaryAddress.street}
                            helperText="101 N. First St."
                            variant="outlined"
                            disabled={true}
                        />
                        <TextField
                            value={userData.result.private.primaryAddress.city}
                            helperText="Phoenix"
                            variant="outlined"
                            disabled={true}
                        />
                    </>
                    :
                    <>
                        <TextField
                            label="Street"
                            value={userData.result.private.shippingAddress.street}
                            helperText="101 N. First St."
                            variant="outlined"
                            disabled={false}
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, shippingAddress: {...userData.result.private.shippingAddress, street: e.target.value }}}})}
                        />
                        <TextField
                            label="City"
                            value={userData.result.private.shippingAddress.city}
                            helperText="Phoenix"
                            variant="outlined"
                            disabled={false}
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, shippingAddress: {...userData.result.private.shippingAddress, city: e.target.value }}}})}
                        />
                    </>
                }
            </div>
            <hr></hr>
            <FormLabel style={{marginBottom: "10px"}}>Phone Number</FormLabel>
            <div>
                { userData?.result?.private?.phone  ? 
                    <TextField
                        value={userData.result.private.phone}
                        label="Phone Number"
                        helperText="###-###-#####"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, phone: e.target.value }}})}
                        type="tel"
                    />
                    :
                    <TextField
                        label="Phone Number"
                        helperText="###-###-#####"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, phone: e.target.value }}})}
                        type="tel"
                    />
                }
            </div>
        </FormGroup>
    );
}

export default Address;