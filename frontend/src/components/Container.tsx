import MuiContainer from "@mui/material/Container"
import { styled } from "@mui/material/styles"
import { TOOLBAR_HEIGHT } from "./AppBar";

export const Container = styled(MuiContainer)(() => ({
    display: "flex",
    alignItems: "center",
    paddingTop: "3em",
    height: `calc(100vh - ${TOOLBAR_HEIGHT})`,
    flexDirection: "column",
    gap: "10px",
}));

export default Container
