import { WEEKDAYS_ENG_RUS } from '../config.js';
export function getDisabledTimeFromShefule(shedule, selectedDate) {
	const currentDay = selectedDate.getDay();
	const workingDay = [...Array(24).keys()];
	const disabledTime = workingDay.filter(
		item => Object.keys(shedule[WEEKDAYS_ENG_RUS[currentDay].eng]).indexOf(item.toString()) === -1
	);
	const selectedDateISO = selectedDate.toISOString();

	return disabledTime.map(item => {
		const disabledTime = new Date(selectedDateISO);
		disabledTime.setHours(item);
		return disabledTime;
	});
}
