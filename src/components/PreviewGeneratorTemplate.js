import React, { useState,useEffect, useRef } from 'react';
import { ChromePicker } from 'react-color';  
import MonacoEditor from '@monaco-editor/react';

import { Tabs, Tab, Box, Container, Button, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

import CodeIcon from '../assets/html.png';
import StyleIcon from '../assets/css.png';
import JavascriptIcon from '../assets/js.png';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import 'monaco-editor/min/vs/editor/editor.main.css';

const PreviewGeneratorTemplate = ({ initialHtml, initialCss, initialJs, initialText, initialPreviewWidth, GeneratedComponent }) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor, setBgColor] = useState('#e8e8e8');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [tabWidth, setTabWidth] = useState('');
  const [showCode, setShowCode] = useState(false); // Track if the "Get Code" button is clicked

  const handleIframeClick = () => {
    setShowColorPicker(false);
  };

  const colorPickerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const numericWidth = parseFloat(initialPreviewWidth);
    setTabWidth(numericWidth <= 30 ? '90%' : '50%');
  }, [initialPreviewWidth]);

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setBgColor(color.hex);
  };

  const toggleTheme = () => {
    setBgColor((prev) => (prev === '#e8e8e8' ? '#212121' : '#e8e8e8'));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleGetCode = () => {
    setShowCode(true); // Show code editors when the button is clicked
  };

  return (
    <StyledBox maxWidth={false} width={initialPreviewWidth}>
      <PreviewBox>
        <BgColorChangerBox>
          <ThemeSwitch
            checked={bgColor === '#212121'}
            onChange={toggleTheme}
            icon={<Brightness7Icon />}
            checkedIcon={<Brightness4Icon />}
          />
          <ColorCodeLabel>{bgColor}</ColorCodeLabel>
          <ColorPickerButton onClick={toggleColorPicker} bgColor={bgColor} />

          {showColorPicker && (
            <div
              ref={colorPickerRef}
              style={{
                position: 'absolute',
                top: '100%',
                zIndex: 9999,
              }}
            >
              <ChromePicker color={bgColor} onChange={handleColorChange} />
            </div>
          )}
        </BgColorChangerBox>

        {/* Preview Box */}
        <Box
          sx={{
            border: 'none',
            borderRadius: '24px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            height: '400px',
            backgroundColor: bgColor,
            display: 'flex',
            justifyContent: 'center', // Horizontal center
            alignItems: 'center', // Vertical center
          }}
        >
          <GeneratedComponent/>

        </Box>

        {/* "Get Code" Button */}
        <Button variant="contained" color="primary" onClick={handleGetCode} sx={{ marginTop: '20px' }}>
          Get Code
        </Button>
      </PreviewBox>

      {showCode && (
        <CodeBox>
          <TabBox tabWidth={tabWidth}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="editor tabs"
              variant="fullWidth"
              sx={{
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              <StyledTab
                icon={<img src={CodeIcon} alt="HTML" style={{ width: 24, height: 24 }} />}
                iconPosition="start"
                label="HTML"
                activeTab={activeTab}
                tabIndex={0}
              />
              <StyledTab
                icon={<img src={StyleIcon} alt="CSS" style={{ width: 24, height: 24 }} />}
                iconPosition="start"
                label="CSS"
                activeTab={activeTab}
                tabIndex={1}
              />
              <StyledTab
                icon={<img src={JavascriptIcon} alt="JavaScript" style={{ width: 20, height: 20 }} />}
                iconPosition="start"
                label="JavaScript"
                activeTab={activeTab}
                tabIndex={2}
              />
            </Tabs>
          </TabBox>

          {/* HTML, CSS, JavaScript Editors */}
          {activeTab === 0 && (
            <MirrorBox>
              <MonacoEditor
                height="80%"
                language="html"
                value={html}
                theme="vs-dark"
                onChange={(value) => setHtml(value)}
                options={{
                  selectOnLineNumbers: true,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  autoIndent: false,
                  padding: { top: 20 },
                  fixedOverflowWidgets: true,
                }}
              />
            </MirrorBox>
          )}

          {activeTab === 1 && (
            <MirrorBox>
              <MonacoEditor
                height="80%"
                language="css"
                value={css}
                theme="vs-dark"
                onChange={(value) => setCss(value)}
                options={{
                  selectOnLineNumbers: true,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  autoIndent: true,
                  padding: { top: 20 },
                  fixedOverflowWidgets: true,
                }}
              />
            </MirrorBox>
          )}

          {activeTab === 2 && (
            <MirrorBox>
              <MonacoEditor
                height="80%"
                language="javascript"
                value={js}
                theme="vs-dark"
                onChange={(value) => setJs(value)}
                options={{
                  selectOnLineNumbers: true,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  autoIndent: true,
                  padding: { top: 20 },
                  fixedOverflowWidgets: true,
                }}
              />
            </MirrorBox>
          )}
        </CodeBox>
      )}
    </StyledBox>
  );
};


const convertCssToJs = (cssString) => {
  const styles = {};
  cssString
    .split(';') // Padalinkite pagal CSS taisyklių pabaigos ženklą
    .map((rule) => rule.trim()) // Pašalinkite tarpus prieš ir po kiekvienos taisyklės
    .filter((rule) => rule) // Pašalinkite tuščius elementus
    .forEach((rule) => {
      const [key, value] = rule.split(':').map((part) => part.trim()); // Padalinkite kiekvieną taisyklę pagal ":"
      if (key && value) {
        const jsKey = key.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()); // CSS į JS konversija
        styles[jsKey] = value; // Priedėkite prie objektų
      }
    });
  return styles;
};

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: '#ffcc00', // Spalva, kai išjungta
    '&:hover': {
      backgroundColor: 'rgba(255, 204, 0, 0.2)',
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#BFC8C9',
    height: '18px',
  },
  '& .Mui-checked': {
    color: '#476C90', // Mėlyna spalva kai įjungta
    '&:hover': {
      backgroundColor: 'rgba(71, 108, 144, 0.2)',
    },
    '& + .MuiSwitch-track': {
      backgroundColor: '#476C90', // Track spalva kai įjungta
    },
  },
}));


