import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/Layout/navbar';
import { darkTheme } from './styles/theme';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

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
        <StyledContainer maxWidth={false}>
          <Routes>
            <Route path="/elements" element={<Elements />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Elements />} /> 
          </Routes>
        </StyledContainer>
      </Router>
    </ThemeProvider>
  );
}

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width:"100%",
  maxWidth: '2560px'
}));


export default App;

