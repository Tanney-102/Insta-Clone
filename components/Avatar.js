import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ImageContainer = styled.div`
    overflow:hidden;
`;

const Avatar = ({ diameter, pic }) => {
    const radius = `${parseInt(diameter)/2}px`

    return (
        <>
            {pic != ''
            ?   <ImageContainer style={{width:diameter, height:diameter, borderRadius:radius}}>
                    <img src={pic} width={diameter} />
                </ImageContainer>
            :   <FontAwesomeIcon icon={faUserCircle} style={{fontSize:diameter, color:'#bfbfbf'}} />}
        </>
    );
};

Avatar.propTypes = {
    diameter: PropTypes.string.isRequired,
};

export default Avatar;