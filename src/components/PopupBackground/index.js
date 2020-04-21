import React from 'react';
import PropTypes from 'prop-types';
import Background from './Background';

const PopupBackground = ({ onClick, visible = false, children }) => {
    return visible ? <Background onClick={onClick}>{children}</Background> : null;
};

PopupBackground.propTypes = {
    visible: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
        .isRequired,
};

export default PopupBackground;
