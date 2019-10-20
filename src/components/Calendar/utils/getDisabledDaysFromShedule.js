import { WEEKDAYS_ENG_RUS } from '../config';

export function getDisabledDaysFromShedule(shedule, selectedDay) {
	const result = [];
	const tempDay = new Date(selectedDay.toISOString());
	const days = (function daysInThisMonth() {
		var now = selectedDay;
		return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
	})();
	console.log(days);
	// console.log(tempDay);
	for (var i = 1; i <= days; i++) {
		tempDay.setDate(i);
		const dayOfWeek = tempDay.getDay();
		if (Object.keys(shedule[WEEKDAYS_ENG_RUS[dayOfWeek].eng]).length === 0) {
			result.push(new Date(tempDay.toISOString()));
		}
	}
	return result;
}
