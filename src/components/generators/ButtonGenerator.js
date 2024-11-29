import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';
import TextControls from '../../components/controls/TextControls';
import BorderRadiusControls from '../controls/BorderRadiusControls';
import { renderControl } from '../controls/renderControl';
import {textControls, borderRadiusControls} from "../../config/controls";

import { useDispatch, useSelector } from 'react-redux';


const camelToKebab = (str) => {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};
const allControls = [...textControls, ...borderRadiusControls];


const ButtonGenerator = () => {
  const generateCSS = (styles, selectedFont) => {
    let cssString = '';

    // Ieškome šrifto konfigūracijos, kad gautume import URL
    const fontControl = textControls.find(control => control.valueOf === 'fontFamily');
    const selectedFontConfig = fontControl?.options.find(option => option.value === selectedFont);
    
    // Jei šrifto importas yra nurodytas, pridedame jį į CSS prieš .custom-button
    let fontImport = '';
    if (selectedFontConfig?.import) {
      fontImport = `@import url('${selectedFontConfig.import}');\n`;
    }

    // Sugeneruojame likusį CSS
    cssString += Object.entries(styles)
    .map(([key, value]) => {
      const controlConfig = allControls.find(control => control.valueOf === key);  
      const unit = controlConfig ? controlConfig.props.unit : ''; 

      const valueWithUnit = typeof value === 'number' && unit ? `${value}${unit}` : value;
      return `  ${camelToKebab(key)}: ${valueWithUnit};`; 
    })
    .join('\n');
  
  // Grąžiname @import ir .custom-button kartu su sugeneruotu CSS
  return `${fontImport}\n.custom-button {\n${cssString}\n}`;
};

  const styles = useSelector((state) => {
    const buttonStyles = state.controls.components.button.css || {};
    console.log('Styles from Redux:', buttonStyles); 
    return buttonStyles;
  });

  const btnContent = useSelector((state) => state.controls.components.button.text);
  const selectedFont = useSelector((state) => state.controls.components.button.css.fontFamily); 
  console.log('btnContent:', btnContent); 

  const [css, setCss] = useState('');

  useEffect(() => {
    console.log('Styles changed:', styles);
    const newCss = generateCSS(styles, selectedFont); // Sugeneruojame CSS su šrifto importu
    console.log('Generated CSS:', newCss); 
    setCss(newCss);
  }, [styles, selectedFont]);

  const generatedHTML = `<button class="custom-button">${btnContent}</button>`;

  const StyledButton = () => (
    <button className="custom-button">
      {btnContent}
    </button>
  );

  return (
    <StyledBox>
      <style>{css}</style>  
      <PreviewGeneratorTemplate
        key={css} 
        initialHtml={generatedHTML}
        initialCss={css}
        initialJs={''}
        initialText={btnContent}
        initialPreviewWidth={'30%'}
        GeneratedComponent={StyledButton}
      />
      <TextControls componentId={"button"} controlsConfig={textControls}/>
      <BorderRadiusControls componentId={"button"} controlsConfig={borderRadiusControls}/>
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
