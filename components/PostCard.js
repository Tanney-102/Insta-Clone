import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import theme from '../style/theme';
import Avatar from './Avatar';
import NickNameLink from './NickNameLink';
import PostContents from './PostContents';
import Description from './Description';

const Container = styled.div`
    width:100%;
    background-color:#fff;
    border:1px solid ${theme.borderColor};
`;

const PostHeader = styled.div`
    width:100%;
    height:60px;
    padding:0 15px;

    display:flex;
    align-items:center;
`;

const PostCard = ({ post }) => {
    return (
        <Container>
            <PostHeader>
                <Link href={'/profile?id=' + post.User.id}><a>
                    <Avatar diameter='37px' pic={post.User.profilePic}/>
                </a></Link>
                <div style={{marginLeft:'15px'}}><NickNameLink userId={post.User.id}>{post.User.nickname}</NickNameLink></div>
            </PostHeader>
            <PostContents post={post} />
            <Description userId={post.User.id} nickname={post.User.nickname} desc={post.description} />
        </Container>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        User: PropTypes.shape({
            nickname: PropTypes.string,
            profilePic: PropTypes.string,
        }),
        contents:PropTypes.arrayOf(PropTypes.string),
        likes: PropTypes.number,
        description: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard;