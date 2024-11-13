import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Layout/navbar';


function App() {
  return (
    <Router >
      <Navbar />
      <Box className="content"/>
    </Router>
  );
}

export default App;
