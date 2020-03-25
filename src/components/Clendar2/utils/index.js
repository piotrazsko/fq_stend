/*global  Set*/
import { WEEKDAYS_ENG_RUS } from './config.js';

/**
 * [getDataForSelectedDate  get data for curent day for form shedule]
 *
 * @param  {[object]} workingTime                    [ permanent working time {"10":"white","11":"white","12":"white","13":"white"}]
 * @param  {[object]} customTime                     [time  custom {
																														 		 id: 120,
																														 		 master_id: 608,
																														 		 date: '2020-03-25 00:00:00',
																														 		 time_disable: ['16', '17'],
																														 		 time_enable: ['15'],
																														 	 }  ]
 * @param  {[object]} bookedTime                     [time of events]
 * @param  {[object]} selectedDate                   [date for filter data 	{ date: '2019-12-03 09:00:00', duration: 75 }]
 * @param  {[object]} [weekDaysArr=WEEKDAYS_ENG_RUS] [description]
 * @return {[object]}                                [description]
 */

export const getDataForSelectedDate = ({
	workingTime,
	customTime,
	bookedTime,
	selectedDate,
	weekDaysArr = WEEKDAYS_ENG_RUS,
}) => {
	const year = selectedDate.getFullYear();
	const month = selectedDate.getMonth();
	const date = selectedDate.getDate();
	const workingTimeDay = () => {
		const nonPreparedDay = workingTime[weekDaysArr[selectedDate.getDay()].eng];
		return nonPreparedDay && typeof nonPreparedDay === 'string' ? JSON.parse(nonPreparedDay) : {};
	};
	const bookedTimeDay = () => {
		return bookedTime.filter(item => {
			const itemDate = new Date(item.date);
			return (
				itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date
			);
		});
	};
	const customTimeDay = () => {
		return customTime.reduce((accum, item) => {
			const itemDate = new Date(item.date);

			if (
				itemDate.getFullYear() === year &&
				itemDate.getMonth() === month &&
				itemDate.getDate() === date
			) {
				accum.enabled = [...(accum.enabled || []), ...item.time_enable].filter(item => item);
				accum.disabled = [...(accum.disabled || []), ...item.time_disable].filter(item => item);
			}
			return accum;
		}, {});
	};
	return {
		workingTimeDay: workingTimeDay(),
		customTimeDay: customTimeDay(),
		bookedTimeDay: bookedTimeDay(),
	};
};
const reduceIntervals = (arr, duration, interval) => {
	return arr.reduce((acc, item) => {
		const externalItervals = Math.floor(duration / interval);
		for (var i = 0; i < externalItervals; i++) {
			acc = [...acc, item + i * interval];
		}
		return [...acc];
	}, []);
};

const getPermanentWorkingPeriods = ({ workingTimeDay, duration = 60, interval = 60 }) => {
	const permanentWorkingIntervals = Object.keys(workingTimeDay).map(item => item * duration);
	return reduceIntervals(permanentWorkingIntervals, duration, interval);
};

const getCustomTimePeriods = ({ customTimeDay, duration = 60, interval = 60 }) => {
	return {
		enabled: reduceIntervals(customTimeDay.enabled.map(item => item * 60), duration, interval),
		disabled: reduceIntervals(customTimeDay.disabled.map(item => item * 60), duration, interval),
	};
};
const getBookedTimePeriods = ({ bookedTimeDay, interval = 60 }) => {
	return bookedTimeDay.reduce((acc, item) => {
		const date = new Date(item.date);
		const startTime = date.getHours() * 60 + date.getMinutes();
		const externalItervals = Math.floor(item.duration / interval);
		for (var i = 0; i < externalItervals; i++) {
			acc = [...acc, startTime + i * interval];
		}
		return [...acc];
	}, []);
};

export const workingTimePrepare = ({
	workingTimeDay,
	customTimeDay,
	bookedTimeDay,
	interval = 15,
}) => {
	const permanentWorkingIntervals = getPermanentWorkingPeriods({ workingTimeDay, interval });
	const customTimePeriods = getCustomTimePeriods({ customTimeDay, interval });
	const bookedTimePeriods = getBookedTimePeriods({ bookedTimeDay, interval });

	const enabledTime = Array.from(
		new Set([...permanentWorkingIntervals, ...customTimePeriods.enabled])
	)
		.sort((a, b) => a - b)
		.map(item => ({
			start: item,
			end: item + interval,
			hour: Math.floor(item / 60),
			minutes: item % 60,
		}));
	const disabledTime = Array.from(new Set([...bookedTimePeriods, ...customTimePeriods.disabled]))
		.sort((a, b) => a - b)
		.map(item => ({
			start: item,
			end: item + interval,
			hour: Math.floor(item / 60),
			minutes: item % 60,
		}));
	return enabledTime.filter(item => {
		return !disabledTime.find(disabledItem => {
			return (
				(item.start <= disabledItem.start &&
					item.end > disabledItem.start &&
					item.end <= disabledItem.end) ||
				(item.start >= disabledItem.start &&
					item.start < disabledItem.end &&
					item.end >= disabledItem.end)
			);
		});
	});
};
