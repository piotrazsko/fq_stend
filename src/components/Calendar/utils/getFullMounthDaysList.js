export function getFullMounthDaysList(selectedDay) {
	const result = [];
	const tempDay = new Date(selectedDay.toISOString());
	const days = (function daysInThisMonth() {
		var now = selectedDay;
		return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
	})();
	for (var i = 1; i <= days; i++) {
		tempDay.setDate(i);
		result.push(new Date(tempDay.toISOString()));
	}
	return result;
}
