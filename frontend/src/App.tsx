import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from './components/AppBar';
import Datasets from "./pages/Datasets";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const theme = createTheme({
  palette: {
    primary: {
      main: "#184848"
    }
  }
});

const Main = styled(Box)(({ theme }) => ({
  display: "flew",
  flexGrow: 1,
  background: theme.palette.background.default,
  justifyContent: " center",
  flexDirection: "row",
  padding: 3,
}));


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>Them
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <AppBar />

          <Main component="main">
            <Box sx={{ maxWidth: '1200px' }}>
              <br />
              <Routes>
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="datasets" element={<Discover />} />
                <Route path="notebooks" element={<Datasets />} />
              </Routes>
            </Box>
          </Main>
        </Box>
      </ThemeProvider>
    </BrowserRouter >
  );
}

export default App;
