import { WEEKDAYS_ENG_RUS } from '../config';
import get from 'lodash/get';

export function getDisabledDaysFromShedule(shedule, selectedDay) {
	const result = [];
	const tempDay = new Date(selectedDay.toISOString());
	const days = (function daysInThisMonth() {
		var now = selectedDay;
		return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
	})();
	for (var i = 1; i <= days; i++) {
		tempDay.setDate(i);
		const dayOfWeek = tempDay.getDay();
		const disabledDays = shedule[WEEKDAYS_ENG_RUS[dayOfWeek].eng] || {};
		if (Object.keys(disabledDays).length === 0) {
			result.push(new Date(tempDay.toISOString()));
		}
	}
	return result;
}
