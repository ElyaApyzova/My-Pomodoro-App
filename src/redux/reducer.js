
const initialState = {
    // Initial state for the task list
  };
  
  const taskReducer = (state = initialState, task, action) => {
    switch (action.type) {
      case ('START_TIMER'):
        return state - 1
        case ('PAUSE_TIMER'):
          return state
          case ('RESET_TIMER'):
            return state -25
            case ('ADD_TASK'):
              return task
      default:
        return state; 
    }
  };
  
  export default taskReducer;