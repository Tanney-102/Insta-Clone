import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NickNameLink from './NickNameLink';
import theme from '../style/theme';
import useWindowSize from '../hooks/useWindowSize';

const Name = styled.div`
    position:absolute;
    top:0;
    left:0;

    font-size:0.9rem;
    line-height:20px;

    &:hover {
        text-decoration:underline;
    }
`;

const TextContainer = styled.div`
    width:100%;
    height:auto;
    overflow:hidden;
    
    display:flex;
`;

const Text = styled.div`
    height:auto;
    white-space:pre-wrap;
    font-size:0.9rem;
    line-height:20px;
`;

const ViewBtn = styled.button`
    color:${theme.fontGrayLight};
    font-size:0.7rem;
    font-weight:bold;
`;

const CommentForm = ({ userId, nickname, propText, lineCut }) => {
    const [text, setText] = useState(propText);
    const [viewBtn, setViewBtn] = useState(false);
    const [shortViewBtn, setShortViewBtn] = useState(false);
    const [smallWidth, setSmallWidth] = useState(false);
    const containerRef = useRef();
    const textRef = useRef();
    let smallWidth_flag = 0;
    
    const cutLine = useCallback(() => {
        const firstLine = propText.split('\n')[0]
        const len = window.innerWidth < 350 ? 0 : Math.min(firstLine.length/2, 20);
        const expose = firstLine.substring(0, len);

        containerRef.current.style.height = `${20*lineCut}px`;
        setText(expose+'...');
        setViewBtn(true);
        setShortViewBtn(false);
    }, []);

    const viewMore = useCallback(() => {
        containerRef.current.style.height = 'auto';
        setText(propText);
        setViewBtn(false);
        setShortViewBtn(true);
    }, []);

    useEffect(() => {
        if(parseInt(window.getComputedStyle(textRef.current).height) > 20*lineCut) {
            cutLine();
        }

        window.addEventListener('resize', () => {
            if(!smallWidth_flag && window.innerWidth < 350) {
                cutLine();
                smallWidth_flag = 1;
            } else if(smallWidth_flag && window.innerWidth >= 350) {
                cutLine();
                smallWidth_flag = 0;
            }
        });
    }, []);

    return (
        <div style={{position:'relative'}}>
            <Name>
                <NickNameLink userId={userId}>{nickname}</NickNameLink>
            </Name>
            <TextContainer ref={containerRef}>
                <Text ref={textRef}>
                    {Array(nickname.length*2).fill().map((v, i) => <span key={i}>&nbsp;</span>)}
                    {text}
                    {viewBtn && <ViewBtn className="btn-hover" onClick={viewMore}>더 보기</ViewBtn>}
                    {shortViewBtn && <ViewBtn className="btn-hover" onClick={cutLine}>간략히</ViewBtn>}
                </Text>
            </TextContainer>
        </div>
    );
};

CommentForm.propTypes = {
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    propText: PropTypes.string.isRequired,
    lineCur: PropTypes.number.isRequired,
};

export default CommentForm;