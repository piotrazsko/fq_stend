import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../PopupBackground';
import { Grid } from '@material-ui/core';
import Button from '../Button';
import styles from './style.module.scss';

const Popup = ({ ...props }) => {
	const { onSubmit, onCancel, cancelButtonText, submitButtonText, showPopup, children } = props;
	const [showPopupState, setState] = React.useState(showPopup);
	React.useEffect(() => {
		setState(showPopup);
	}, [showPopup]);
	const [state, changeState] = React.useState({});
	const handleSubmit = () => {
		onSubmit(state);
		setState(false);
	};
	const handleCancell = () => {
		onCancel();
		setState(false);
	};
	return (
		<PopupBackground visible={showPopupState} onClick={handleCancell}>
			<Grid container className={styles.container}>
				<Grid item className={styles.dataContainer} xs={12}>
					{React.cloneElement(children, { ...props, ...state, changeState })}
				</Grid>
				<Grid item xs={12} className={styles.buttonContainer}>
					<Button onClick={handleCancell} className={styles.button} color="primary" variant="raised">
						{cancelButtonText}
					</Button>
					<Button color="primary" classes={{ root: styles.button }} onClick={handleSubmit} type="submit">
						{submitButtonText}
					</Button>
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
	children: PropTypes.element,
};
Popup.defaultProps = {
	cancelButtonText: 'Отменить',
	submitButtonText: 'Применить',
	onSubmit: () => {},
	onCancel: () => {},
	showPopup: true,
};

export default Popup;
