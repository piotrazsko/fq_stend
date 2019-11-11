import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const CLASS_BACKGROUND = 'popup_background';
const PopupBackground = ({ onClick, visible = false, children }) => {
	const handleClick = event => {
		onClick();
	};

	return visible ? (
		<div
			className={style[CLASS_BACKGROUND]}
			role="presentation"
			onClick={handleClick}
			onKeyDown={() => {}}
		>
			<div className={style['popup_background_inbox']} onClick={ev => ev.stopPropagation()}>
				{children}
			</div>
		</div>
	) : null;
};
PopupBackground.propTypes = {
	visible: PropTypes.bool,
	onClick: PropTypes.func,
};

export default PopupBackground;
