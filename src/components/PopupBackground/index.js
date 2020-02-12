import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const PopupBackground = ({ onClick, visible = false, children }) => {
	const handleClick = event => {
		onClick(event);
	};

	return visible ? (
		<div
			className={style.popup_background}
			role="presentation"
			onClick={ev => {
				handleClick(ev);
				ev.stopPropagation();
			}}
			onKeyDown={() => {}}
		>
			<div className={style.popup_background_inbox} onClick={ev => ev.stopPropagation()}>
				{children}
			</div>
		</div>
	) : null;
};

PopupBackground.propTypes = {
	visible: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
};

export default PopupBackground;
