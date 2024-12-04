import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';
import TextControls from '../../components/controls/TextControls';
import BorderRadiusControls from '../controls/BorderRadiusControls';
import { renderControl } from '../controls/renderControl';
import {textControls, borderRadiusControls} from "../../config/controls";

import { useDispatch, useSelector } from 'react-redux';

const componentId = "button";

const camelToKebab = (str) => {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};
const allControls = [...textControls, ...borderRadiusControls];


const ButtonGenerator = () => {
  const generateCSS = (styles, selectedFont) => {
    let cssString = '';
  
    // Find the font import configuration
    const fontControl = textControls.find(control => control.valueOf === 'fontFamily');
    const selectedFontConfig = fontControl?.options.find(option => option.value === selectedFont);
    
    // If the font import URL is available, add it to CSS before .custom-button
    let fontImport = '';
    if (selectedFontConfig?.import) {
      fontImport = `@import url('${selectedFontConfig.import}');\n`;
    }
  
    // Generate the remaining CSS, but make sure border-radius is handled first
    const borderRadiusValue = styles['borderRadius'] ? styles['borderRadius'].value : '';
    const borderRadiusUnit = 'px';  // Ensure unit is always 'px' for border-radius
    const borderRadiusCSS = borderRadiusValue ? `  border-radius: ${borderRadiusValue}${borderRadiusUnit};\n` : '';
  
    // Now generate the rest of the styles for other border radii
    const otherBorderRadiusStyles = Object.entries(styles)
      .filter(([key, { shouldGenerate }]) => shouldGenerate && key !== 'borderRadius') // Exclude borderRadius from initial filtering
      .map(([key, { value }]) => { // Ensure we're accessing the `value` property here
        const controlConfig = allControls.find(control => control.valueOf === key);  
        const unit = controlConfig ? controlConfig.props.unit : ''; 
  
        // Add unit if it's a number and unit exists
        const valueWithUnit = typeof value === 'number' && unit ? `${value}${unit}` : value;
        return `  ${camelToKebab(key)}: ${valueWithUnit};`; 
      })
      .join('\n');
  
    // Combine everything: font import, border-radius first, then other border-radius styles
    cssString = `${fontImport}\n.custom-button {\n${borderRadiusCSS}${otherBorderRadiusStyles}\n}`;
  
    return cssString;
  };
  
  

  const styles = useSelector((state) => {
    const buttonStyles = state.controls.components.button.css || {};
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
      <TextControls componentId={componentId} controlsConfig={textControls}/>
      <BorderRadiusControls componentId={componentId} controlsConfig={borderRadiusControls}/>
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
