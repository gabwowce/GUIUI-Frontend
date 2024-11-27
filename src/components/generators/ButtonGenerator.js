import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';
import TextControls from '../../components/controls/TextControls';
import { renderControl } from '../controls/renderControl';

import { useDispatch, useSelector } from 'react-redux';
import { setText, setTextFont, setTextColor, setFontSize, setFontWeight, setUppercase, setLetterSpacing, setWordSpacing, setTextGradient } from '../../redux/controlers/textActions';


const ButtonGenerator = () => {
  const dispatch = useDispatch();
  const buttonState = useSelector(state => state.text);
  console.log("buttonState", buttonState);

  const handleChange = (e, valueOf) => {
    const value = e.target ? e.target.value : e;  // if event, get value; else it's directly a value
    switch (valueOf) {
      case 'text': dispatch(setText(value)); break;
      case 'textFont': dispatch(setTextFont(value)); break;
      case 'textColor': dispatch(setTextColor(value)); break;
      case 'fontSize': dispatch(setFontSize(value)); break;
      case 'fontWeight': dispatch(setFontWeight(value)); break;
      case 'uppercase': dispatch(setUppercase(value)); break;
      case 'letterSpacing': dispatch(setLetterSpacing(value)); break;
      case 'wordSpacing': dispatch(setWordSpacing(value)); break;
      case 'textGradient': dispatch(setTextGradient(value)); break;
      default: break;
    }
  };

  const generatedCSS = `
    .custom-button {
      background-color: ${buttonState.textColor};
      color: ${buttonState.textGradient || buttonState.textColor};
      font-family: ${buttonState.textFont};
      font-size: ${buttonState.fontSize}px;
      font-weight: ${buttonState.fontWeight};
      text-transform: ${buttonState.uppercase ? 'uppercase' : 'none'};
      letter-spacing: ${buttonState.letterSpacing}px;
      word-spacing: ${buttonState.wordSpacing}px;
      border-radius: 5px;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }
  `;

  const generatedHTML = `<button class="custom-button">${buttonState.text}</button>`;

  return (
    <StyledBox>
      <PreviewGeneratorTemplate
        initialHtml={generatedHTML}
        initialCss={generatedCSS}
        initialJs={''}
        initialPreviewWidth={'30%'}
      />
    <TextControls handleChange={handleChange} controls={buttonState}/>
    </StyledBox>
  );
};

export default ButtonGenerator;

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
});
