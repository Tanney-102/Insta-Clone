import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import UserInfo from '../components/UserInfo';
import theme from '../style/theme.js';
import useWindowSize from '../hooks/useWindowSize';

const MainContainer = styled.div`
    width:100%;
    height:100%;
    max-width:950px;
    margin:30px auto 0;
    padding-top:30px
    padding-left:5px;

    display:flex;

    @media ${theme.tabletS} {
        padding:0;
        justify-content:center;
    }
`;

const PostingArea = styled.div`
    width:100%;
    max-width:617.5px;
    height:100%;
    overflow-Y:auto;
    overflow-X:hidden;

    -ms-overflow-style: none;
    &::-webkit-scrollbar { 
    display: none;
  }
`;

const UserProfile = styled.div`
    width:294.5px;
    position:fixed;
    top:86px;
    padding:15px 0;

    @media ${theme.tabletS} {
        display:none;
    }
`;

const DevLink = styled.a`
    color: ${theme.fontSkyBlue};
    font-size:0.7rem;
    margin-top:50px;
`;

const Home = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const size = useWindowSize();

    return (
        <>
            <Head>
                <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
            </Head>
            <AppLayout>
                <MainContainer>
                    <PostingArea>
                        {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
                    </PostingArea>
                    <UserProfile style={{right:(size[0]-950)/2 +'px'}}>
                        <div style={{marginBottom: '15px'}}>
                            {isLoggedIn
                                ?   <UserInfo />
                                :   <div style={{fontSize:'0.9rem',}}>
                                        아직 회원이 아니신가요? 
                                        <Link href="/signup">
                                            <a  style={{color:theme.fontSkyBlue, marginLeft:'7px', fonrSize:'0.8rem'}}>회원가입</a>
                                        </Link>
                                    </div>}
                        </div>
                        <DevLink href="#" target="__blank" rel="noreferrer noopener">Made By Tanney</DevLink>
                    </UserProfile>
                </MainContainer>
            </AppLayout>
        </>
    );
};

export default Home;