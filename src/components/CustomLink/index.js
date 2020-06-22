import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './style.module.scss';

const CustomLink = ({ children, to, className, ariaLabel, hasUnderline }) => {
    const linkClasses = classNames(className, styles.link, {
        [styles.underline]: hasUnderline,
    });

    const isRouterLink = typeof to === 'string';

    const props = {
        [isRouterLink ? 'to' : 'onClick']: to,
        className: linkClasses,
        'aria-label': ariaLabel,
    };

    return isRouterLink ? <NavLink {...props}>{children}</NavLink> : <a {...props}>{children}</a>;
};

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    ariaLabel: PropTypes.string,
    classes: PropTypes.shape({
        link: PropTypes.string.isRequired,
        underline: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string,
    hasUnderline: PropTypes.bool,
};

CustomLink.defaultProps = {
    ariaLabel: 'ссылка',
    hasUnderline: false,
    className: null,
};

export default CustomLink;
