import { camelToKebab } from "./CamelToKebab";

export const generateCSS = (styles, selectedFont, textControls, allControls) => {
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

