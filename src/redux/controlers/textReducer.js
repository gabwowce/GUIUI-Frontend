const initialState = {
    text: 'Click Me',
    textFont: 'Arial',
    textColor: '#ffffff',
    fontSize: 16,
    fontWeight: 500,
    uppercase: false,
    letterSpacing: 1,
    wordSpacing: 2,
    textGradient: '',
  };
  
  const textReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BUTTON_TEXT':
        return { ...state, text: action.payload };
      case 'SET_TEXT_FONT':
        return { ...state, textFont: action.payload };
      case 'SET_TEXT_COLOR':
        return { ...state, textColor: action.payload };
      case 'SET_FONT_SIZE':
        return { ...state, fontSize: action.payload };
      case 'SET_FONT_WEIGHT':
        return { ...state, fontWeight: action.payload };
      case 'SET_UPPERCASE':
        return { ...state, uppercase: action.payload };
      case 'SET_LETTER_SPACING':
        return { ...state, letterSpacing: action.payload };
      case 'SET_WORD_SPACING':
        return { ...state, wordSpacing: action.payload };
      case 'SET_TEXT_GRADIENT':
        return { ...state, textGradient: action.payload };
      default:
        return state;
    }
  };
  
  export default textReducer;
  