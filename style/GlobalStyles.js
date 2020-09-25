import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;
        font-family:'나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    }

    body, main {
        margin:0;
        padding:0;
    }
    
    a {
        color: inherit; 
        font-size:inherit;
        font-weight:inherit;
        text-decoration: none; 
        line-height: 1;
    }
    
    button {
        background-color:rgba(0, 0, 0, 0);
        border:0;
    }
    
    button, input:focus { outline:none; }
    
    .btn-hover:hover {
        cursor:pointer;
    }

    input {
        border:0;
    }

    input::placeholder { 
        color: ${theme.fontGray}; 
    }
`;

export default GlobalStyles;