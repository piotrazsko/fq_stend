import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PopupBackground from '../PopupBackground';
import Button from '../Button';
import styles from './style.module.scss';

const Popup = ({ ...props }) => {
    const {
        onSubmit,
        onCancel,
        cancelButtonText,
        submitButtonText,
        showPopup,
        children,
        className,
        disableSubmit = false,
        disableCancel = false,
        classes = {},
        confirmButtonProps = {},
        cancelButtonProps = {},
        showForce = false,
        style = {},
        childrenContainerClassName = '',
        showSubmit,
        showCancel,
    } = props;
    const [showPopupState, setState] = React.useState(showPopup);
    React.useEffect(() => {
        setState(showPopup);
    }, [showPopup]);
    const handleSubmit = () => {
        onSubmit();
        setState(false);
    };
    const handleCancell = () => {
        onCancel();
        setState(false);
    };
    return (
        <PopupBackground visible={showPopupState || showForce} onClick={handleCancell}>
            <Grid
                container
                direction="column"
                className={[styles.container, className, classes.root].join(' ')}
                style={{ ...style }}
            >
                <Grid
                    item
                    className={[
                        styles.dataContainer,
                        classes.dataContainer,
                        childrenContainerClassName,
                    ].join(' ')}
                    xs={12}
                >
                    {children}
                </Grid>
                <Grid
                    item
                    xs={12}
                    className={[styles.buttonContainer, classes.buttonContainer].join(' ')}
                >
                    {showCancel && (
                        <Button
                            onClick={handleCancell}
                            className={styles.button}
                            color="default"
                            disabled={disableCancel}
                            variant="text"
                            fontSize={'0.8rem'}
                            {...cancelButtonProps}
                        >
                            {cancelButtonText}
                        </Button>
                    )}
                    {showSubmit && (
                        <Button
                            color="primary"
                            onClick={handleSubmit}
                            disabled={disableSubmit}
                            type="submit"
                            fontSize={'0.8rem'}
                            {...confirmButtonProps}
                        >
                            {submitButtonText}
                        </Button>
                    )}
                </Grid>
            </Grid>
        </PopupBackground>
    );
};

Popup.propTypes = {
    showPopup: PropTypes.bool,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    cancelButtonText: PropTypes.string,
    submitButtonText: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element,
    classes: PropTypes.shape({
        root: PropTypes.string,
        dataContainer: PropTypes.string,
        buttonContainer: PropTypes.string,
    }),
    confirmButtonClasses: PropTypes.objectOf(PropTypes.object),
    cancelButtonClasses: PropTypes.objectOf(PropTypes.object),
    disableSubmit: PropTypes.bool,
    disableCancel: PropTypes.bool,
    showSubmit: PropTypes.bool,
    showCancel: PropTypes.bool,
    showForce: PropTypes.bool,
    style: PropTypes.object,
    confirmButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    childrenContainerClassName: PropTypes.string,
};
Popup.defaultProps = {
    cancelButtonText: 'Отменить',
    submitButtonText: 'Применить',
    onSubmit: () => {},
    onCancel: () => {},
    showPopup: true,
    disableSubmit: false,
    disableCancel: false,
    showSubmit: true,
    showCancel: true,
    showForce: false,
    confirmButtonProps: {},
    cancelButtonProps: {},
};

export default Popup;
