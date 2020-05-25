import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';

import style from './style.module.scss';
const ConfirmPopup = ({
    type,
    onClick = () => {},
    onCancel = () => {},
    textConfirm = 'OK',
    textCancel = 'Cancel',
    show = false,
    message = '',
    showForce = false,
    cancellButtonProps = {},
    confirmButtonProps = {},
    maxWidth,
}) => {
    return (
        <PopupCore
            maxWidth={maxWidth}
            showForce={showForce}
            showPopup={show}
            colorConfirm={type === 'danger' ? 'secondary' : 'primary'}
            onClick={ev => {
                if (typeof onClick === 'function') {
                    onClick(ev);
                }
            }}
            textConfirm={textConfirm}
            textCancel={textCancel}
            type="button"
            onCancel={ev => {
                if (typeof onCancel === 'function') {
                    onCancel(ev);
                }
            }}
            cancellButtonProps={{ variant: 'outlined', ...cancellButtonProps }}
            confirmButtonProps={{ ...confirmButtonProps }}
        >
            <div className={style.confirm}>{message}</div>
        </PopupCore>
    );
};

ConfirmPopup.propTypes = {
    type: PropTypes.oneOf(['danger', undefined]),
    maxWidth: PropTypes.string,
    onClick: PropTypes.func,
    onCancel: PropTypes.func,
    show: PropTypes.bool,
    message: PropTypes.element,
    textConfirm: PropTypes.string,
    showForce: PropTypes.bool,
    textCancel: PropTypes.string,
    confirmButtonProps: PropTypes.object,
    cancellButtonProps: PropTypes.object,
};

export default ConfirmPopup;
