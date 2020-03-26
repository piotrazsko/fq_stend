import React from 'react';
import PropTypes from 'prop-types';
// import { preppareDataforworkingTime, recoveryDataForworkingTime } from '../../helpers/calendar';
import { workingTimePrepare, getDataForSelectedDate } from './utils';
import Day from './components/Day';
import Month from './components/Month';
// import style from './style.module.scss';

const today = new Date();
const Calendar = ({
	defaultShowDay = false,
	autoConfirm,
	interval = 15,
	bookedTime,
	onConfirm,
	workingTime,
	customTime,
	curentDay: curentDayDefault = today,
	selectedDate: selectedTimeProps = today,
}) => {
	const [curentDay, setCurentDay] = React.useState(curentDayDefault);
	const [selectedDate, selectDate] = React.useState(selectedTimeProps);

	const [showTime, setShowTime] = React.useState(defaultShowDay);

	React.useEffect(() => {
		selectDate(selectedTimeProps);
	}, [selectedTimeProps]);
	const selectedDayData = getDataForSelectedDate({
		workingTime,
		customTime,
		bookedTime,
		selectedDate: curentDay,
	});

	const workingTimeActual = workingTimePrepare({
		...selectedDayData,
		interval: 20,
	});
	return (
		<div>
			{showTime ? (
				<Day
					workingTimeActual={workingTimeActual}
					disableBeforeCurentTime
					curentDay={curentDay}
					setCurentDay={setCurentDay}
					selectDate={selectDate}
					selectedDate={selectedDate}
					setShowTime={() => setShowTime(!showTime)}
				/>
			) : (
				<Month
					disableBeforeCurentTime
					workingTimeActual={workingTimeActual}
					curentDay={curentDay}
					setCurentDay={setCurentDay}
					setShowTime={() => setShowTime(!showTime)}
				/>
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
