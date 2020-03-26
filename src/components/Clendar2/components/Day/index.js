import React from 'react';
import PropTypes from 'prop-types';
import { WEEKDAYS_LONG, MONTHS } from '../../utils/config';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import './style.scss';

const Day = ({
	workingTimeActual,
	setCurentDay,
	curentDay,
	selectDate,
	selectedDate,
	setShowTime,
	onCancel,
	onConfirm,
	autoConfirm = true,
}) => {
	const getPrevDay = () => {
		const newDate = new Date(curentDay.valueOf() - 1000 * 60 * 60 * 24);
		setCurentDay(newDate);
	};
	const getNextDay = () => {
		const newDate = new Date(curentDay.valueOf() + 1000 * 60 * 60 * 24);
		setCurentDay(newDate);
	};
	const onClickDay = item => {
		const day = new Date(curentDay);
		day.setMinutes(item.minutes);
		day.setHours(item.hour);
		day.setSeconds(0);
		selectDate(day);
	};
	const checkSelected = item => {
		return (
			curentDay.getFullYear() === selectedDate.getFullYear() &&
			curentDay.getMonth() === selectedDate.getMonth() &&
			curentDay.getDate() === selectedDate.getDate() &&
			item.hour === selectedDate.getHours() &&
			item.minutes === selectedDate.getMinutes()
		);
	};
	return (
		<div className="timeContainer">
			<div className="time_day-block time_day-name">
				<div className="time_day-name__items time_day__weekday">
					{WEEKDAYS_LONG[curentDay.getDay()]}
				</div>
				<div
					role="button"
					tabIndex="-1"
					onKeyDown={() => {}}
					onClick={setShowTime}
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
				<div className="time_day__date">{`${curentDay.getDate()} ${MONTHS[curentDay.getMonth()]}`}</div>
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
			<div className={workingTimeActual.length > 0 ? 'time_grid' : 'time_grid empty'}>
				{workingTimeActual.length > 0 ? (
					workingTimeActual.map(item => {
						let minutes = item.minutes.toString();
						minutes = minutes.length == 1 ? `0${minutes}` : minutes;
						return (
							<div
								onClick={() => onClickDay(item)}
								className={['time_grid__item', checkSelected(item) ? 'time_grid__item-selected' : ''].join(
									' '
								)}
								key={item.start + '_index'}
							>{`${item.hour}:${minutes}`}</div>
						);
					})
				) : (
					<div className={'emptyDay_shedule'}>Отсутствует свободное время</div>
				)}
			</div>
			{!autoConfirm && (
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
						onClick={() => {
							if (selectedDate) {
								onConfirm();
							}
						}}
						className={`time_day__button time_day__button-confirm  ${
							selectedDate === null ? 'time_day__button-disabled' : ''
						}`}
						role="button"
						tabIndex="-1"
						onKeyDown={() => {}}
					>
						Применить
					</div>
				</div>
			)}
		</div>
	);
};

Day.propTypes = {
	workingTimeActual: PropTypes.array.isRequired,
	setCurentDay: PropTypes.func.isRequired,
	curentDay: PropTypes.object,
	selectDate: PropTypes.func.isRequired,
	selectedDate: PropTypes.object,
	setShowTime: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
	autoConfirm: PropTypes.bool,
};

export default Day;
