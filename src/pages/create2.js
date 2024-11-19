import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Tabs, Tab, Box, Typography, Switch } from '@mui/material';

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
   <Box>
    <Box>
        <Box>
            <Typography>

            </Typography>
            <Switch>

            </Switch>
            <Selection>

            </Selection>
        </Box>

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


    </Box>
    <Box>

    <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="editor tabs"
            variant="fullWidth"
            sx={{
              '& .MuiTabs-indicator': {
                display: 'none', // Hide the default indicator
              },
            }}
          >
            <Tab
              label="HTML"
              sx={{
                borderRadius: '20px 20px 0 0',
                textTransform: 'none',
                padding: '10px 20px',
                margin: '0 5px',
                backgroundColor: activeTab === 0 ? '#4CAF50' : '#f4f4f4',
                color: activeTab === 0 ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: activeTab === 0 ? '#45a049' : '#e0e0e0',
                },
              }}
            />
            <Tab
              label="CSS"
              sx={{
                borderRadius: '20px 20px 0 0',
                textTransform: 'none',
                padding: '10px 20px',
                margin: '0 5px',
                backgroundColor: activeTab === 1 ? '#4CAF50' : '#f4f4f4',
                color: activeTab === 1 ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: activeTab === 1 ? '#45a049' : '#e0e0e0',
                },
              }}
            />
            <Tab
              label="JavaScript"
              sx={{
                borderRadius: '20px 20px 0 0',
                textTransform: 'none',
                padding: '10px 20px',
                margin: '0 5px',
                backgroundColor: activeTab === 2 ? '#4CAF50' : '#f4f4f4',
                color: activeTab === 2 ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: activeTab === 2 ? '#45a049' : '#e0e0e0',
                },
              }}
            />
          </Tabs>


          {/* HTML, CSS, JavaScript Editors */}
        {activeTab === 0 && (
          <div>
            <h2>HTML</h2>
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
              style={{ height: '200px', marginBottom: '20px' }}
            />
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <h2>CSS</h2>
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
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <h2>JavaScript</h2>
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
          </div>
        )}
      </div>

    </Box>
   </Box>
  );
};

export default Create;
