import _ from 'lodash';
export const MONTHS = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
];
export const WEEKDAYS_LONG = [
	'Воскресение',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
];
export const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
export const WEEKDAYS_ENG_RUS = [
	{ rus: 'Вс', eng: 'sun' },
	{ eng: 'mon', rus: 'Пн' },
	{ eng: 'tue', rus: 'Вт' },
	{ eng: 'wed', rus: 'Ср' },
	{ eng: 'thu', rus: 'Чт' },
	{ eng: 'fri', rus: 'Пт' },
	{ eng: 'sat', rus: 'Сб' },
];

export const DAYS_OF_WEEK = [
	{
		label: 'Понедельник',
		shortLabel: 'Пн',
		value: 'mon',
	},
	{
		label: 'Вторник',
		shortLabel: 'Вт',
		value: 'tue',
	},
	{
		label: 'Среда',
		shortLabel: 'Ср',
		value: 'wed',
	},
	{
		label: 'Четверг',
		shortLabel: 'Чт',
		value: 'thu',
	},
	{
		label: 'Пятница',
		shortLabel: 'Пт',
		value: 'fri',
	},
	{
		label: 'Суббота',
		shortLabel: 'Сб',
		value: 'sat',
	},
	{
		label: 'Воскресенье',
		shortLabel: 'Вс',
		value: 'sun',
	},
];

export const preppareDataforWorkTime = data => {
	const res = {
		mon: {},
		tue: {},
		wed: {},
		thu: {},
		fri: {},
		sat: {},
		sun: {},
	};
	if (Array.isArray(data)) {
		data.forEach(i => {
			switch (i.col) {
				case 1: {
					res.sun[i.row] = 'white';
					break;
				}
				case 2: {
					res.mon[i.row] = 'white';
					break;
				}
				case 3: {
					res.tue[i.row] = 'white';
					break;
				}
				case 4: {
					res.wed[i.row] = 'white';
					break;
				}
				case 5: {
					res.thu[i.row] = 'white';
					break;
				}
				case 6: {
					res.fri[i.row] = 'white';
					break;
				}
				case 7: {
					res.sat[i.row] = 'white';
					break;
				}

				default:
					break;
			}
		});
	}
	return res;
};
export const recoveryDataForWorkTime = (
	data = {
		mon: '{}',
		tue: '{}',
		wed: '{}',
		thu: '{}',
		fri: '{}',
		sat: '{}',
		sun: '{}',
	}
) => {
	let res = [];
	if (typeof data === 'object') {
		Object.keys(data).forEach(i => {
			const day =
				data[i] !== null && (typeof data[i] === 'string' || typeof data[i] === 'object')
					? Object.keys(typeof data[i] === 'string' ? JSON.parse(data[i]) : data[i])
					: [];
			day.forEach(item => {
				let key = 1;
				switch (i) {
					case 'sun': {
						key = 1;
						break;
					}
					case 'mon': {
						key = 2;
						break;
					}
					case 'tue': {
						key = 3;
						break;
					}
					case 'wed': {
						key = 4;
						break;
					}
					case 'thu': {
						key = 5;
						break;
					}
					case 'fri': {
						key = 6;
						break;
					}
					case 'sat': {
						key = 7;
						break;
					}

					default:
						break;
				}
				res = [...res, { col: key, row: parseInt(item) }];
			});
		});
	}
	return res;
};

export const formatHours = hour => `${hour.toString().length < 2 ? `0${hour}` : hour}:00`;

export const getWorkPeriodsOfDay = dayData => {
	const periods = _.reduce(
		dayData,
		(memo, hour) => {
			const formatedHours = _.parseInt(hour);
			const prevPeriodIndex = _.findIndex(memo, { to: formatedHours });

			if (prevPeriodIndex > -1) {
				memo[prevPeriodIndex] = {
					...memo[prevPeriodIndex],
					to: formatedHours + 1,
				};
			} else {
				memo.push({
					from: formatedHours,
					to: formatedHours + 1,
				});
			}
			return memo;
		},
		[]
	);
	const formatedPeriods = _.map(
		periods,
		period => `${formatHours(period.from)} - ${formatHours(period.to)}`
	);

	return formatedPeriods.join(' / ');
};
