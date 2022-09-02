import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar, { TOOLBAR_HEIGHT } from "./components/AppBar";
import Datasets from "./pages/Datasets";
import Holding from "./pages/Holding";
import Home from "./pages/Home";
import Notebooks from "./pages/Notebooks";
import Search from "./pages/Search";
import { drawerWidth, mobileDrawerWidth } from "./components/MenuBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#184848",
    },
  },
});

const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  background: theme.palette.background.default,
  [theme.breakpoints.up("sm")]: {
    padding: "0em 1em",
    maxWidth: `calc(100% - ${drawerWidth}px)`,
  },
  // mobile view
  [theme.breakpoints.down("sm")]: {
    maxWidth: `calc(100% - ${mobileDrawerWidth}px)`,
  },
  marginTop: TOOLBAR_HEIGHT,
}));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <AppBar />

          <Main component="main">
            <Container>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route index element={<Home />} />
                <Route path={"search"} element={<Search />} />
                <Route path={"holdings"}>
                  <Route path=":id" element={<Holding />} />
                </Route>
                <Route path={"datasets"} element={<Datasets />} />
                <Route path={"notebooks"} element={<Notebooks />} />
              </Routes>
            </Container>
          </Main>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
