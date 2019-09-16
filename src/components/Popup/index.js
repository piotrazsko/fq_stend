import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../PopupBackground';
import { Grid } from '@material-ui/core';
import Button from '../Button';
import styles from './style.module.scss';

class Popup extends Component {
	static propTypes = {
		onSubmit: PropTypes.func,
		onCancel: PropTypes.func,
		cancelButtonText: PropTypes.string,
		submitButtonText: PropTypes.string,
		children: PropTypes.element,
	};
	static defaultProps = {
		cancelButtonText: 'Отменить',
		submitButtonText: 'Применить',
	};

	state = { showPopup: true };

	handleSubmit = () => {
		const { onSubmit = () => {} } = this.props;
		onSubmit(this.state);
		this.setState({ showPopup: false });
	};
	handleCancell = () => {
		const { onCancel = () => {} } = this.props;
		onCancel();
		this.setState({ showPopup: false });
	};
	render() {
		const {
			children,
			cancelButtonText = 'Отменить',
			submitButtonText = 'Применить',
			...props
		} = this.props;
		console.log(children);
		const { showPopup, ...state } = this.state;
		return showPopup ? (
			<React.Fragment>
				<PopupBackground visible onClick={this.handleCancell}>
					<Grid container className={styles.container}>
						<Grid item className={styles.dataContainer} xs={12}>
							{React.cloneElement(children, { ...props, ...state })}
						</Grid>
						<Grid item xs={12} className={styles.buttonContainer}>
							<Button
								onClick={this.handleCancell}
								className={styles.buttonDefolt}
								color="primary"
								variant="raised"
							>
								{cancelButtonText}
							</Button>
							<Button
								color="primary"
								classes={{ root: styles.buttonSubmit }}
								onClick={this.handleSubmit}
								type="submit"
							>
								{submitButtonText}
							</Button>
						</Grid>
					</Grid>
				</PopupBackground>
			</React.Fragment>
		) : null;
	}
}

export default Popup;
