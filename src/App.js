import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/Layout/navbar';
import { darkTheme } from './styles/theme';
import { CssBaseline } from '@mui/material';


function App() {
  return (
   <ThemeProvider theme={darkTheme}> {/* Naudojame tamsią temą */}
      <CssBaseline /> {/* Užtikriname, kad tema būtų taikoma visam puslapiui */}
      <Router>
        <Navbar />
        <Box className="content">
          <Routes>
            {/* Čia galite pridėti savo routes */}
            {/* pvz., <Route path="/" element={<Home />} /> */}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
