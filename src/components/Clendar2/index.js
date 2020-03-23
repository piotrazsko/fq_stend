import React from 'react';
import PropTypes from 'prop-types';
import { preppareDataforworkingTime, recoveryDataForworkingTime } from '../../helpers/calendar';
import { workingTimePrepare } from './utils';
const Calendar = ({
	defaultShowDay,
	autoConfirm,
	bookedTime,
	onConfirm,
	workingTime,
	customTime,
	selectedDay,
}) => {
	const [curentDay, setCurentDay] = React.useState(selectedDay);
	workingTimePrepare({ workingTime, curentDay });

	return <div></div>;
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
