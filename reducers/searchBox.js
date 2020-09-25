const initialState = {
  searchBoxOn: false,  
  headerSizeSearchBox: false,
};

const GET_BOX = 'GET_BOX';
const REMOVE_BOX = 'REMOVE_BOX';
const GET_HEADER_BOX = 'GET_HEADER_BOX';
const REMOVE_HEADER_BOX = 'REMOVE_HEADER_BOX';

export const getBox = {
    type: GET_BOX,
};

export const removeBox = {
    type: REMOVE_BOX,
};

export const getHeaderBox = {
    type : GET_HEADER_BOX,
};

export const removeHeaderBox = {
    type: REMOVE_HEADER_BOX,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOX:
            return {
                ...state,
                searchBoxOn: true,
            };
        case REMOVE_BOX:
            return {
                ...state,
                searchBoxOn: false,
            };
        case GET_HEADER_BOX:
            return {
                ...state,
                headerSizeSearchBox: true,
            }
        case REMOVE_HEADER_BOX:
            return {
                ...state,
                headerSizeSearchBox: false,
            }
        default:
            return state;
    }
};

export default reducer;