import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import { darkTheme } from './styles/theme';

import { Navbar } from './components/Layout/navbar';

import Elements from './pages/Elements';
import Create from './pages/Create';
import Popular from './pages/Popular';
import Contact from './pages/Contact';
import Generators from './pages/Generators';
import Error from './pages/Error';

import ButtonGenerator from './components/generators/ButtonGenerator';
import BackgroundGenerator from './components/generators/BackgroundGenerator';
import CardGenerator from './components/generators/CardGenerator';
import LoaderGenerator from './components/generators/LoaderGenerator';
import FormsGenerator from './components/generators/FormsGenerator';
import InputsGenerator from './components/generators/InputsGenerator';
import FigureGenerator from './components/generators/figureGenerator';

import AllElements from './components/elements/AllElements';
import ButtonElements from './components/elements/ButtonElements';
import BackgroundElements from './components/elements/BackgroundElements';
import ModelsElements from './components/elements/ModelsElements';
import CardsElements from './components/elements/CardsElements';
import LoadersElements from './components/elements/LoadersElements';
import FormsElements from './components/elements/FormsElements';
import InputsElements from './components/elements/InputsElements';


function App() {
  return (
   <ThemeProvider theme={darkTheme}> 
      <CssBaseline /> 
      <Router>
        <Navbar />
        <StyledContainer maxWidth={false}>
          <Routes>
            <Route path="/elements" element={<Elements />}>
              <Route index element={<AllElements />} />
              <Route path="all" element={<AllElements />} />
              <Route path="buttons" element={<ButtonElements />} />
              <Route path="backgrounds" element={<BackgroundElements />} />
              <Route path="models" element={<ModelsElements />} />
              <Route path="card" element={<ModelsElements />} />
              <Route path="loader" element={<CardsElements />} />
              <Route path="forms" element={<LoadersElements />} />
              <Route path="inputs" element={<FormsElements />} />
            </Route>
            <Route path="/generators" element={<Generators />}>
              <Route index element={<ButtonGenerator />} />
              <Route path="button" element={<ButtonGenerator />} />
              <Route path="backgrounds" element={<BackgroundGenerator />} />
              <Route path="card" element={<CardGenerator />} />
              <Route path="loader" element={<LoaderGenerator />} />
              <Route path="forms" element={<FormsGenerator />} />
              <Route path="inputs" element={<InputsGenerator />} />
              <Route path="figure" element={<FigureGenerator />} />
            </Route>
            <Route path="/popular" element={<Popular />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Elements />} /> 
            <Route path="*" element={<Error/>} />
          </Routes>
        </StyledContainer>
      </Router>
    </ThemeProvider>
  );
}

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '2260px'
}));


export default App;

