const initialState = {
    mainPosts:[{
        id:'1',
        User: {
            id: 'ote8125',
            nickname: 'ooo__tanney',
            profilePic: '/img/profile_tanney.png',
        },
        contents:[
            '/img/react-img.png',
            'http://placehold.it/300x300',
            'http://placehold.it/300x300',
            'http://placehold.it/300x300',
            'http://placehold.it/300x300',
        ],
        likes:5,
        liked:false,
        marked:false,
        description: `This is a description area`,
        Comments: [{
            User:{
                nickname: 'Danney',
                profilePic:'',
            },
            content: 'This is a comment',
            reply:[],
            likes:3,
        }],
    }, {
        id:'1',
        User: {
            id: 'ote8125',
            nickname: 'ooo__tanney',
            profilePic: '/img/profile_tanney.png',
        },
        contents:[
            'http://placehold.it/300x300',
            'http://placehold.it/300x300',
            'http://placehold.it/300x300',
            'http://placehold.it/300x300',
        ],
        likes:5,
        liked:false,
        marked:false,
        description: `This is a description area
        
        This is a description area. This is a description area. This is a description area. This is a description area.
        This is a description area.This is a description area.This is a description area.This is a description area.`,
        Comments: [{
            User:{
                nickname: 'Danney',
                profilePic:'',
            },
            content: 'This is a comment',
            reply:[],
            likes:3,
        }],
    }]
};

const PUSH_LIKE = 'PUSH_LIKE';
const CANCEL_LIKE = 'CANCEL_LIKE';
const PUSH_MARK = 'PUSH_MARK';
const CANCEL_MARK = 'CANCEL_MARK';

export const pushLikeDyn = id => {
    return {
        type: PUSH_LIKE,
        id,
    };
};

export const cancelLikeDyn = id => {
    return {
        type: CANCEL_LIKE,
        id,
    };
};

export const pushMarkDyn = id => {
    return {
        type: PUSH_MARK,
        id,
    };
};

export const cancelMarkDyn = id => {
    return {
        type: CANCEL_MARK,
        id,
    };
};

const callback_changeLikes = (state, action, likedStatus) => {
    let idx = 0;
    const change = likedStatus ? 1 : -1;
    const curPost = state.mainPosts.map((p, i) => {
        if(p.id === action.id) {
            idx = i;
            return p;
        }
    })[0];

    const newPost = {...curPost, likes:curPost.likes+change, liked:likedStatus};
    const mainPosts = [...state.mainPosts];
    mainPosts[idx] = newPost;

    return {
        ...state,
        mainPosts,
    };
};

const callback_changeMarked = (state, action, markedStatus) => {
    let idx = 0;
    const curPost = state.mainPosts.map((p, i) => {
        if(p.id === action.id) {
            idx = i;
            return p;
        }
    })[0];

    const newPost = {...curPost, marked:markedStatus};
    const mainPosts = [...state.mainPosts];
    mainPosts[idx] = newPost;

    return {
        ...state,
        mainPosts,
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case PUSH_LIKE:
            return callback_changeLikes(state, action, true);
        case CANCEL_LIKE:
            return callback_changeLikes(state, action, false);
        case PUSH_MARK:
            return callback_changeMarked(state, action, true);
        case CANCEL_MARK:
            return callback_changeMarked(state, action, false);
        default:
            return state;
    }
};

export default reducer;