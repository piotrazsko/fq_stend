export function getDatesMounthBeforeToday(today, currentMonth) {
	if (today instanceof Date) {
		const days = (function daysInThisMonth() {
			var now = currentMonth;
			return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
		})();
		const day =
			(currentMonth.getFullYear() === today.getFullYear() &&
				currentMonth.getMonth() < today.getMonth()) ||
			currentMonth.getFullYear() < today.getFullYear()
				? days
				: currentMonth.getFullYear() === today.getFullYear() &&
				  currentMonth.getMonth() === today.getMonth()
				? today.getDate()
				: 0;
		const result = [];

		for (var i = 1; i <= day; i++) {
			const day = new Date(today.setDate(i));
			day.setMonth(currentMonth.getMonth());
			day.setYear(currentMonth.getFullYear());
			result.push(day);
		}
		console.log(result);
		return result;
	} else {
		throw new Error('Type of  function arguments is wrong!');
	}
}

export function getDisabledTimeForDay(disabledMoment = [new Date()], currentDate = new Date()) {
	let result = [];
	for (var i = 0; i < disabledMoment.length; i++) {
		if (
			disabledMoment[i].getDate() === currentDate.getDate() &&
			disabledMoment[i].getMonth() === currentDate.getMonth() &&
			disabledMoment[i].getYear() === currentDate.getYear()
		) {
			result.push(disabledMoment[i].getHours());
		}
	}
	return result;
}

export function getDisabledTimeBeforeCurrentTime(checkedDate = new Date(), disabledMoments = []) {
	let result = [];
	if (checkedDate instanceof Date) {
		let currentTime = new Date();
		let currentDateObj = {
			day: currentTime.getDate(),
			month: currentTime.getMonth(),
			year: currentTime.getYear(),
		};
		let checkedDateObj = {
			day: checkedDate.getDate(),
			month: checkedDate.getMonth(),
			year: checkedDate.getYear(),
		};
		if (
			currentDateObj.day === checkedDateObj.day &&
			currentDateObj.month === checkedDateObj.month &&
			currentDateObj.year === checkedDateObj.year
		) {
			currentTime = currentTime.getHours();
			for (let i = 0; i <= currentTime; i++) {
				result.push(i);
			}
		} else if (currentTime.valueOf() > checkedDate.valueOf()) {
			for (let i = 0; i < 24; i++) {
				result.push(i);
			}
		}
	}
	result = result.concat(getDisabledTimeForDay(disabledMoments, checkedDate));
	return result;
}

export function getFreeHours() {}
