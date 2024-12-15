import { UPDATE_CONTROL, REMOVE_CONTROL } from './controlActions';
import { CONTROL_KEYS, textControls, paddingControls, borderRadiusControls } from '../../config/controls';

const generateInitialState = (allControls) => {
  const initialButtonState = {};
  let buttonText = "Click me"; // Default value

  // Iteruojame per visus valdiklius
  allControls.forEach(({ valueOf, props: { initialValue = "" } }) => {
    if (valueOf === CONTROL_KEYS.BUTTON_CONTENT) {
      buttonText = initialValue || buttonText; // Pakeičiam "content" tekstą
    } else {
      initialButtonState[valueOf] = { value: initialValue, shouldGenerate: true }; 
    }
  });

  return {
    components: {
      button: {
        css: { ...initialButtonState },  
        text: buttonText,
      },
    },
  };
};
const allControls = [...textControls, ...paddingControls, ...borderRadiusControls];
const initialState = generateInitialState(allControls);

export const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTROL:
      const { componentId, controlName, value, shouldGenerate } = action.payload;

      if (controlName === CONTROL_KEYS.BUTTON_CONTENT) {
        return {
          ...state,
          components: {
            ...state.components,
            [componentId]: {
              ...state.components[componentId],
              text: value, 
            },
          },
        };
      }
      
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
        const { componentId, controlName } = action.payload; 
        const updatedCss = { ...state.components[componentId]?.css };
        delete updatedCss[controlName]; 
      
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
