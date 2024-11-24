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

const Create = () => {
  const [html, setHtml] = useState('<h1>Hello World</h1>\n<div id="count-display"></div>');
  const [css, setCss] = useState('h1 {\n\tcolor: #3498db;\n}\n\ndiv {\n\tfont-size: 20px;\n\tcolor: #2c3e50;\n}');
  const [js, setJs] = useState('console.log("Hello, World!");\nlet count = 0;\nconst display = document.getElementById("count-display");\nsetInterval(() => {\n  display.innerHTML = "Count: " + count;\n  count++;\n}, 1000);');
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor, setBgColor] = useState('#e8e8e8');  // State, kuris saugo background spalvą
  const [showColorPicker, setShowColorPicker] = useState(false);  // State, kuris tvarko ColorPicker matomumą

  const handleIframeClick = () => {
    setShowColorPicker(false);
  };

  const generateCode = () => {
    const code = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: ${bgColor};
            }
            ${css}
          </style>
          <title>Mini IDE</title>
        </head>
        <body>
          ${html}
          <script>
            window.addEventListener('click', () => {
              window.parent.postMessage('iframe-clicked', '*');  // Pranešimas tėviniam langui
            });

             ${js}
          </script>
        </body>
      </html>
    `;
    return code;
  };

  const colorPickerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      colorPickerRef.current && !colorPickerRef.current.contains(e.target) 
      
    ) {
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
    // Klausome pranešimų iš iframe
    const handleMessage = (event) => {
      if (event.data === 'iframe-clicked') {
        setShowColorPicker(false);  // Uždaryti ColorPicker, kai paspaudžiama ant iframe
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);  // Nuimame klausytuvą
    };
  }, []);

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


  
  return (
    <StyledBox maxWidth={false}>
       <PreviewBox>
        <BgColorChangerBox>
          <ThemeSwitch
            checked={bgColor === '#212121'}
            onChange={toggleTheme}
            icon={<Brightness7Icon />} // Light tema
            checkedIcon={<Brightness4Icon />} // Dark tema
          />
          <ColorCodeLabel>{bgColor}</ColorCodeLabel>
          <ColorPickerButton onClick={toggleColorPicker} bgColor={bgColor} />

          {showColorPicker && (
            <div
              ref={colorPickerRef}
              style={{
                position: 'absolute',
                top: '45px', // pridėkite matavimo vienetą
                left: '145px', // pridėkite matavimo vienetą
                zIndex: 10,
              }}
            >
              <ChromePicker color={bgColor} onChange={handleColorChange} />
            </div>
          )}
        </BgColorChangerBox>
        <iframe
            title="Preview"
            srcDoc={generateCode()}
            width="100%"
            height="80%"
            style={{
              border: 'none',
              borderTopLeftRadius: '24px',
              borderBottomLeftRadius: '24px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          ></iframe>
      </PreviewBox>
      <CodeBox>
        <TabBox>
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
                lineNumbers: "on",
                wordWrap: "on",
                autoIndent: false,
                padding: { top: 20 },
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
                lineNumbers: "on",
                wordWrap: "on",
                autoIndent: true,
                padding: { top: 20 },
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
                lineNumbers: "on",
                wordWrap: "on",
                autoIndent: true,
                padding: { top: 20 },
              }}
            />
          </MirrorBox>
        )}
      </CodeBox>
    </StyledBox>
  );
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

const TabBox = styled(Box)({
  width: '50%',
  marginTop: '0px',
  marginBottom: '0px',
  height: '35px',
});

const CodeBox = styled(Box)({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const StyledBox = styled(Container)({
  display: 'flex',
  height: '100vh',
  flexDirection: 'row',
  padding: '3rem 0 0 0',
});

const PreviewBox = styled(Box)({
  width: '50%',
  padding: '35px 0 0 0',
  position: 'relative',
  
});

export default Create;