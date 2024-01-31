import { combineReducers } from 'redux';
import { breakReducer, activeReducer, modeReducer, timerReducer, sessionReducer } from './reducers';

const rootReducer = combineReducers({
    isBreak: breakReducer,
    active: activeReducer,
    mode: modeReducer,
    timer: timerReducer,
    session: sessionReducer
});

export default rootReducer;