/*global  Set*/
import { DAYS_OF_WEEK, getObjectOfPeriods } from '../../../helpers/calendar';
import {
	getPermanentWorkingPeriods,
	getCustomTimePeriods,
	getBookedTimePeriods,
} from '../../../helpers/periodsPrepare.v2.js';
export { getDataForSelectedDate } from '../../../helpers/curentDayPrepare.v2.js';

const strPrepare = min => {
	const hours = Math.floor(min / 60).toString();
	const mins = (min % 60).toString();
	return `${hours.length == 1 ? '0' + hours : hours}:${mins.length == 1 ? '0' + mins : mins}`;
};
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

export const prepareWorkingTimeIntervals = ({ data, interval, startTime }) => {
	const res = {
		mon: [],
		tue: [],
		wed: [],
		thu: [],
		fri: [],
		sat: [],
		sun: [],
	};
	DAYS_OF_WEEK.forEach((item, i) => {
		const rows = Array.from(new Set(data.filter(item => item.col === i).map(item => item.row))).sort(
			(a, b) => a - b
		);

		const fromTo = getObjectOfPeriods([...rows], interval, startTime);

		res[item.value] = fromTo.map(item => {
			const start = (item.from - 1) * interval + startTime;
			const end = (item.to - 1) * interval + startTime;
			return {
				start: `${strPrepare(start)}`,
				end: `${strPrepare(end)}`,
			};
		});
	});
	return res;
};

export const recoveryWorkingTimeIntervals = ({
	data = {
		mon: [],
		tue: [],
		wed: [],
		thu: [],
		fri: [],
		sat: [],
		sun: [],
	},
	interval,
	startTime = 0,
	startWeekDay = 0,
}) => {
	let res = [];
	if (typeof data === 'object' && data !== null) {
		for (let index = startWeekDay; index < DAYS_OF_WEEK.length + startWeekDay; index++) {
			const day = data[DAYS_OF_WEEK[(index + startWeekDay) % 7].value] || [];
			const arr = day.reduce((acc, item) => {
				const start = item.start.split(':');
				const end = item.end.split(':');
				const startWorkingTime = start[0] * 60 + parseInt(start[1]);
				const endWorkingTime = end[0] * 60 + parseInt(end[1]);
				for (
					let j = Math.floor(startWorkingTime / interval);
					j < Math.floor(endWorkingTime / interval);
					j++
				) {
					const col = (index % 7) + 1;
					acc = [...acc, { col: col, row: j + 1 - Math.floor(startTime / interval) || 1 }];
				}
				return acc;
			}, []);
			res = [...res, ...arr];
		}
	}
	return res;
};
