import React from 'react';
import PropTypes from 'prop-types';

import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

import TimeDisplay from '../TimeDisplay';
import './style.css';

const Time = ({
	selectedDate,
	weekDays,
	selectedTime,
	disabledTime,
	onTimeClick,
	month,
	onCancel,
	confirmDate,
	showCalendar,
	setDate,
}) => {
	const timeProps = {
		selectedTime: selectedTime,
		disabledTime: disabledTime,
		onTimeClick: onTimeClick,
	};
	const getPrevDay = () => {
		const newDate = new Date(selectedDate.valueOf() - 1000 * 60 * 60 * 24);
		setDate(newDate);
	};
	const getNextDay = () => {
		const newDate = new Date(selectedDate.valueOf() + 1000 * 60 * 60 * 24);
		setDate(newDate);
	};
	return (
		<div className="timeContainer">
			<div className="time_day-block time_day-name">
				<div className="time_day-name__items time_day__weekday">{weekDays[selectedDate.getDay()]}</div>
				<div
					role="button"
					tabIndex="-1"
					onKeyDown={() => {}}
					onClick={showCalendar}
					className="time_day-name__items time_day__button-calendar"
				>
					<CalendarToday />
				</div>
			</div>
			<div className="time_day-block time_day-slider">
				<div
					className="time_day__button"
					role="button"
					tabIndex="-1"
					onKeyDown={() => {}}
					onClick={getPrevDay}
				>
					<ArrowLeft />
				</div>
				<div className="time_day__date">{`${selectedDate.getDate()} ${
					month[selectedDate.getMonth()]
				}`}</div>
				<div
					className="time_day__button"
					role="button"
					tabIndex="-1"
					onKeyDown={() => {}}
					onClick={getNextDay}
				>
					<ArrowRight />
				</div>
			</div>
			<TimeDisplay {...timeProps} />
			<div className="time_day-block time_day_confirm-block">
				<div
					onClick={onCancel}
					className="time_day__button  time_day__button-cancel"
					role="button"
					tabIndex="-1"
					onKeyDown={() => {}}
				>
					Отменить
				</div>
				<div
					onClick={confirmDate}
					className="time_day__button time_day__button-confirm"
					role="button"
					tabIndex="-1"
					onKeyDown={() => {}}
				>
					Применить
				</div>
			</div>
		</div>
	);
};

Time.propTypes = {
	weekDays: PropTypes.array,
	selectedTime: PropTypes.object,
	disabledTime: PropTypes.object,
	onTimeClick: PropTypes.func,
	month: PropTypes.array,
	onCancel: PropTypes.func,
	confirmDate: PropTypes.func,
	showCalendar: PropTypes.func,
	setDate: PropTypes.func,
};
Time.defaultProps = {
	disabledTime: [0, 1, 2, 3, 4, 5, 6, 7, 21, 22, 23],
};

export default Time;
