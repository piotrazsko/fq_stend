/*global  Set*/
import {
	getPermanentWorkingPeriods,
	getCustomTimePeriods,
	getBookedTimePeriods,
} from './periodsPrepare.v2.js';
export { getDataForSelectedDate } from './curentDayPrepare.v2.js';
export const workingTimePrepare = ({
	workingTimeDay,
	customTimeDay,
	bookedTimeDay,
	interval = 15,
}) => {
	const permanentWorkingIntervals = getPermanentWorkingPeriods({ workingTimeDay, interval });
	const customTimePeriods = getCustomTimePeriods({ customTimeDay, interval });
	const bookedTimePeriods = getBookedTimePeriods({ bookedTimeDay, interval });
	console.log(customTimePeriods, customTimeDay);
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
