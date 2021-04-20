import React from "react";
import { TextField, FormLabel, FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

const BasicProfile = ({ userData, setUserData, googleUser }) => {
    return (
        <div>
            <div>
                <FormLabel component="legend">Name</FormLabel>

                {( userData?.result?.public?.firstName  ? (
                <TextField
                    value={userData.result.public.firstName}
                    helperText="John"
                    variant="outlined"
                    onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, firstName: e.target.value }}})}
                    disabled={googleUser}
                /> ) : (
                <TextField
                    label="First Name"
                    helperText="John"
                    variant="outlined"
                    onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, firstName: e.target.value }}})}
                /> )
                )}

                {( userData?.result?.public.lastName ? ( 
                    <TextField
                        value={userData.result.public.lastName}
                        helperText="Smith"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, lastName: e.target.value }}})}
                    />
                ) : (
                    <TextField
                        label="Last Name"
                        helperText="Smith"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, lastName: e.target.value }}})}
                    /> )
                )}
                
            </div>
            <hr></hr>
            <div>
                <FormLabel component="legend">Email</FormLabel>
                {( userData?.result?.public?.email ? (
                    <TextField
                        value={userData.result.public.email}
                        helperText="test@test.com"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, email: e.target.value }}})}
                        type="email"
                    />
                   ) : (
                    <TextField
                        label="Email"
                        helperText="test@test.com"
                        variant="outlined"
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, email: e.target.value }}})}
                        type="email"
                    />
                    )
                )}
            </div>
            <hr></hr>
            <div>
                <FormLabel component="legend">State</FormLabel>
                <FormControl variant="outlined" >
                    <InputLabel>State</InputLabel>
                    <Select 
                        label="State" 
                        onChange={(e) => setUserData({ ...userData, result: { ...userData.result, public: {...userData.result.public, state: e.target.value }}})}
                    >
                        <MenuItem value={"Alabama"}>Alabama</MenuItem>
                        <MenuItem value={"Alaska"}>Alaska</MenuItem>
                        <MenuItem value={"Arkansas"}>Arkansas</MenuItem>
                        <MenuItem value={"Arizona"}>Arizona</MenuItem>
                        <MenuItem value={"California"}>California</MenuItem>
                        <MenuItem value={"Colorado"}>Colorado</MenuItem>
                        <MenuItem value={"Connecticut"}>Connecticut</MenuItem>
                        <MenuItem value={"Delaware"}>Delaware</MenuItem>
                        <MenuItem value={"Florida"}>Florida</MenuItem>
                        <MenuItem value={"Georgia"}>Georgia</MenuItem>
                        <MenuItem value={"Hawaii"}>Hawaii</MenuItem>
                        <MenuItem value={"Idaho"}>Idaho</MenuItem>
                        <MenuItem value={"Illinois"}>Illinois</MenuItem>
                        <MenuItem value={"Indiana"}>Indiana</MenuItem>
                        <MenuItem value={"Iowa"}>Iowa</MenuItem>
                        <MenuItem value={"Kansas"}>Kansas</MenuItem>
                        <MenuItem value={"Kentucky"}>Kentucky</MenuItem>
                        <MenuItem value={"Louisiana"}>Louisiana</MenuItem>
                        <MenuItem value={"Maine"}>Maine</MenuItem>
                        <MenuItem value={"Maryland"}>Maryland</MenuItem>
                        <MenuItem value={"Massachusetts"}>Massachusetts</MenuItem>
                        <MenuItem value={"Michigan"}>Michigan</MenuItem>
                        <MenuItem value={"Minnesota"}>Minnesota</MenuItem>
                        <MenuItem value={"Mississippi"}>Mississippi</MenuItem>
                        <MenuItem value={"Missouri"}>Missouri</MenuItem>
                        <MenuItem value={"Montana"}>Montana</MenuItem>
                        <MenuItem value={"Nebraska"}>Nebraska</MenuItem>
                        <MenuItem value={"Nevada"}>Nevada</MenuItem>
                        <MenuItem value={"New Hampshire"}>New Hampshire</MenuItem>
                        <MenuItem value={"New Jersey"}>New Jersey</MenuItem>
                        <MenuItem value={"New Mexico"}>New Mexico</MenuItem>
                        <MenuItem value={"New York"}>New York</MenuItem>
                        <MenuItem value={"North Carolina"}>North Carolina</MenuItem>
                        <MenuItem value={"North Dakota"}>North Dakota</MenuItem>
                        <MenuItem value={"Ohio"}>Ohio</MenuItem>
                        <MenuItem value={"Oklahoma"}>Oklahoma</MenuItem>
                        <MenuItem value={"Oregon"}>Oregon</MenuItem>
                        <MenuItem value={"Pennsylvania"}>Pennsylvania</MenuItem>
                        <MenuItem value={"Rhode Island"}>Rhode Island</MenuItem>
                        <MenuItem value={"South Carolina"}>South Carolina</MenuItem>
                        <MenuItem value={"South Dakota"}>South Dakota</MenuItem>
                        <MenuItem value={"Tennessee"}>Tennessee</MenuItem>
                        <MenuItem value={"Texas"}>Texas</MenuItem>
                        <MenuItem value={"Utah"}>Utah</MenuItem>
                        <MenuItem value={"Vermont"}>Vermont</MenuItem>
                        <MenuItem value={"Virginia"}>Virginia</MenuItem>
                        <MenuItem value={"Washington"}>Washington</MenuItem>
                        <MenuItem value={"West Virginia"}>West Virginia</MenuItem>
                        <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
                        <MenuItem value={"Wyoming"}>Wyoming</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default BasicProfile;