export const workingTimePrepare = ({ workingTime, curentDay, interval = 60 }) => {
	console.log(workingTime, curentDay);

	const res = {
		mon: {},
		tue: {},
		wed: {},
		thu: {},
		fri: {},
		sat: {},
		sun: {},
	};
	const x = Object.keys(workingTime).map(item => {
		const res = [
			...(typeof workingTime[item] === 'object' && workingTime[item] !== null
				? Object.keys(workingTime[item])
				: typeof workingTime[item] === 'string'
				? Object.keys(JSON.parse(workingTime[item]))
				: []),
		];
		return res;
	});
	console.log(x);
	return {};
};
