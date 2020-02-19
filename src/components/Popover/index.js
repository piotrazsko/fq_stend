import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const positionPopover = el => {
	if (el) {
		const position = el.getBoundingClientRect();
		if (position.left < 0) {
			el.style.left -= position.left;
		}
		if (position.top < 0) {
			el.style.top -= position.top;
		}
		if (position.right < 0) {
			el.style.right -= position.right;
		}
		if (position.bottom < 0) {
			el.style.bottom -= position.bottom;
		}
	}
};

const Popover = ({
	children,
	anchorEl,
	visible = false,
	showForce = false,
	onClose = () => {},
}) => {
	const inputEl = useRef(null);
	useEffect(() => {
		positionPopover(inputEl.current, anchorEl);
	});
	const [show, switchShow] = useState(visible);
	useEffect(() => {
		switchShow(show);
	}, [visible]);
	return (
		(show || showForce) && (
			<div
				className={style.positionContainer}
				style={anchorEl && { top: anchorEl.offsetTop, left: anchorEl.offsetLeft }}
			>
				<div
					onClick={ev => {
						ev.nativeEvent.stopPropagation();
						ev.nativeEvent.preventDefault();
						onClose(ev);
						switchShow(!show);
					}}
					ref={inputEl}
					className={style.container}
				>
					{children}
				</div>
			</div>
		)
	);
};

Popover.propTypes = {
	children: PropTypes.any,
	showForce: PropTypes.bool,
	visible: PropTypes.bool,
	onClose: PropTypes.func,
};

export default Popover;
