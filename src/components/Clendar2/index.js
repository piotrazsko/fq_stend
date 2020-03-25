import React from 'react';
import PropTypes from 'prop-types';
// import { preppareDataforworkingTime, recoveryDataForworkingTime } from '../../helpers/calendar';
import { workingTimePrepare, getWorkingPeriods, getDataForSelectedDate } from './utils';
import DayPicker from 'react-day-picker';
import Day from './components/Day';
import style from './style.module.scss';

const Calendar = ({
	defaultShowDay = false,
	autoConfirm,
	interval = 15,
	bookedTime,
	onConfirm,
	workingTime,
	customTime,
	curentDay: curentDayDefault = new Date(),
	selectedDate: selectedTimeProps = new Date(),
}) => {
	const [curentDay, setCurentDay] = React.useState(curentDayDefault);
	const [selectedDate, selectTime] = React.useState(selectedTimeProps);

	const [showTime, setShowTime] = React.useState(defaultShowDay);

	// const
	// console.log(bookedTime, workingTime, customTime);
	React.useEffect(() => {
		selectTime(selectedTimeProps);
	}, [selectedTimeProps]);
	const selectedDayData = getDataForSelectedDate({
		workingTime,
		customTime,
		bookedTime,
		selectedDate,
	});
	console.time('start');
	console.log(
		workingTimePrepare({
			...selectedDayData,
			interval: 30,
		})
	);
	console.timeEnd('start');

	return (
		<div>
			{showTime ? (
				<Day
					curentDay={curentDay}
					setCurentDay={setCurentDay}
					setShowTime={setShowTime}
					selectedDate={selectedDate}
				/>
			) : (
				<DayPicker />
			)}
		</div>
	);
};

Calendar.propTypes = {
	defaultShowDay: PropTypes.bool,
	autoConfirm: PropTypes.bool,
	bookedTime: PropTypes.array,
	onConfirm: PropTypes.func.isRequired,
	workingTime: PropTypes.object.isRequired,
	customTime: PropTypes.array,
};
Calendar.defaultProps = {
	selectedDay: new Date(),
};
export default Calendar;