const BgColorChangerBox = styled(Box)(({ Box }) =>({
  position:'absolute',
  top:"-10px",
  right:"20px",
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  gap:'8px'
}));



const ColorCodeLabel = styled(Box)({
  width:'70px',
  fontSize: '1rem',
  color: 'white',
  marginTop:"4px"
});

const ColorPickerButton = styled(Button)(({ bgColor }) =>({
  border: '2px solid white',
  background: `${bgColor}`,
  width: '24px !important',
  height: '24px !important',
  padding: '0 !important',
  minWidth: '24px !important',
  borderRadius: '3px !important',
  '&:hover': {
    background: `${bgColor}`,
  },
}));



const ColorPickerWrapper = styled(Box)({
  position: 'absolute',
  top: 45,
  left: 145,
  zIndex: 10,
});

const MirrorBox = styled(Box)({
  width: '100%',
  flexGrow: 1,
  overflow: 'auto',
 
});



const StyledTab = styled(Tab)(({ activeTab, tabIndex }) => ({
  borderRadius: '10px 10px 0 0',
  textTransform: 'none',
  minHeight: '35px',
  padding: '0',
  margin: '0 -1px 0 0',
  backgroundColor: activeTab === tabIndex ? '#1e1e1e' : '#171717',
  color: '#FDFAFA',
  zIndex: activeTab ? 2 : 1,
  '&:hover': {
    backgroundColor: activeTab === tabIndex ? '#1e1e1e' : '#171717',
  },
  '&.Mui-selected': {
    color: '#FDFAFA',
  },
}));


const TabBox = styled(Box)(({ tabWidth }) => ({
  marginTop: '0px',
  marginBottom: '0px',
  height: '35px',
  width: tabWidth || '50%', 
}));


const CodeBox = styled(Box)({
 
  display: 'flex',
  flexDirection: 'column',
  height:'50%',
  
  
});


const StyledBox = styled(Container)(({ width }) => ({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  padding: '3rem 0 0 0',
  width: width || '100%', 
  overflow:'hidden'
}));

const PreviewBox = styled(Box)({

  padding: '35px 0 0 0',
  position: 'relative',
  height:'400px'
  
});

export default PreviewGeneratorTemplate;