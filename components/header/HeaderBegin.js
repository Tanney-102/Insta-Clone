import React, { memo } from 'react';
import styled from 'styled-components';

const BeginContainer = styled.div`
    width:250px;
    height:70%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const HeaderBegin = () => {
    return (
        <BeginContainer>
            <img src="/img/insta-logo.png" width="110px" alt="insta" />
        </BeginContainer>
    );
};

export default memo(HeaderBegin);