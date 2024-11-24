const initialState = {
    activeRoute: '/',
  };
  
  const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_ROUTE':
        return { ...state, activeRoute: action.payload };
      default:
        return state;
    }
  };
  
  export default navigationReducer;
  