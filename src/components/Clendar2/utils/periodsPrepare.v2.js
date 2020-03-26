const reduceIntervals = (arr, interval) => {
	return arr.reduce((acc, item) => {
		const startTimeArr = item.start.match(/^..:..:../gm)
			? item.start.split(':')
			: (() => {
					const time = new Date(item.start);

					return [time.getHours().toString(), time.getMinutes().toString()];
			  })();
		const endTimeArr = item.end.match(/^..:..:../gm)
			? item.end.split(':')
			: (() => {
					const time = new Date(item.end);
					const hours = time.getHours();
					return [hours === 0 ? 24 : hours, time.getMinutes().toString()];
			  })();
		const startTime = startTimeArr[0] * 60 + parseInt(startTimeArr[1]);
		const endTime = endTimeArr[0] * 60 + parseInt(endTimeArr[1]);
		const externalItervals = Math.floor((endTime - startTime) / interval);
		for (var i = 0; i < externalItervals; i++) {
			acc = [...acc, startTime + i * interval];
		}

		return acc;
	}, []);
};

export const getPermanentWorkingPeriods = ({ workingTimeDay, interval = 60 }) => {
	return reduceIntervals(workingTimeDay, interval);
};

export const getCustomTimePeriods = ({ customTimeDay, interval = 60 }) => {
	console.log(reduceIntervals(customTimeDay.enabled, interval));
	return {
		enabled: customTimeDay.enabled ? reduceIntervals(customTimeDay.enabled, interval) : [],
		disabled: customTimeDay.disabled ? reduceIntervals(customTimeDay.disabled, interval) : [],
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
