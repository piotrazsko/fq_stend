import React from 'react';
import PropTypes from 'prop-types';

const Noindex = ({ children }) => {
    return (
        <React.Fragment>
            {`<!--googleoff: all--><!--noindex-->`}
            {children}
            {`<!--/noindex--><!--googleon: all-->`}
        </React.Fragment>
    );
};

Noindex.propTypes = {
    children: PropTypes.any,
};

export default Noindex;
