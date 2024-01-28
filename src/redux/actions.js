


export const startTimer = () => {
    return {
      type: "START_TIMER"
    }
  };
  
  export const pauseTimer = () => {
    return {
      type: "PAUSE_TIMER"
    }
  };
  
  export const resetTimer = () => {
    return {
      type: "RESET_TIMER"
    }
  };
  
  export const addTask = (task) => {
    return {
      type: "ADD_TASK",
      payload: {task},
    }
  };
