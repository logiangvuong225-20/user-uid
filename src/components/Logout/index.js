import React from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

function Logout() {
    const history = useHistory();
    function handleClick(e) {
        localStorage.removeItem("token");
        history.replace("/login");
    }

    return (
        <div>
            <Button variant="contained" color="warning" onClick={handleClick}>Logout</Button>{" "}
        </div>
    );
}

export default Logout;