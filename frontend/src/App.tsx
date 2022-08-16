import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>Them
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <AppBar />

          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}
          >
            <Box sx={{ maxWidth: '1200px' }}>
              <br />
              <Routes>
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="datasets" element={<Discover />} />
                <Route path="notebooks" element={<Datasets />} />
              </Routes>
            </Box>
          </Box>
        </Box >
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
