import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NickName = styled(Link)`
    font-size:0.9rem;
    font-weight:600;
`;

const NickNameLink = ({ children, url }) => {
    return <NickName href={url}><a>{children}</a></NickName>
};

NickNameLink.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NickNameLink;