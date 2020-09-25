import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../style/theme';
import useWindowSize from '../hooks/useWindowSize';

const Container = styled.div`
    margin-top: 56px;
    background-color: ${theme.basicBackColor};
    overflow-y: auto;
`;

const BodyContainer = ({ children }) => {
    const size = useWindowSize();
    const [viewHeight, setViewHeight] = useState(0);

    useEffect(() => {
        setViewHeight(window.innerHeight);
    }, []);

    return <Container style={{minHeight: `${size[1]-56}px`}}>{children}</Container>
};

BodyContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BodyContainer;