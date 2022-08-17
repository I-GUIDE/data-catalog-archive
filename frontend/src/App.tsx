import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar, { TOOLBAR_HEIGHT } from './components/AppBar';
import Discover from "./pages/Discover";
import Holding from "./pages/Holding";
import Home from "./pages/Home";
import Datasets from "./pages/Notebooks";
import Search from "./pages/Search";



const theme = createTheme({
  palette: {
    primary: {
      main: "#184848"
    }
  }
});

const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  background: theme.palette.background.default,
  padding: "0em 1em",
  marginTop: TOOLBAR_HEIGHT
}));


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <AppBar />

          <Main component="main">
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="holdings">
                  <Route path=":id" element={<Holding />} />
                </Route>
                <Route path="datasets" element={<Discover />} />
                <Route path="notebooks" element={<Datasets />} />
              </Routes>
            </Container>
          </Main>
        </Box>
      </ThemeProvider>
    </BrowserRouter >
  );
}

export default App;
