const initialState = {
    mainPosts:[{
        id:1,
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
        description: 'dummy data',
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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default reducer;