import React from "react";

const Birthday = ({ userData, setUserData }) => {
    
    const handleDateChange = (event) => {
        setUserData({ ...userData, result: { ...userData.result, private: {...userData.result.private, birthday: event.target.value}}});
    };

    return (
        <div>
            <label for="birthday">Birthday</label>

            <input type="date"
                min="1960-01-01" max="2022-01-01"
                onChange={handleDateChange} />
       </div>
    );
}

export default Birthday;