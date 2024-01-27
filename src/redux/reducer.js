const initialState = {
    duration: 25,
    timeRemaining: 1500,
    isRunning: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'START_TIMER':
        return {
          ...state,
          isRunning: true,
        };
      case 'PAUSE_TIMER':
        return {
          ...state,
          isRunning: false,
        };
      case 'RESET_TIMER':
        return {
          ...state,
          timeRemaining: state.duration * 60,
          isRunning: false,
        };
      case 'TICK':
        return {
          ...state,
          timeRemaining: state.timeRemaining - 1,
        };
      default:
        return state;
    }
  };
  
  export default reducer;