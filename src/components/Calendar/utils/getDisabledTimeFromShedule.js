import { WEEKDAYS_ENG_RUS } from '../config.js';
export function getDisabledTimeFromShefule(shedule, selectedDate) {
	const currentDay = selectedDate.getDay();
	const workingDay = [...Array(24).keys()];
	const array = [...Array(48).keys()];
	const disabledTime = workingDay.filter(
		item => Object.keys(shedule[WEEKDAYS_ENG_RUS[currentDay].eng]).indexOf(item.toString()) === -1
	);
	const selectedDateISO = selectedDate.toISOString();

	console.log(disabledTime);
	return array.map(item => {});
	disabledTime.map(item => {
		const disabledTime = new Date(selectedDateISO);
		disabledTime.setHours(item);
		return disabledTime;
	});
}
