import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../PopupBackground';
import { Grid } from '@material-ui/core';
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
		classes = {},
		confirmButtonClasses = {},
		cancelButtonClasses = {},
	} = props;
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
			<Grid container className={[styles.container, className, classes.root].join(' ')}>
				<Grid item className={[styles.dataContainer, classes.dataContainer].join(' ')} xs={12}>
					{React.cloneElement(children, { ...props, ...state, changeState })}
				</Grid>
				<Grid item xs={12} className={[styles.buttonContainer, classes.buttonContainer].join(' ')}>
					<Button
						onClick={handleCancell}
						classes={{ ...cancelButtonClasses }}
						className={styles.button}
						color="primary"
						variant="raised"
					>
						{cancelButtonText}
					</Button>
					<Button
						color="primary"
						classes={{ root: styles.button, ...confirmButtonClasses }}
						onClick={handleSubmit}
						type="submit"
					>
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
	className: PropTypes.string,
	children: PropTypes.element,
	classes: PropTypes.shape({
		root: PropTypes.string,
		dataContainer: PropTypes.string,
		buttonContainer: PropTypes.string,
	}),
	confirmButtonClasses: PropTypes.objectOf(PropTypes.object),
	cancelButtonClasses: PropTypes.objectOf(PropTypes.object),
};
Popup.defaultProps = {
	cancelButtonText: 'Отменить',
	submitButtonText: 'Применить',
	onSubmit: () => {},
	onCancel: () => {},
	showPopup: true,
};

export default Popup;
