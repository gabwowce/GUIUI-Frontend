import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

// Importuojame pagrindines codemirror stilių ir temas
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // Pavyzdžiui, material tema

// Importuojame HTML, CSS ir JavaScript režimus
import 'codemirror/mode/htmlmixed/htmlmixed'; // HTML režimas
import 'codemirror/mode/css/css'; // CSS režimas
import 'codemirror/mode/javascript/javascript'; // JavaScript režimas

const Create = () => {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('h1 { color: red; }');
  const [js, setJs] = useState('console.log("Hello, World!");');
  const [activeTab, setActiveTab] = useState('html'); // Keičiamas pagal pasirinktą tab

  // Funkcija, kuri sukuria HTML, CSS ir JavaScript struktūrą
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

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Kairysis langas - HTML, CSS ir JS įvedimas */}
      <div style={{ width: '33%', padding: '20px', borderRight: '2px solid #ddd' }}>
        <div>
          {/* Tabs */}
          <button 
            style={{ padding: '10px', margin: '5px', cursor: 'pointer', backgroundColor: activeTab === 'html' ? '#ddd' : '#fff' }}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button 
            style={{ padding: '10px', margin: '5px', cursor: 'pointer', backgroundColor: activeTab === 'css' ? '#ddd' : '#fff' }}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
          <button 
            style={{ padding: '10px', margin: '5px', cursor: 'pointer', backgroundColor: activeTab === 'js' ? '#ddd' : '#fff' }}
            onClick={() => setActiveTab('js')}
          >
            JavaScript
          </button>
        </div>

        {/* HTML, CSS, JavaScript redaktoriai */}
        {activeTab === 'html' && (
          <div>
            <h2>HTML</h2>
            <CodeMirror
              value={html}
              options={{
                mode: 'htmlmixed', // HTML režimas
                theme: 'material', // Tema
                lineNumbers: true,
                lineWrapping: true,
                indentUnit: 2
              }}
              onBeforeChange={(editor, data, value) => setHtml(value)}
              style={{ height: '200px' }}
            />
          </div>
        )}

        {activeTab === 'css' && (
          <div>
            <h2>CSS</h2>
            <CodeMirror
              value={css}
              options={{
                mode: 'css', // CSS režimas
                theme: 'material', // Tema
                lineNumbers: true,
                lineWrapping: true,
                indentUnit: 2
              }}
              onBeforeChange={(editor, data, value) => setCss(value)}
              style={{ height: '200px' }}
            />
          </div>
        )}

        {activeTab === 'js' && (
          <div>
            <h2>JavaScript</h2>
            <CodeMirror
              value={js}
              options={{
                mode: 'javascript', // JavaScript režimas
                theme: 'material', // Tema
                lineNumbers: true,
                lineWrapping: true,
                indentUnit: 2
              }}
              onBeforeChange={(editor, data, value) => setJs(value)}
              style={{ height: '200px' }}
            />
          </div>
        )}
      </div>

      {/* Dešinysis langas - Peržiūra */}
      <div style={{ width: '67%', padding: '20px' }}>
        <h2>Preview</h2>
        <iframe
          title="Preview"
          srcDoc={generateCode()}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Create;
