import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Layout = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:1;

    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.4);

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

const PopupLayout = ({ children, disp, closeCallback }) => {
    return (
        <Layout style={{display: disp?'flex':'none'}}>
            <Close className="btn-hover" onClick={closeCallback}>&times;</Close>
            {children}
        </Layout>
    );
};

PopupLayout.propTypes = {
    children: Proptypes.node.isRequired,
    disp: Proptypes.bool.isRequired,
    closeCallback: Proptypes.func.isRequired,
};

export default PopupLayout;