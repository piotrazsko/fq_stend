import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';

import style from './style.module.scss';
const AlertPopup = ({
    type,
    onClick = () => {},
    textConfirm = 'OK',
    show = false,
    message = '',
    showForce = false,
    confirmButtonProps = {},
    maxWidth,
    showIcon,
    classNames = { textContainer: '' },
}) => {
    return (
        <PopupCore
            maxWidth={maxWidth}
            showIcon={showIcon}
            showPopup={show}
            showForce={showForce}
            colorConfirm={type === 'danger' ? 'secondary' : 'primary'}
            onClick={ev => {
                if (typeof onClick === 'function') {
                    onClick(ev);
                }
            }}
            textConfirm={textConfirm}
            textCancel=""
            type="button"
            confirmButtonProps={{ ...confirmButtonProps }}
            onClose={ev => {
                if (typeof onClick === 'function') {
                    onClick(ev);
                }
            }}
        >
            <div className={[style.alert, classNames.textContainer || ''].join(' ')}>{message}</div>
        </PopupCore>
    );
};

AlertPopup.propTypes = {
    confirmButtonProps: PropTypes.object,
    type: PropTypes.oneOf(['danger', undefined]),
    show: PropTypes.bool,
    onClick: PropTypes.func,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    textConfirm: PropTypes.string,
    showForce: PropTypes.bool,
    maxWidth: PropTypes.string,
    showIcon: PropTypes.bool,
    classNames: PropTypes.shape({
        textContainer: PropTypes.string,
    }),
};

export default AlertPopup;
