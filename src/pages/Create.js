import React, { useState } from 'react';
import { ChromePicker } from 'react-color';  // Importuojame spalvų pasirinkimo komponentą
import MonacoEditor from '@monaco-editor/react';
import { Tabs, Tab, Box, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import CodeIcon from '../assets/html.png';
import StyleIcon from '../assets/css.png';
import JavascriptIcon from '../assets/js.png';

import 'monaco-editor/min/vs/editor/editor.main.css';

const Create = () => {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('h1 { color: red; }');
  const [js, setJs] = useState('console.log("Hello, World!");');
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor, setBgColor] = useState('#ffffff');  // State, kuris saugo background spalvą
  const [showColorPicker, setShowColorPicker] = useState(false);  // State, kuris tvarko ColorPicker matomumą

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
              background-color: ${bgColor};  /* Naudojame pasirinkta spalvą */
            }
            ${css}
          </style>
          <title>Mini IDE</title>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          </script>
        </body>
      </html>
    `;
    return code;
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleColorChange = (color) => {
    setBgColor(color.hex);  // Atvaizduojame pasirinktą spalvą
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);  // Perjungia ColorPicker matomumą
  };

  return (
    <StyledBox maxWidth={false}>
      <PreviewBox>
        {/* Mygtukas, kuris įjungia / išjungia ColorPicker */}
        <Button variant="contained" color="primary" onClick={toggleColorPicker} style={{ marginBottom: '10px' }}>
          {showColorPicker ? 'Hide Color Picker' : 'Show Color Picker'}
        </Button>

        {/* Spalvos pasirinkimo įrankis */}
        {showColorPicker && (
          <ColorPickerWrapper>
            <ChromePicker color={bgColor} onChange={handleColorChange} />
          </ColorPickerWrapper>
        )}

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
            background: 'white',
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

const ColorPickerWrapper = styled(Box)({
  position: 'absolute',
  top: 20,
  left: 20,
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
