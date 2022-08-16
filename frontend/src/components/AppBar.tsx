import React from 'react';
import MenuBar from "./MenuBar"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

const toolbar_height = "64px"

export const AppBar = () => {
    return (
        <>
            <MenuBar height={toolbar_height} />
            <MuiAppBar component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ height: toolbar_height }}>
                    <img src="/iguide_logo_15_percent.png" alt="I-Guide Logo" style={{ height: "inherit", padding: "8px" }} />
                </Toolbar>
            </MuiAppBar>
        </>
    );
}

export default AppBar
