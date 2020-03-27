import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../helpers/calendar.js';
import style from './style.module.scss';
const Cell = ({
	row,
	col,
	isSelected,
	isMobile,
	onClear = () => {},
	selectedTimeText = 'Рабочее время',
}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const onMenuClick = col => {
		onClear(col);
		handleClose();
	};
	switch (true) {
		case isSelected: {
			const child =
				typeof selectedTimeText == 'string'
					? isMobile
						? `${row}:00`
						: `${row}:00 Время выбрано`
					: selectedTimeText;
			return <div className={style.selectedCell}>{child}</div>;
		}
		case col === 0 && row > 0:
			return <div className={style.cellTime}>{row}:00</div>;
		case col > 0 && row === 0:
			return (
				<div className={style.cellDay}>
					<div>{isMobile ? WEEKDAYS_SHORT[col - 1] : WEEKDAYS_LONG[col - 1]}</div>
					<div>
						<IconButton size="small" onClick={handleClick}>
							<MoreVertIcon style={{ fontSize: 15 }} />
						</IconButton>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={() => onMenuClick(col)}>
								<div className={style.menuItem}>
									<DeleteForeverIcon style={{ fontSize: 18 }} /> Очистить
								</div>
							</MenuItem>
						</Menu>
					</div>
				</div>
			);

		default:
			return <div />;
	}
};

Cell.propTypes = {
	row: PropTypes.number,
	col: PropTypes.number,
	isSelected: PropTypes.bool,
	onClear: PropTypes.func,
	isMobile: PropTypes.bool,
	selectedTimeText: PropTypes.string,
};

export default Cell;
