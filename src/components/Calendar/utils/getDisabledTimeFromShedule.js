import { WEEKDAYS_ENG_RUS } from '../config.js';
export function getDisabledTimeFromShefule(shedule, selectedDate) {
	const currentDay = selectedDate.getDay();
	const workingDay = [...Array(24).keys()];

	const disabledTime = workingDay.filter(
		item => Object.keys(shedule[WEEKDAYS_ENG_RUS[currentDay].eng]).indexOf(item.toString()) === -1
	);
	const selectedDateISO = selectedDate.toISOString();

	const array = [...disabledTime, ...disabledTime.map(item => item + 0.5)];

	return array.map(item => {
		const disabledTime = new Date(selectedDateISO);
		const ceil = Math.floor(item);
		const part = item - ceil;
		disabledTime.setHours(ceil);
		disabledTime.setMinutes(part * 60);
		return disabledTime;
	});
}
