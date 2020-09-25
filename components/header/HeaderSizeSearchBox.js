import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import InputForm from './InputForm';
import { removeHeaderBox } from '../../reducers/searchBox';

const Container = styled.div`
    width:90%;
    height:58%;
    background-color:#f8f8f8;
    border:1px solid #cfcfcf;
    border-radius:3px;
    
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Close = styled.span`
    position:fixed;
    top:10px;
    right:20px;

    color:#dfdfdf;
    font-size:40px;
`;

const HeaderSizeSearchBox = () => {
    const dispatch = useDispatch();

    const closeBox = () => {
        dispatch(removeHeaderBox);
    };

    return (
        <Container>
            <InputForm removeCallback={closeBox} customWidth='95%' />
            <Close className="btn-hover" onClick={closeBox}>&times;</Close>
        </Container>
    );
};

export default HeaderSizeSearchBox;