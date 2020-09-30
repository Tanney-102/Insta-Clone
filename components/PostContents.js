import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import StatusBar from './StatusBar';

const ContentsContainer = styled.div`
    width:100%;
    padding-top:100%;
    overflow:hidden;
    position:relative;
`;

const Slide = styled.div`
    width:100%;
    height:100%;
    overflow: visible;
    display:flex;
    position:absolute;
    top:0;
    left:0;

    transition: all 0.5s ease-in-out;
`;

const SlideBtn = styled.button`
    font-size:1.6rem;
    color:rgba(0, 0, 0, 0.07);
`;  

const LeftSlideBtn = styled(SlideBtn)`
    position:absolute;
    top:50%;
    left:5px;
    z-index:1;
`;

const RightSlideBtn = styled(SlideBtn)`
    position:absolute;
    top:50%;
    right:5px;
`;

const Img = styled.img`
    width:100%;
    heigth:auto;
`;

const PostContents = ({ post }) => {
    const [curSlide, setCurSlide] = useState(0);
    const [leftBtn, setLeftBtn] = useState(false);
    const [rightBtn, setRigthBtn] = useState(false);
    const slideRef = useRef(null);
    
    useEffect(() => {
        if(curSlide>0) {
            setLeftBtn(true);
        } else {
            setLeftBtn(false);
        }

        if(curSlide<post.contents.length-1) {
            setRigthBtn(true);
        } else {
            setRigthBtn(false);
        }

        slideRef.current.style.transform = `translateX(-${curSlide}00%)`;

    }, [curSlide]);

    const onClickRightBtn = useCallback(() => {
        setCurSlide(curSlide+1);
    }, [curSlide]);

    const onClickLeftBtn = useCallback(() => {
        setCurSlide(curSlide-1);
    }, [curSlide]);

    return (
        <>
            <ContentsContainer>
                {leftBtn && <LeftSlideBtn className="btn-hover" onClick={onClickLeftBtn}>
                                <FontAwesomeIcon icon={faChevronCircleLeft} />
                            </LeftSlideBtn>}
                <Slide ref={slideRef}>
                    {post.contents.map((url, i) => <img key={url+i} src={url} style={{width:'100%', height:'auto', flexShrink:'0', flexGrow:'0'}} />)}
                </Slide>
                {rightBtn && <RightSlideBtn className="btn-hover" onClick={onClickRightBtn}>
                                <FontAwesomeIcon icon={faChevronCircleRight} />
                            </RightSlideBtn>}
            </ContentsContainer>
            <StatusBar post={post} curSlide={curSlide} contentLen={post.contents.length} />
        </>
    );
};

PostContents.propTypes = {
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

export default PostContents;