import { FormGroup, FormLabel, TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import MaskedInput from 'react-text-mask';

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

    const cleanPhoneString = (unClean) => {
        const str1 = unClean.substr(1, 3);
        const str2 = unClean.substr(6, 3);
        const str3 = unClean.substr(10, 4);
        return str1.concat(str2, str3);
    }

    return (
        <FormGroup>
            <FormLabel style={{marginBottom: "10px"}}>Primary Address</FormLabel>
            <div>
                { userData?.result?.private?.primaryAddress[0]?.street ? 
                    <TextField
                        value={userData.result.private.primaryAddress[0].street}
                        label="Street"
                        helperText="101 N. First St."
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress[0], street: e.target.value }}}})}
                    />
                    :
                    <TextField
                        label="Street"
                        helperText="101 N. First St."
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress[0], street: e.target.value }}}})}
                    />
                }
                
                { userData?.result?.private?.primaryAddress[0]?.city ? 
                    <TextField
                        value={userData.result.private.primaryAddress[0].city}
                        label="City"
                        helperText="Phoenix"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress[0], city: e.target.value }}}})}
                    />
                    :
                    <TextField
                        label="City"
                        helperText="Phoenix"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, primaryAddress: {...userData.result.private.primaryAddress[0], city: e.target.value }}}})}
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
                            value={userData.result.private.primaryAddress[0]?.street}
                            helperText="101 N. First St."
                            variant="outlined"
                            disabled={true}
                        />
                        <TextField
                            value={userData.result.private.primaryAddress[0]?.city}
                            helperText="Phoenix"
                            variant="outlined"
                            disabled={true}
                        />
                    </>
                    :
                    <>
                        {userData.result.private.shippingAddress[0] ?
                            (
                                <>
                                <TextField
                                    label="Street"
                                    value={userData.result.private.shippingAddress[0].street}
                                    helperText="101 N. First St."
                                    variant="outlined"
                                    disabled={false}
                                    onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, shippingAddress: {...userData.result.private.shippingAddress, street: e.target.value }}}})}
                                />
                                <TextField
                                    label="City"
                                    value={userData.result.private.shippingAddress[0].city}
                                    helperText="Phoenix"
                                    variant="outlined"
                                    disabled={false}
                                    onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, shippingAddress: {...userData.result.private.shippingAddress, city: e.target.value }}}})}
                                />
                                </>
                            ):
                            (
                                <>
                                <TextField
                                    label="Street"
                                    value={""}
                                    helperText="101 N. First St."
                                    variant="outlined"
                                    disabled={false}
                                    onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, shippingAddress: {...userData.result.private.shippingAddress, street: e.target.value }}}})}
                                />
                                <TextField
                                    label="City"
                                    value={""}
                                    helperText="Phoenix"
                                    variant="outlined"
                                    disabled={false}
                                    onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, shippingAddress: {...userData.result.private.shippingAddress, city: e.target.value }}}})}
                                />
                                </>
                            )
                        }
                    </>
                }
            </div>
            <hr></hr>
            <FormLabel style={{marginBottom: "10px"}}>Phone Number</FormLabel>
            <div>
                { userData?.result?.private?.phone  ? 
                    (
                        <MaskedInput
                            // value={userData.result.private.phone}
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            placeholderChar={'\u2000'}
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, phone: cleanPhoneString(e.target.value)}}})}
                            showMask
                        /> 
                    )
                    : 
                    (
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            placeholderChar={'\u2000'}
                            onChange={(e) => setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, phone: cleanPhoneString(e.target.value)}}})}
                            showMask
                        />
                    )
                }
            </div>
        </FormGroup>
    );
}

export default Address;