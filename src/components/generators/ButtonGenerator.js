import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


import PreviewGeneratorTemplate from '../PreviewGeneratorTemplate';
import TextControls from '../../components/controls/TextControls';
import BorderRadiusControls from '../controls/BorderRadiusControls';
import PaddingControls from '../controls/PaddingControls';
import {textControls, borderRadiusControls, paddingControls} from "../../config/controls";
import { generateCSS } from '../../helpers/GenerateCSS';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const componentId = "button";
const allControls = [...textControls, ...borderRadiusControls, ...paddingControls];

const ButtonGenerator = () => {
  const styles = useSelector((state) => {
    const buttonStyles = state.controls.components.button.css || {};
    return buttonStyles;
  });

  const btnContent = useSelector((state) => state.controls.components.button.text);
  const selectedFont = useSelector((state) => state.controls.components.button.css.fontFamily); 
  const [generatedHTML, setGeneratedHTML] = useState(`<button class="custom-button">${btnContent}</button>`)

  const [css, setCss] = useState('');

  useEffect(() => {
    const newCss = generateCSS(styles, selectedFont, textControls, allControls); 
    setCss(newCss);
  }, [styles, selectedFont]);

  useEffect(()=>{
    setGeneratedHTML(`<button class="custom-button">${btnContent}</button>`);
  }, [btnContent])


  const StyledButton = () => (
    <button className="custom-button">
      {btnContent}
    </button>
  );

  return (
    <StyledBox>
      <style>{css}</style>  
      <PreviewGeneratorTemplate
        key={`${css}-${btnContent}`} 
        initialHtml={generatedHTML}
        initialCss={css}
        initialJs={''}
        initialText={btnContent}
        initialPreviewWidth={'30%'}
        GeneratedComponent={StyledButton}
      />
      <TextControls componentId={componentId} controlsConfig={textControls}/>
      <BorderRadiusControls componentId={componentId} controlsConfig={borderRadiusControls}/>
      <PaddingControls componentId={componentId} controlsConfig={paddingControls}/>
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
