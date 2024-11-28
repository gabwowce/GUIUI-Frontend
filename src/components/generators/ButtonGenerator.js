import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';
import TextControls from '../../components/controls/TextControls';
import { renderControl } from '../controls/renderControl';
import {textControls} from "../../config/controls";

import { useDispatch, useSelector } from 'react-redux';
import { setText, setTextFont, setTextColor, setFontSize, setFontWeight, setUppercase, setLetterSpacing, setWordSpacing, setTextGradient } from '../../redux/controlers/textActions';


const camelToKebab = (str) => {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};



const ButtonGenerator = () => {

  const generateCSS = (styles) => {
    return Object.entries(styles)
      .map(([key, value]) => `  ${camelToKebab(key)}: ${value};`)
      .join('\n');
  };

  const styles = useSelector((state) => state.controls.components.button || {});
  const [css, setCss] = useState('');

  useEffect(() => {
    console.log('Styles changed:', styles); // Stebėkite, kokie stiliai gaunami
    const newCss = `.custom-button {\n${generateCSS(styles)}\n}`;
    console.log('Generated CSS:', newCss); // Patikrinkite, kas generuojama
    setCss(newCss);
  }, [styles]);

  const generatedHTML = `<button class="custom-button">click</button>`;

  return (
    <StyledBox>
      <PreviewGeneratorTemplate
        key={css} // Priverčia komponentą persirenderinti su nauju CSS
        initialHtml={generatedHTML}
        initialCss={css}
        initialJs={''}
        initialPreviewWidth={'30%'}
      />
    <TextControls componentId={"button"} controlsConfig={textControls}/>
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
