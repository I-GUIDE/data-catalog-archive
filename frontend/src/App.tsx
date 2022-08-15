import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import MenuBar from "./components/MenuBar"
import Datasets from "./pages/Datasets"
import Discover from "./pages/Discover"

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <MenuBar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}
      >
        <Box sx={{ maxWidth: '1200px' }}>
          <Toolbar />
          <Discover />
          <Datasets />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
