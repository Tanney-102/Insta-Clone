const initialState = {
    isLoggedIn: false,
    username: '',
    nickname: '',
    profilePic: '',
}

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const loginDyn = (name, nickname) => { return { type: LOG_IN, name, nickname }; };
export const logout = { type: LOG_OUT };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                username: action.name,
                nickname: action.nickname,
            };  
        case LOG_OUT:
            return {
                isLoggedIn: false,
                username: '',
                nickname: '',
                profilePic: '',
            }
        default:
            return state;
    }
};

export default reducer;