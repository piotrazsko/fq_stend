import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Button as ButtonMat, IconButton } from '@material-ui/core';

const Button = ({
    text = 'test',
    type = false,
    color = 'primary',
    children,
    fontSize,
    typeButton,
    variant = '',
    style,
    minWidth,
    ...rest
}) => {
    switch (type) {
        case 'icon':
            return (
                <IconButton
                    color={color}
                    type={typeButton}
                    variant={variant}
                    style={{ fontSize: fontSize, minWidth, ...style }}
                    aria-label="edit"
                    {...rest}
                >
                    {children || text}
                </IconButton>
            );
        case 'fab':
            return (
                <Fab
                    color={color}
                    variant={variant || 'extended'}
                    type={typeButton}
                    style={{ fontSize: fontSize, minWidth, ...style }}
                    aria-label="edit"
                    {...rest}
                >
                    {children || text}
                </Fab>
            );
        default:
            return (
                <ButtonMat
                    type={typeButton}
                    color={color}
                    variant={variant || 'contained'}
                    style={{ fontSize: fontSize, minWidth, ...style }}
                    aria-label="edit"
                    {...rest}
                >
                    {children || text}
                </ButtonMat>
            );
    }
};

Button.propTypes = {
    children: PropTypes.any,
    variant: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    classesExt: PropTypes.object,
    style: PropTypes.object,
    fontSize: PropTypes.number,
    typeButton: PropTypes.string,
    minWidth: PropTypes.number,
};

export default Button;
