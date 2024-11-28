import { UPDATE_CONTROL } from './controlActions';

const initialState = {
    components: {
        button: {
            
            font: 'Arial', // Default font for button text
            color: '#000000', // Default font color
            fontSize: 16, // Default font size
            fontWeight: 800, // Default font weight
            
            letterSpacing: 3, // Default letter spacing
            wordSpacing: 0, // Default word spacing
           
          },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
    },
};

export const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONTROL:
          const { componentId, controlName, value } = action.payload;
          return {
            ...state,
            components: {
              ...state.components,
              [componentId]: {
                ...state.components[componentId],
                [controlName]: value,
              },
            },
          };
        default:
          return state;
    }
};
