import React from 'react';
import PropTypes from 'prop-types';
import PopupCore from '../PopupCore';

import style from './style.module.scss';
const AlertPopup = ({
	type,
	onClick = () => {},
	textConfirm = 'OK',
	show = false,
	message = '',
	showForce = false,
}) => {
	return (
		show && (
			<PopupCore
				showForce={showForce}
				colorConfirm={type === 'danger' ? 'secondary' : 'primary'}
				onClick={() => {
					if (typeof onClick === 'function') {
						onClick();
					}
				}}
				textConfirm={textConfirm}
				textCancel=""
				type="button"
				onClose={() => {
					if (typeof onClick === 'function') {
						onClick();
					}
				}}
			>
				<div className={style.alert}>{message}</div>
			</PopupCore>
		)
	);
};

AlertPopup.propTypes = {
	type: PropTypes.string,
	confirmAction: PropTypes.func,
	titleText: PropTypes.string,
	show: PropTypes.bool,
	message: PropTypes.element,
	hideAlert: PropTypes.func,
	textConfirm: PropTypes.string,
	showForce: PropTypes.bool,
};

export default AlertPopup;
