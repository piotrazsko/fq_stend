import React from 'react';
import PropTypes from 'prop-types';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../helpers/calendar.js';
import style from './style.module.scss';
const Cell = ({ row, col, isSelected }) => {
	switch (true) {
		case isSelected:
			return <div className={style.selectedCell}>{row}:00 Время выбрано</div>;
		case col === 0 && row > 0:
			return <div className={style.cellTime}>{row}:00</div>;
		case col > 0 && row === 0:
			return <div className={style.cellDay}>{WEEKDAYS_LONG[col - 1]}</div>;

		default:
			return <div></div>;
	}
};

Cell.propTypes = {
	row: PropTypes.number,
	col: PropTypes.number,
};

export default Cell;
