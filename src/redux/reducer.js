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
              isWork: true,
              isPause: false,
              isRest: false,
            };
          
          case 'STOP_TIMER':
            return {
              ...state,
              isWork: false,
              isPause: false,
              isRest: false,
              seconds: 0,
            };
          
          case 'PAUSE_TIMER':
            return {
              ...state,
              isPause: true,
            };
          
          case 'CONTINUE_TIMER':
            return {
              ...state,
              isPause: false,
            };
          
          case 'RESET_TIMER':
            return {
              ...state,
              isWork: false,
              isPause: false,
              isRest: false,
              seconds: 0,
            };
          
          case 'DONE_TIMER':
            return {
              ...state,
              isWork: false,
              isPause: false,
              isRest: false,
              seconds: 0,
              tomato: state.tomato + 1,
            };
      default:
        return state;
    }
  };
  
  export default reducer;