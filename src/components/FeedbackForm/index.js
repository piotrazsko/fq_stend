import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';
import InputRating from '../InputRating';
import { TextField } from '@material-ui/core';
import styles from './style.module.scss';
const FeedbackForm = ({
    type,
    onClick = () => {},
    onCancel = () => {},
    textConfirm = 'Отправить',
    textCancel = 'Позже',
    show = false,
    showForce = false,
    popupCoreProps = {},
    ratingProps = {},
    inputProps = {},
}) => {
    const [message, setMessage] = React.useState('');
    const [rating, setRating] = React.useState(5);
    return (
        <PopupCore
            showIcon={false}
            showForce={showForce}
            showPopup={show}
            colorConfirm={type === 'danger' ? 'secondary' : 'primary'}
            onClick={() => {
                if (typeof onClick === 'function') {
                    onClick({ message, rating });
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
            cancellButtonProps={{ variant: 'outlined' }}
            {...popupCoreProps}
        >
            <div className={styles.circle}>
                <div className={styles.title}>Все ли вам понравилось?</div>
                <div className={styles.star} />
            </div>
            <div className={styles.content}>
                <div className={styles.ratingContainer}>
                    <InputRating
                        rating={rating}
                        onClick={ev => {
                            setRating(ev);
                        }}
                        {...ratingProps}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <TextField
                        margin="none"
                        inputProps={{ className: styles.input }}
                        fullWidth
                        placeholder="Добавьте текст отзыва"
                        multiline
                        rowsMax={6}
                        value={message}
                        onChange={ev => {
                            setMessage(ev.target.value);
                        }}
                        {...inputProps}
                    />
                </div>
            </div>
        </PopupCore>
    );
};

FeedbackForm.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    onCancel: PropTypes.func,
    textConfirm: PropTypes.string,
    textCancel: PropTypes.string,
    show: PropTypes.bool,
    showForce: PropTypes.bool,
    popupCoreProps: PropTypes.object,
    ratingProps: PropTypes.object,
    inputProps: PropTypes.object,
};

export default FeedbackForm;
