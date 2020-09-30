const initialState = {
    isLoggedIn: false,
    id: '',
    username: '',
    nickname: '',
    profilePic: '',
}

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const loginDyn = (id, name, nickname) => { return { type: LOG_IN, id, name, nickname }; };
export const logout = { type: LOG_OUT };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                id: action.id,
                username: action.name,
                nickname: action.nickname,
            };  
        case LOG_OUT:
            return {
                isLoggedIn: false,
                id: '',
                username: '',
                nickname: '',
                profilePic: '',
            }
        default:
            return state;
    }
};

export default reducer;