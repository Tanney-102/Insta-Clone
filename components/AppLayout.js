import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeaderContainer from './header/HeaderContainer';
import BodyContainer from './BodyContainer';
import Header from './header/Header';


const AppLayout = ({ children }) => {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <BodyContainer>{children}</BodyContainer>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;