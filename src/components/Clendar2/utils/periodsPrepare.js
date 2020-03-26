const reduceIntervals = (arr, duration, interval) => {
	return arr.reduce((acc, item) => {
		const externalItervals = Math.floor(duration / interval);
		if (externalItervals > 0) {
			for (var i = 0; i < externalItervals; i++) {
				acc = [...acc.sort((a, b) => a - b), item + i * interval];
			}
		} else {
			// TODO: needcreate
			// 	console.log(acc, interval, item / 60);
			// 	acc =
			// 		acc.length > 0 && acc[acc.length - 1] + interval > item && acc[acc.length - 1] < item
			// 			? acc
			// 			: [...acc.sort((a, b) => a - b), item];
		}
		return [...acc];
	}, []);
};

export const getPermanentWorkingPeriods = ({ workingTimeDay, duration = 60, interval = 60 }) => {
	const permanentWorkingIntervals = Object.keys(workingTimeDay).map(item => item * duration);
	return reduceIntervals(permanentWorkingIntervals, duration, interval);
};

export const getCustomTimePeriods = ({ customTimeDay, duration = 60, interval = 60 }) => {
	return {
		enabled: customTimeDay.enabled
			? reduceIntervals(customTimeDay.enabled.map(item => item * 60), duration, interval)
			: [],
		disabled: customTimeDay.disabled
			? reduceIntervals(customTimeDay.disabled.map(item => item * 60), duration, interval)
			: [],
	};
};
export const getBookedTimePeriods = ({ bookedTimeDay, interval = 60 }) => {
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
