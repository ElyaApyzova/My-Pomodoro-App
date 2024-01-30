export const breakReducer = (state = 5, action) => {
    switch(action.type) {
        case 'BREAK':
            return action.payload;
        default:
            return state;
    }
}

export const activeReducer = (state = false, action) => {
    switch(action.type) {
        case 'ENABLE':
            return true;
        case 'DISABLE':
            return false;
        default:
            return state;
    }
}

export const modeReducer = (state = false, action) => {
    switch(action.type) {
        case 'MODE-SESSION':
            return false;
        case 'MODE-BREAK':
            return true;
        default:
            return state;
    }
}

export const timerReducer = (state = 1500, action) => {
    switch(action.type) {
        case 'SECONDS':
            return action.payload;
        default:
            return state;
    }
}

export const sessionReducer = (state = 25, action) => {
    switch(action.type) {
        case 'SESSION':
            return action.payload;
        default:
            return state;
    }
}