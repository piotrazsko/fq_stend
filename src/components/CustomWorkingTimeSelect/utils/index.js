import {
	getPermanentWorkingPeriods,
	getCustomTimePeriods,
	getBookedTimePeriods,
} from '../../../helpers/periodsPrepare.v2.js';
export { getDataForSelectedDate } from '../../../helpers/curentDayPrepare.v2.js';

export {
	prepareWorkingTimeIntervals,
	recoveryWorkingTimeIntervals,
} from '../../../helpers/calendar';

export const workingTimePrepare = ({
	workingTimeDay,
	customTimeDay,
	bookedTimeDay,
	interval = 15,
	curentDay,
}) => {
	const permanentWorkingIntervals = getPermanentWorkingPeriods({ workingTimeDay, interval });
	const customTimePeriods = getCustomTimePeriods({ customTimeDay, interval });
	const bookedTimePeriods = getBookedTimePeriods({ bookedTimeDay, interval });
	return {
		interval,
		curentDay,
		permanentWorkingIntervals,
		customTimePeriods,
		bookedTimePeriods,
	};
};

export const getBookingTime = ({ startWeekDay, bookedTime, interval, startTime }) => {
	return bookedTime.reduce((acc, item, index) => {
		item.forEach(i => {
			const row = Math.ceil((i - startTime) / interval) + 1;
			const col = (index % 7) + 1;
			acc = [...acc, { col: col, row }];
		});

		return acc;
	}, []);
};
