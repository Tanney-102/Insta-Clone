import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import Avatar from './Avatar';
import NickNameLink from './NickNameLink';
import theme from '../style/theme';

const UserName = styled.div`
    font-size:0.8rem;
    color:${theme.fontGray};
`;

const UserInfo = () => {
    const { id, username, nickname, profilePic } = useSelector(state => state.user);

    return(
        <div style={{display:'flex', alignItems:'center'}}>
            <Link href="/profile"><a><Avatar diameter='60px' pic={profilePic} /></a></Link>
            <div style={{marginLeft:'20px'}}>
                <NickNameLink userId={id}>{nickname}</NickNameLink>
                <UserName>{username}</UserName>
            </div>
        </div>
    );
};

export default UserInfo;