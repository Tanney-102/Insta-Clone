import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width:100%;
    height:56px;
    padding: 0 20px;
    border-bottom:1px solid #dfdfdf;
    background-color:#fff;

    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;

    display:flex;
    align-items:center;
`;

const HeaderContainer = ({ children }) => {
    return <Container>{children}</Container>
};

HeaderContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderContainer;