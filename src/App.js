import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/Layout/navbar';
import { darkTheme } from './styles/theme';
import { CssBaseline } from '@mui/material';

import Elements from './pages/Elements';
import Create from './pages/Create';
import Popular from './pages/Popular';
import Contact from './pages/Contact';

function App() {
  return (
   <ThemeProvider theme={darkTheme}> {/* Naudojame tamsią temą */}
      <CssBaseline /> {/* Užtikriname, kad tema būtų taikoma visam puslapiui */}
      <Router>
        <Navbar />
        <Box className="content">
          <Routes>
            <Route path="/elements" element={<Elements />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Elements />} /> 
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

