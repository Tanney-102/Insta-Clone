import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NickNameLink from './NickNameLink';
import theme from '../style/theme';

const DescContainer = styled.div`
    padding:0 15px;
    position:relative;
`;

const Name = styled.div`
    position:absolute;
    top:0;
    left:15px;

    font-size:0.9rem;
    line-height:20px;
`;

const Desc = styled.div`
    width:auto;
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

const Description = ({ userId, nickname, desc }) => {
    const [text, setText] = useState(desc);
    const [viewBtn, setViewBtn] = useState(false);
    const [shortViewBtn, setShortViewBtn] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef();
    const descRef = useRef();
    const textRef = useRef();

    const viewMore = useCallback(() => {
        descRef.current.style.height = 'auto';
        setText(desc);
        setViewBtn(false);
        setShortViewBtn(true);
    }, []);

    const viewOneLine = useCallback(() => {
        descRef.current.style.height = '20px';
        setText(text.substring(0, 12) + '...');
        setViewBtn(true);
        setShortViewBtn(false);
    }, []);

    useEffect(() => { 
        if(parseInt(window.getComputedStyle(textRef.current).height) > 20) {
            descRef.current.style.height = '20px';
            setText(text.substring(0, 12)+'...');
            setViewBtn(true);
        }
    }, []);

    return (
        <DescContainer>
            <Name>
                <NickNameLink userId={userId}>{nickname}</NickNameLink>
            </Name>
            <Desc ref={descRef}>
                <Text ref={textRef}>
                    {Array(nickname.length*2).fill().map(v => <span>&nbsp;</span>)}
                    {text}
                    {viewBtn && <ViewBtn className="btn-hover" onClick={viewMore}>더 보기</ViewBtn>}
                    {shortViewBtn && <ViewBtn className="btn-hover" onClick={viewOneLine}>간략히</ViewBtn>}
                </Text>
            </Desc>
        </DescContainer>
    );
};

DescContainer.propTypes = {
    userId: PropTypes.string,
    nickname: PropTypes.string,
    desc: PropTypes.string,
};

export default Description;