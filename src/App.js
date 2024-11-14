import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Layout/navbar';


function App() {
  return (
    <Router >
      <Navbar />
      <Box className="content">
        {/* Čia pridėkite savo Routes ir Route komponentus */}
        <Routes>
          {/* pvz., <Route path="/" element={<Home />} /> */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
