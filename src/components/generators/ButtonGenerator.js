import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';
import TextControls from '../controls/TextControls';

const ButtonGenerator = () => {

  // Būsenos reikšmės
  const [buttonText, setButtonText] = useState('Click Me!');
  const [buttonColor, setButtonColor] = useState('#1976d2');
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState(4);
  const [padding, setPadding] = useState(10);
  const [fontSize, setFontSize] = useState(16);

  // Funkcija, kuri atnaujina būseną pagal įvestį
  const handleChange = (field, value) => {
    switch (field) {
      case 'buttonText':
        setButtonText(value);
        break;
      case 'buttonColor':
        setButtonColor(value);
        break;
      case 'textColor':
        setTextColor(value);
        break;
      case 'borderRadius':
        setBorderRadius(value);
        break;
      case 'padding':
        setPadding(value);
        break;
      case 'fontSize':
        setFontSize(value);
        break;
      default:
        break;
    }
  };

  // Generuojamas CSS
  const generatedCSS = `
    .custom-button {
      background-color: ${buttonColor};
      color: ${textColor};
      border: none;
      border-radius: ${borderRadius}px;
      padding: ${padding}px ${padding * 2}px;
      font-size: ${fontSize}px;
      cursor: pointer;
    }
  `;
  
  // Generuojamas HTML
  const generatedHTML = `<button class="custom-button">${buttonText}</button>`;

  return (
    <StyledBox>
      {/* Generuojamas mygtuko peržiūros šablonas */}
      <PreviewGeneratorTemplate
        initialHtml={generatedHTML}
        initialCss={generatedCSS}
        initialJs={''}
        initialPreviewWidth={'30%'}
      />
      
      {/* Valdikliai mygtuko parametram */}
      <TextControls 
        handleChange={handleChange} 
        buttonText={buttonText}
        buttonColor={buttonColor}
        textColor={textColor}
        borderRadius={borderRadius}
        padding={padding}
        fontSize={fontSize}
      />
    </StyledBox>
  );
};

export default ButtonGenerator;

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});
