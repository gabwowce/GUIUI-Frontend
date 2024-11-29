import { UPDATE_CONTROL } from './controlActions';
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
      const { componentId, controlName, value } = action.payload;
      console.log(`Reducer: Updating control ${controlName} for component ${componentId} with value: ${value}`);
      
      // Atnaujinkite būseną, bet nepriklausomai nuo konfigūracijos
      return {
        ...state,
        components: {
          ...state.components,
          [componentId]: {
            ...state.components[componentId],
            css: {
              ...state.components[componentId].css,
              [controlName]: value,  // Atnaujinkite tik tą reikšmę, kurią pakeičiate
            },
          },
        },
      };
    default:
      return state;
  }
};
