import React, { useState } from 'react';

const ButtonGenerator = () => {
  // Būsenos mygtuko savybėms
  const [buttonText, setButtonText] = useState('Click Me!');
  const [buttonColor, setButtonColor] = useState('#1976d2');
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState(4);
  const [padding, setPadding] = useState(10);
  const [fontSize, setFontSize] = useState(16);

  // Sugeneruotas CSS kodas
  const generatedCSS = `
  .custom-button {
    background-color: ${buttonColor};
    color: ${textColor};
    border: none;
    border-radius: ${borderRadius}px;
    padding: ${padding}px ${padding * 2}px;
    font-size: ${fontSize}px;
    cursor: pointer;
  }
  `;

  // HTML kodas
  const generatedHTML = `<button class="custom-button">${buttonText}</button>`;

  // Kopijavimo funkcija
  const copyToClipboard = () => {
    const fullCode = `<style>${generatedCSS}</style>\n${generatedHTML}`;
    navigator.clipboard.writeText(fullCode);
    alert('HTML & CSS copied to clipboard!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Button Generator</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {/* Tekstas */}
        <label>
          Button Text:
          <input
            type="text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        {/* Mygtuko spalva */}
        <label>
          Button Color:
          <input
            type="color"
            value={buttonColor}
            onChange={(e) => setButtonColor(e.target.value)}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </label>

        {/* Teksto spalva */}
        <label>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </label>

        {/* Kraštinių radiusas */}
        <label>
          Border Radius:
          <input
            type="range"
            min="0"
            max="50"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>

        {/* Paddingas */}
        <label>
          Padding:
          <input
            type="range"
            min="5"
            max="30"
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>

        {/* Teksto dydis */}
        <label>
          Font Size:
          <input
            type="range"
            min="10"
            max="30"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>
      </div>

      {/* Peržiūra */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p>Preview:</p>
        <button
          className="custom-button"
          style={{
            backgroundColor: buttonColor,
            color: textColor,
            border: 'none',
            borderRadius: `${borderRadius}px`,
            padding: `${padding}px ${padding * 2}px`,
            fontSize: `${fontSize}px`,
            cursor: 'pointer',
          }}
        >
          {buttonText}
        </button>
      </div>

      {/* Kopijavimo mygtukas */}
      <button onClick={copyToClipboard} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Copy HTML & CSS
      </button>

      {/* Sugeneruotas kodas */}
      <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h3>Generated Code:</h3>
        <pre>{`<style>${generatedCSS}</style>`}</pre>
        <pre>{generatedHTML}</pre>
      </div>
    </div>
  );
};

export default ButtonGenerator;
