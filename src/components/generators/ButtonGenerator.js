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
      .map(([key, value]) => {
        // Patikrinkite, ar reikšmė yra skaičius ir jei taip, ar yra unit
        const controlConfig = textControls.find(control => control.valueOf === key);  // Rasti kontrolerį pagal key
        const unit = controlConfig ? controlConfig.props.unit : ''; // Gauti unit iš kontrolerio (jei jis yra)
        
        // Jei unit yra, pridėkite jį prie skaičiaus, jei reikšmė yra skaičius
        const valueWithUnit = typeof value === 'number' && unit ? `${value}${unit}` : value;
  
        return `  ${camelToKebab(key)}: ${valueWithUnit};`; // Grąžiname su pritaikytu unit
      })
      .join('\n');
  };

  const styles = useSelector((state) => {
    const buttonStyles = state.controls.components.button.css || {};
    console.log('Styles from Redux:', buttonStyles); // Patikrinkite, kokie duomenys grįžta iš Redux
    return buttonStyles;
  });
  const btnContent = useSelector((state)=> state.controls.components.button.text)
  const [css, setCss] = useState('');

  useEffect(() => {
    console.log('Styles changed:', styles); // Stebėkite, kokie stiliai gaunami
    const newCss = `.custom-button {\n${generateCSS(styles)}\n}`;
    console.log('Generated CSS:', newCss); // Patikrinkite, kas generuojama
    setCss(newCss);
  }, [styles]);

  const generatedHTML = `<button class="custom-button">${btnContent}</button>`;

  return (
    <StyledBox>
      <PreviewGeneratorTemplate
        key={css} 
        initialHtml={generatedHTML}
        initialCss={css}
        initialJs={''}
        initialText={btnContent}
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
