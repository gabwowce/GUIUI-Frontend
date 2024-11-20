import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Tabs, Tab, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import basic CodeMirror styles and themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // For example, material theme

// Import HTML, CSS, and JavaScript modes
import 'codemirror/mode/htmlmixed/htmlmixed'; // HTML mode
import 'codemirror/mode/css/css'; // CSS mode
import 'codemirror/mode/javascript/javascript'; // JavaScript mode

const Create = () => {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('h1 { color: red; }');
  const [js, setJs] = useState('console.log("Hello, World!");');
  const [activeTab, setActiveTab] = useState(0); // Index for tabs (0 = HTML, 1 = CSS, 2 = JS)

  const generateCode = () => {
    const code = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
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

  return (
    <StyledBox maxWidth={false}>
      <PreviewBox>
          <h2>Preview</h2>
          <iframe
            title="Preview"
            srcDoc={generateCode()}
            width="100%"
            height="100%"
            style={{
              border: 'none',
              borderRadius: '5px',
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
                  display: 'none', // Hide the default indicator
                },
              }}>
              <StyledTab label="HTML" activeTab={activeTab} tabIndex={0}/>
              <StyledTab label="CSS" activeTab={activeTab} tabIndex={1}/>
              <StyledTab label="JavaScript" activeTab={activeTab} tabIndex={2}/>
            </Tabs>
          </TabBox>

          {/* HTML, CSS, JavaScript Editors */}
          {activeTab === 0 && (
            <MirrorBox>
              <CodeMirror
                value={html}
                options={{
                  mode: 'htmlmixed', // HTML mode
                  theme: 'material', // Theme
                  lineNumbers: true,
                  lineWrapping: true,
                  indentUnit: 2,
                }}
                onBeforeChange={(editor, data, value) => setHtml(value)}
                style={{ height: '100%', marginBottom: '20px' }}
              />
            </MirrorBox>
          )}

          {activeTab === 1 && (
            <MirrorBox>
              <CodeMirror
                value={css}
                options={{
                  mode: 'css', // CSS mode
                  theme: 'material', // Theme
                  lineNumbers: true,
                  lineWrapping: true,
                  indentUnit: 2,
                }}
                onBeforeChange={(editor, data, value) => setCss(value)}
                style={{ height: '200px', marginBottom: '20px' }}
              />
            </MirrorBox>
          )}

          {activeTab === 2 && (
            <MirrorBox>
              <CodeMirror
                value={js}
                options={{
                  mode: 'javascript', // JavaScript mode
                  theme: 'material', // Theme
                  lineNumbers: true,
                  lineWrapping: true,
                  indentUnit: 2,
                }}
                onBeforeChange={(editor, data, value) => setJs(value)}
                style={{ height: '200px', marginBottom: '20px' }}
              />
            </MirrorBox>
          )}
      </CodeBox> 
    </StyledBox>
  );
};

const MirrorBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height:'100vh' 
 }));


const StyledTab = styled(Tab)(({ activeTab, tabIndex }) => ({
    borderRadius: '10px 10px 0 0',
    textTransform: 'none',
    // padding: '5px 10px',
    minHeight:'35px',
    padding:'0',
    margin: '0 -1px 0 0',
    backgroundColor: activeTab === tabIndex ? '#757575' : '#f4f4f4',
    color: activeTab === tabIndex ? 'white' : 'black',
    zIndex: activeTab ? 2 : 1,
    '&:hover': {
      backgroundColor: activeTab === tabIndex ? '#45a049' : '#e0e0e0',
    },
 }));


const TabBox = styled(Box)(({ theme }) => ({
  width: '50%', 
 }));

const CodeBox = styled(Box)(({ theme }) => ({
  width: '50%', 
  padding: '0px', 
}));


const StyledBox = styled(Container)(({ theme }) => ({
  display: 'flex', 
  height: '100vh',
}));


const PreviewBox = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: '0px',
  background:'white'

}));

export default Create;
