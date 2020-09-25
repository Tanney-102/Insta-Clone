import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import HeaderSizeSearchBox from './HeaderSizeSearchBox';
import HeaderBegin from './HeaderBegin';
import HeaderMid from './HeaderMid';
import HeaderEnd from './HeaderEnd';
import theme from '../../style/theme';
import useWindowSize from '../../hooks/useWindowSize';

const Container = styled.div`
    width:100%;
    max-width:950px;
    height:100%;
    margin:0 auto;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;


const Header = () => {
    const { headerSizeSearchBox } = useSelector(state => state.searchBox);
    const windowSize = useWindowSize();

    return (
        <Container>
            {headerSizeSearchBox && windowSize[0] < 510
            ?   <HeaderSizeSearchBox />
            :   <>
                    <HeaderBegin />
                    <HeaderMid />
                    <HeaderEnd />
                </>}
        </Container>
    );
}

export default memo(Header);