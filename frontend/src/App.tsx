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
import getUrl from "./utilities/getUrl";

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
  padding: "0em 1em",
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
                <Route path={getUrl("/")} element={<Home />} />
                <Route index element={<Home />} />
                <Route path={getUrl("search")} element={<Search />} />
                <Route path={getUrl("holdings")}>
                  <Route path=":id" element={<Holding />} />
                </Route>
                <Route path={getUrl("datasets")} element={<Datasets />} />
                <Route path={getUrl("notebooks")} element={<Notebooks />} />
              </Routes>
            </Container>
          </Main>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
