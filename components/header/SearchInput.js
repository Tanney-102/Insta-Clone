import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeBox } from '../../reducers/searchBox';
import InputForm from './InputForm';

const CancelBtn = styled.button`
    width:6%;
    font-size:0.85rem;
    color:#bfbfbf;
`;

const SearchInput = () => {
    const dispatch = useDispatch();

    const removeSearchBox = useCallback((e) => {
        e.stopPropagation();
        dispatch(removeBox);
    }, []);

    return (
        <>
            <InputForm removeCallback={removeSearchBox} customWidth='75%' />
            <CancelBtn className="btn-hover" onClick={removeSearchBox}>
                <i className="fas fa-window-close"></i>
            </CancelBtn>
        </>
    );

};

export default SearchInput;