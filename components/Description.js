import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NickNameLink from './NickNameLink';

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
    width:100%;
    height:auto;
    overflow:hidden;
    height:auto;
    white-space:pre-wrap;
    overflow:hidden;
    

    font-size:0.9rem;
    line-height:20px;;
`;

const Text = styled.div`
    
`;

const Description = ({ userId, nickname, desc }) => {
    // const [text, setText] = useState('');
    // const [value, setValue] = useState('');
    // const inputRef = useRef();
    // const textRef = useRef();

    // const func = () => {
    //     setText(inputRef.current.value);
    // };

    // useEffect(() => { 
    //     console.log(window.getComputedStyle(textRef.current).width);
    // }, [text]);

    return (
        <DescContainer>
            <Name>
                <NickNameLink userId={userId}>{nickname}</NickNameLink>
            </Name>
            <Desc>
                {Array(nickname.length*2).fill().map(v => <span>&nbsp;</span>)}
                {desc}
            </Desc>
            {/* <textarea style={{width:'100%', height:'100px', border:'1px solid black'}} ref={inputRef} onChange={(e)=> {
                setValue(e.target.value);
            }} />
            <button onClick={func}>button</button> */}
        </DescContainer>
    );
};

DescContainer.propTypes = {
    userId: PropTypes.string,
    nickname: PropTypes.string,
    desc: PropTypes.string,
};

export default Description;