import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box, Container, Button, Switch } from '@mui/material';

import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';

const ButtonGenerator = () => {

  const [buttonText, setButtonText] = useState('Click Me!');
  const [buttonColor, setButtonColor] = useState('#1976d2');
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState(4);
  const [padding, setPadding] = useState(10);
  const [fontSize, setFontSize] = useState(16);

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
  const generatedHTML = `<button class="custom-button">${buttonText}</button>`;
  const generatedJS = ``;

  return (
    <StyledBox>
      <PreviewGeneratorTemplate 
        initialHtml={generatedHTML} 
        initialCss={generatedCSS} 
        initialJs={generatedJS} 
        initialPreviewWidth={'30%'}
      >
      <button>
        Change Button Text
      </button>
    </PreviewGeneratorTemplate>
   

    </StyledBox>
    
  );
};

export default ButtonGenerator;

const StyledBox = styled(Box)({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
  
});