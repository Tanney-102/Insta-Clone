import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faWindowClose} />
            </CancelBtn>
        </>
    );

};

export default SearchInput;