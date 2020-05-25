import React from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../../PopupBackground';
import Button from '../../Button';
import style from '../style.module.scss';

const PopupCore = ({
    showIcon = true,
    showPopup = true,
    colorConfirm = 'primary',
    colorCancel = 'primary',
    color,
    children = 'test',
    type,
    textConfirm = 'Ok',
    textCancel = 'Cancel',
    onClick,
    onCancel = () => {},
    typeConfirm = 'button',
    typeCancel = 'button',
    cancellButtonProps = {},
    confirmButtonProps = {},
    showForce = false,
    maxWidth = false,
    classes = {
        buttonsContainer: '',
        container: '',
        childrenContainer: '',
    },
}) => {
    const [popup, switchPopup] = React.useState(showPopup);

    React.useEffect(() => {
        switchPopup(showPopup);
    }, [showPopup]);

    const closeHandler = ev => {
        switchPopup(!popup);
        onCancel(ev);
    };
    const confirmHandler = ev => {
        switchPopup(!popup);
        onClick(ev);
    };
    return (
        (popup || showForce) && (
            <PopupBackground onClick={closeHandler} visible>
                <div
                    style={maxWidth ? { maxWidth } : {}}
                    className={[style.container, classes.container].join(' ')}
                >
                    {showIcon && <div className={style.icon} />}
                    <div className={classes.childrenContainer}>{children}</div>
                    <div className={classes.buttonsContainer}>
                        {Boolean(textCancel.length) && (
                            <Button
                                className={style.button}
                                color={colorCancel || color}
                                onClick={closeHandler}
                                type={typeCancel || type}
                                text={textCancel}
                                {...cancellButtonProps}
                            />
                        )}
                        {Boolean(textConfirm.length) && (
                            <Button
                                className={style.button}
                                color={colorConfirm || color}
                                onClick={confirmHandler}
                                type={typeConfirm || type}
                                text={textConfirm}
                                {...confirmButtonProps}
                            />
                        )}
                    </div>
                </div>
            </PopupBackground>
        )
    );
};

PopupCore.propTypes = {
    children: PropTypes.any,
    textConfirm: PropTypes.string,
    textCancel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    typeConfirm: PropTypes.string,
    typeCancel: PropTypes.string,
    colorConfirm: PropTypes.string,
    colorCancel: PropTypes.string,
    type: PropTypes.string,
    showForce: PropTypes.bool,
    showIcon: PropTypes.bool,
    classes: PropTypes.shape({
        buttonsContainer: PropTypes.string,
        container: PropTypes.string,
        childrenContainer: PropTypes.string,
    }),
};
export default PopupCore;
