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
    showIcon,
    classNames = { textContainer: '' },
}) => {
    return (
        <PopupCore
            maxWidth={maxWidth}
            showIcon={showIcon}
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
            <div className={[style.confirm, classNames.textContainer || ''].join(' ')}>
                {message}
            </div>
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
    showIcon: PropTypes.bool,
    classNames: PropTypes.shape({
        textContainer: PropTypes.string,
    }),
};

export default ConfirmPopup;
