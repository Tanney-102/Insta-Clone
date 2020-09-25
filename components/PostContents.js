import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:auto;
    overflow:hidden;
    position:relative;
`;

const Slide = styled.div`
    width:100%;
    height:auto;
    overflow: visible;
    display:flex;

    transition: all 0.5s ease-in-out;
`;

const SlideBtn = styled.button`
    font-size:1.1rem;
    font-weight:900;
    width:26px;
    height:26px;
    border-radius:13px;
    background-color:rgba(130, 130, 130, 0.2);
    color:rgba(255, 255, 255, 0.7);

    display:flex;
    display:-webkit-flex;
    justify-content:center;
    align-items:center;
`;  

const LeftSlideBtn = styled(SlideBtn)`
    position:absolute;
    top:50%;
    left:5px;
    z-index:1;

    padding-right:10px;
    padding-bottom:2px;
`;

const RightSlideBtn = styled(SlideBtn)`
    position:absolute;
    top:50%;
    right:5px;

    padding-left:10px;
    padding-bottom:2px;
`;

const PostContents = ({ contents }) => {
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

        if(curSlide<contents.length-1) {
            setRigthBtn(true);
        } else {
            setRigthBtn(false);
        }
        console.log(curSlide);

        slideRef.current.style.transform = `translateX(-${curSlide}00%)`;

    }, [curSlide]);

    const onClickRightBtn = useCallback(() => {
        setCurSlide(curSlide+1);
    }, [curSlide]);

    const onClickLeftBtn = useCallback(() => {
        setCurSlide(curSlide-1);
    }, [curSlide]);

    console.log(leftBtn);
    return (
        <Container>
            {leftBtn && <LeftSlideBtn className="btn-hover" onClick={onClickLeftBtn}>{'<'}</LeftSlideBtn>}
            <Slide ref={slideRef}>
                {contents.map((url, i) => <img key={url+i} src={url} style={{width:'100%', flexShrink:'0'}} />)}
            </Slide>
            {rightBtn && <RightSlideBtn className="btn-hover" onClick={onClickRightBtn}>{'>'}</RightSlideBtn>}
        </Container>
    );
};

PostContents.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.string),
};

export default PostContents;