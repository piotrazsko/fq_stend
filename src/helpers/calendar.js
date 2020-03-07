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

export const prepareCalendarToWeekDaysView = data => {
	console.log(data);
};
export const prepareCalendarToWorkingView = data => {
	console.log(data);
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
