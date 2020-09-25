import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import SearchInput from './SearchInput';
import { getBox, getHeaderBox } from '../../reducers/searchBox';
import theme from '../../style/theme';

const MidContainer = styled.div`
    width:250px;
    height:70%;    
    display:flex;
    justify-content:center;
    align-items:center;
`;
    
const SearchArea = styled.div`
    width:225px;
    height:75%;
    background-color:#f8f8f8;
    border:1px solid #cfcfcf;
    border-radius:3px;
    color:#bfbfbf;
    
    display:flex;
    justify-content:center;
    align-items:center;

    @media ${theme.mobileS} {
        display:none;
    }
`;
    
const SearchText = styled.div`
    font-size:0.85rem;
    font-weight:lighter;
    margin-left:5px;

    display:flex;
    justify-content: center;
    align-items: center;
`;

const SearchBtn = styled.button`
    display:none;
    margin-left:auto;
    font-size:1.15rem;

    @media ${theme.mobileS} {
        display: block;
    }
`;

const HeaderMid = () =>  {
    const { searchBoxOn } = useSelector(state => state.searchBox);
    const dispatch = useDispatch();

    const getSearchBox = (e) => {
        dispatch(getBox);
    };

    const openHeaderSizeBox = () => {
        dispatch(getHeaderBox);
    };

    return (
        <MidContainer>
            <SearchArea onClick={getSearchBox}>
                <i className="fas fa-search search-icon"></i>
                {searchBoxOn ? <SearchInput /> : <SearchText>검색</SearchText>}
            </SearchArea>
            <SearchBtn className="btn-hover" onClick={openHeaderSizeBox}>
                <i className="fas fa-search search-icon"></i>
            </SearchBtn>
        </MidContainer>
    );
};

export default HeaderMid;