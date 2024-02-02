import { combineReducers } from 'redux';
import { breakReducer, activeReducer, modeReducer, timerReducer, sessionReducer } from './reducers';

const allReducer = combineReducers({
    isBreak: breakReducer,
    active: activeReducer,
    modes: modeReducer,
    timer: timerReducer,
    session: sessionReducer
});

 const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }

    return allReducer(state, action)
}

export default rootReducer;