import { camelToKebab } from "./CamelToKebab";
import {CONTROL_KEYS} from "../config/controls";

export const generateCSS = (styles, selectedFont, textControls, allControls) => {
  let cssString = '';

  // Font import
  const fontControl = textControls.find(control => control.valueOf === CONTROL_KEYS.FONT_FAMILY);
  const selectedFontConfig = fontControl?.options.find(option => option.value === selectedFont);
  const fontImport = selectedFontConfig?.import ? `@import url('${selectedFontConfig.import}');\n` : '';

  // Border-radius handling
  const borderRadiusValue = styles[CONTROL_KEYS.BORDER_RADIUS]?.value || '';
  const borderRadiusCSS = borderRadiusValue ? `  border-radius: ${borderRadiusValue}px;\n` : '';

  // Generate padding styles dynamically
  const paddingValues = {
    horizontal: styles[CONTROL_KEYS.HORIZONTAL_PADDING]?.value || 0,
    vertical: styles[CONTROL_KEYS.VERTICAL_PADDING]?.value || 0,
  };

  const paddingCSS = `  padding: ${paddingValues.vertical}px ${paddingValues.horizontal}px;\n`;

  // Generate other styles excluding padding and border-radius
  const otherStyles = Object.entries(styles)
    .filter(([key, { shouldGenerate }]) => 
      shouldGenerate && ![CONTROL_KEYS.BORDER_RADIUS, CONTROL_KEYS.HORIZONTAL_PADDING, CONTROL_KEYS.VERTICAL_PADDING].includes(key)
    )
    .map(([key, { value }]) => {
      const controlConfig = allControls.find(control => control.valueOf === key);
      const unit = controlConfig ? controlConfig.props.unit : '';
      const valueWithUnit = typeof value === 'number' && unit ? `${value}${unit}` : value;
      return `  ${camelToKebab(key)}: ${valueWithUnit};`;
    })
    .join('\n');

  // Combine everything into the final CSS string
  cssString = `${fontImport}\n.custom-button {\n${borderRadiusCSS}${paddingCSS}${otherStyles}\n}`;

  return cssString;
};
