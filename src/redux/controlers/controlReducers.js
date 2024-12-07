import { UPDATE_CONTROL, REMOVE_CONTROL } from './controlActions';
import { textControls } from '../../config/controls';

const generateInitialState = (controls) => {
  const initialButtonState = {};
  const buttonTextControl = controls.find(control => control.valueOf === 'content');
  const buttonText = buttonTextControl ? buttonTextControl.props.initialValue : "Click me";

  controls.forEach(({ valueOf, props: { initialValue = "" } }) => {
    if (valueOf !== 'content') {
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
const initialState = generateInitialState(textControls);

export const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTROL:
      const { componentId, controlName, value, shouldGenerate } = action.payload;

      if (controlName === 'content') {
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
