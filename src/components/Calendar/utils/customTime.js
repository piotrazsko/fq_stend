import moment from 'moment';
export const getCustomDisabledTime = (customTime, currentDay) => {
	const disabledTime = customTimePrepare(customTime).disabledTime;
	return disabledTime.filter(item => item.toDateString() === currentDay.toDateString());
};
export const getCustomEnabledTime = (customTime, currentDay) => {
	const enabledTime = customTimePrepare(customTime).enabledTime;
	return enabledTime.filter(item => item.toDateString() === currentDay.toDateString());
};

function customTimePrepare(time) {
	const res = { disabledTime: [], enabledTime: [] };
	res.disabledTime = [
		...time
			.map(item => {
				const date = moment(item.date);
				return item.time_disable
					.map(i => {
						const time = new Date(date);
						const timeHalf = new Date(date);
						time.setHours(i);
						timeHalf.setHours(i);
						timeHalf.setMinutes(30);
						return i !== '' ? [time, timeHalf] : [];
					})
					.flat();
			})
			.flat(),
	];
	res.enabledTime = [
		...time
			.map(item => {
				const date = moment(item.date);
				return item.time_enable
					.map(i => {
						const time = new Date(date);
						const timeHalf = new Date(date);
						time.setHours(i);
						timeHalf.setHours(i);
						timeHalf.setMinutes(30);
						return i !== '' ? [time, timeHalf] : [];
					})
					.flat();
			})
			.flat(),
	];
	return res;
}
