import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NickName = styled.div`
    font-size:0.9rem;
    font-weight:700;
`;

const NickNameLink = ({ children, userId }) => {
    return <NickName><Link href={'/profile?id=' + userId}><a>{children}</a></Link></NickName>
};

NickNameLink.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NickNameLink;