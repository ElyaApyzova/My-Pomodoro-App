
const initialState = {
    // Initial state for the task list
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle different action types here
      default:
        return state; // Return the current state for unknown actions
    }
  };
  
  export default taskReducer;