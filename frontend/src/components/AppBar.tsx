import React from "react";
import MenuBar from "./MenuBar";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { getUrl } from "../utilities/getUrl";

export const TOOLBAR_HEIGHT = "64px";

export const AppBar = () => {
  return (
    <>
      <MuiAppBar
        component="nav"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ height: TOOLBAR_HEIGHT }}>
          <img
            src={getUrl("iguide_logo_15_percent.png")}
            alt="I-Guide Logo"
            style={{ height: "inherit", padding: "8px" }}
          />
        </Toolbar>
      </MuiAppBar>
      <MenuBar height={TOOLBAR_HEIGHT} />
    </>
  );
};

export default AppBar;
