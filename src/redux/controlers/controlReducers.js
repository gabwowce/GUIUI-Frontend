import { UPDATE_CONTROL, REMOVE_CONTROL } from './controlActions';
import { textControls } from '../../config/controls';

const generateInitialState = (controls) => {
  const initialButtonState = {};
  const buttonTextControl = controls.find(control => control.valueOf === 'content');
  const buttonText = buttonTextControl ? buttonTextControl.props.initialValue : "Click me";

  controls.forEach(({ valueOf, props: { initialValue = "" } }) => {
    if (valueOf !== 'content') {
      initialButtonState[valueOf] = initialValue; // Pasiimame pradines reikšmes iš configo
    }
  });

  return {
    components: {
      button: {
        css: { ...initialButtonState },  // Įrašome pradines reikšmes
        text: buttonText,
      },
    },
  };
};
const initialState = generateInitialState(textControls);

export const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTROL:
      const { componentId, controlName, value, shouldGenerate } = action.payload;

      // Check if the control being updated is a text control
      if (controlName === 'content') {
        // Update the text property (e.g., button text)
        return {
          ...state,
          components: {
            ...state.components,
            [componentId]: {
              ...state.components[componentId],
              text: value,  // Update the text (e.g., button text)
            },
          },
        };
      }
      
      // Update css property if it's not a text control
      return {
        ...state,
        components: {
          ...state.components,
          [componentId]: {
            ...state.components[componentId],
            css: {
              ...state.components[componentId].css,
              [controlName]: { value, shouldGenerate },
            },
          },
        },
      };
      case REMOVE_CONTROL: {
        const { componentId, controlName } = action.payload; // Properly destructure
        const updatedCss = { ...state.components[componentId]?.css };
        delete updatedCss[controlName]; // Remove the specific key
      
        return {
          ...state,
          components: {
            ...state.components,
            [componentId]: {
              ...state.components[componentId],
              css: updatedCss,
            },
          },
        };
      }


    default:
      return state;
  }
};