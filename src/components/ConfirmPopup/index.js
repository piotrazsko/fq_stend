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
}) => {
	return (
		show && (
			<PopupCore
				showForce={showForce}
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
				cancellButtonProps={{ variant: 'outlined' }}
			>
				<div className={style.confirm}>{message}</div>
			</PopupCore>
		)
	);
};

ConfirmPopup.propTypes = {
	type: PropTypes.string,
	confirmAction: PropTypes.func,
	titleText: PropTypes.string,
	show: PropTypes.bool,
	message: PropTypes.element,
	hideConfirm: PropTypes.func,
	textConfirm: PropTypes.string,
	showForce: PropTypes.bool,
	textCancel: PropTypes.string,
};

export default ConfirmPopup;