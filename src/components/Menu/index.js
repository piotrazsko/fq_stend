import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import style from './style.module.scss';
const Menu = ({ menuItems = [], defaultShow, showForce = false, anchorEl = null }) => {
	return (
		<Popover anchorEl={anchorEl} defaultShow={defaultShow} showForce={showForce}>
			{menuItems.map((item, index) => (
				<div
					className={style.item}
					onClick={ev => {
						item.clickHandler(ev);
						ev.nativeEvent.stopPropagation();
						ev.nativeEvent.preventDefault();
					}}
					key={item.title + index}
				>
					{item.title}
				</div>
			))}
		</Popover>
	);
};

Menu.propTypes = {
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			onClick: PropTypes.func,
		})
	).isRequired,
	defaultShow: PropTypes.bool,
	showForce: PropTypes.bool,
	anchorEl: PropTypes.any,
	// : PropTypes.
};

export default Menu;
