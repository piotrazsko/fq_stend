import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { WEEKDAYS_LONG, MONTHS, WEEKDAYS_SHORT } from '../../utils/config';
import style from './style.module.scss';
const yeaterday = new Date().setDate(new Date().getDate() - 1);
const Month = ({ curentDay, setCurentDay, setShowTime, disableBeforeCurentTime }) => {
	const disabledDays = disableBeforeCurentTime
		? date => {
				return date < yeaterday;
		  }
		: [];
	return (
		<DayPicker
			onMonthChange={month => {
				const day = new Date(curentDay);
				day.setMonth(month.getMonth());
			}}
			onDayClick={day => {
				setCurentDay(day);
				setShowTime();
			}}
			disabledDays={disabledDays}
			locale="ru"
			firstDayOfWeek={1}
			selectedDays={[curentDay]}
			className={style.datapicker}
			weekdaysShort={WEEKDAYS_SHORT}
			months={MONTHS}
		/>
	);
};

Month.propTypes = {
	curentDay: PropTypes.object.isRequired,
	setCurentDay: PropTypes.func.isRequired,
	setShowTime: PropTypes.func.isRequired,
	disableBeforeCurentTime: PropTypes.bool,
};

export default Month;
