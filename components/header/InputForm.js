import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useInput from '../../hooks/useInput';

const Input = styled.input`
    margin:0 1%;
    background-color:#f8f8f8;
`;

const InputForm = ({ removeCallback, customWidth }) => {
    const [value, onChangeInput] = useInput('');
    const input_r = useRef(null);

    useEffect(() => {
        input_r.current.focus();
    }, []);

    return (
        <Input type="text" 
            value={value} 
            ref={input_r} 
            style={{width:customWidth || '95%'}}
            onChange={onChangeInput}
            onBlur={removeCallback} />
    );
};

InputForm.propTypes = {
    removeCallback: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
}

export default InputForm;