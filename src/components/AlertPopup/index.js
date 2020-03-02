import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';

import style from './style.module.scss';
const AlertPopup = ({
	type,
	onClick = () => {},
	textConfirm = 'OK',
	show = false,
	message = '',
	showForce = false,
	confirmButtonProps = {},
}) => {
	return (
		<PopupCore
			showPopup={show}
			showForce={showForce}
			colorConfirm={type === 'danger' ? 'secondary' : 'primary'}
			onClick={ev => {
				if (typeof onClick === 'function') {
					onClick(ev);
				}
			}}
			textConfirm={textConfirm}
			textCancel=""
			type="button"
			confirmButtonProps={{ ...confirmButtonProps }}
			onClose={ev => {
				if (typeof onClick === 'function') {
					onClick(ev);
				}
			}}
		>
			<div className={style.alert}>{message}</div>
		</PopupCore>
	);
};

AlertPopup.propTypes = {
	confirmButtonProps: PropTypes.object,
	type: PropTypes.oneOf(['danger', undefined]),
	show: PropTypes.bool,
	onClick: PropTypes.func,
	message: PropTypes.element,
	textConfirm: PropTypes.string,
	showForce: PropTypes.bool,
};

export default AlertPopup;
