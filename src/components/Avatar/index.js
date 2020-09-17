import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classes from 'classnames';

const Avatar = ({ imageUrl, className, onClick, children, diametr }) => (
    <div
        onClick={onClick}
        style={{
            ...{ backgroundImage: imageUrl ? `url(${imageUrl})` : '' },
            ...{
                minHeight: diametr ? diametr : 'inherit',
                minWidth: diametr ? diametr : 'inherit',
            },
        }}
        className={classes(
            styles.icon,
            styles.iconDefault,
            imageUrl ? styles.image : '',
            className
        )}
    >
        {children}
    </div>
);

Avatar.propTypes = {
    imageUrl: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.element,
    diametr: PropTypes.number,
};

export default Avatar;
