import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart, faComment, faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart, faCircle, faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons';

import theme from '../style/theme';
import { pushLikeDyn, cancelLikeDyn, pushMarkDyn, cancelMarkDyn } from '../reducers/post';

const BarIcons = styled.div`
    height:50px;
    font-size:1.6rem;
    padding:0 15px;

    display:flex;
    justify-content:center;
    align-items:center;
`;

const BtnContainer = styled.div`
    width:20%;
    height:100%;

    display:flex;
    align-items:center;
`;

const PageDotContainer = styled.div`
    width:60%;
    height:100%;
    font-size:7px;

    display:flex;
    justify-content:center;
    align-items:center;
`;

// icon={faCircle} 속성 추가
const GreyDot = styled(FontAwesomeIcon)`
    margin:0 2px;
    color:${theme.borderColorDark};
`;

const BlueDot = styled(FontAwesomeIcon)`
    margin:0 2px;
    color:${theme.btnColor};
`;

const LikeStatus = styled.div`
    padding:0 15px 10px;
    font-size:0.9rem;

`;

const StatusBar = ({ post, curSlide, contentLen }) => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.user);

    const onClickLikeBtn = useCallback(() => {
        if(post.liked) {
            dispatch(cancelLikeDyn(post.id));
        } else {
            dispatch(pushLikeDyn(post.id));
        }
    }, [post.liked]);

    const onClickBookmarkBtn = useCallback(() => {
        if(post.marked) {
            dispatch(cancelMarkDyn(post.id));
        } else {
            dispatch(pushMarkDyn(post.id));
        }
    }, [post.marked]);

    return(
        <>
            <BarIcons>
                {isLoggedIn && <BtnContainer>
                    {post.liked 
                    ? <FontAwesomeIcon icon={filledHeart} style={{color:theme.heartRed}} className="btn-hover" onClick={onClickLikeBtn} />
                    : <FontAwesomeIcon icon={heart} className="btn-hover" onClick={onClickLikeBtn} />}
                    <Link href="/postpage">
                        <a>
                            <FontAwesomeIcon icon={faComment} className="btn-hover" style={{marginLeft:'20px'}} />
                        </a>
                    </Link>
                </BtnContainer>}
                <PageDotContainer>
                    {Array(contentLen).fill().map((v,i) => {
                        if(curSlide === i) {
                            return <BlueDot key={i} icon={faCircle} />
                        } else {
                            return <GreyDot key={i} icon={faCircle} />
                        }
                    })}
                </PageDotContainer>
                {isLoggedIn && <BtnContainer style={{justifyContent:'flex-end'}}>
                    {post.marked
                    ?   <FontAwesomeIcon icon={filledBookmark} className="btn-hover" onClick={onClickBookmarkBtn} />
                    :   <FontAwesomeIcon icon={bookmark} className="btn-hover" onClick={onClickBookmarkBtn} />}
                </BtnContainer>}
            </BarIcons>
            {post.likes != 0 && <LikeStatus><span style={{fontWeight:'bold'}}>{post.likes}명</span>이 좋아합니다.</LikeStatus>}
        </>
    );
};

StatusBar.propTypes = {
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
    curSlide: PropTypes.number,
    contentLen: PropTypes.number,
};

export default StatusBar;