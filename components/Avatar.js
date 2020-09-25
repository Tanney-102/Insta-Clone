import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
            :   <i className="fas fa-user-circle" style={{fontSize:diameter, color:'#bfbfbf'}}></i>}
        </>
    );
};

Avatar.propTypes = {
    diameter: PropTypes.string.isRequired,
};

export default Avatar;