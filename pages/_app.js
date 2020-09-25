import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import GlobalStyles from '../style/GlobalStyles';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Instagram Clone</title>
            </Head>
            <GlobalStyles />
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);