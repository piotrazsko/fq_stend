import { WEEKDAYS_ENG_RUS } from './config.js';

/**
 * [getDataForSelectedDate  get data for curent day for form shedule]
 *
 * @param  {[object]} workingTime                    [ permanent working time {"10":"white","11":"white","12":"white","13":"white"}]
 * @param  {[object]} customTime                     [time  custom {
																														 		 id: 120,
																														 		 master_id: 608,
																														 		 date: '2020-03-25 00:00:00',
																														 		 time_disable: ['16', '17'],
																														 		 time_enable: ['15'],
																														 	 }  ]
 * @param  {[object]} bookedTime                     [time of events]
 * @param  {[object]} selectedDate                   [date for filter data 	{ date: '2019-12-03 09:00:00', duration: 75 }]
 * @param  {[object]} [weekDaysArr=WEEKDAYS_ENG_RUS] [description]
 * @return {[object]}                                [description]
 */

export const getDataForSelectedDate = ({
	workingTime,
	customTime,
	bookedTime,
	selectedDate,
	weekDaysArr = WEEKDAYS_ENG_RUS,
}) => {
	const year = selectedDate.getFullYear();
	const month = selectedDate.getMonth();
	const date = selectedDate.getDate();
	const workingTimeDay = () => {
		const nonPreparedDay = workingTime[weekDaysArr[selectedDate.getDay()].eng];
		return nonPreparedDay && typeof nonPreparedDay === 'string' ? JSON.parse(nonPreparedDay) : {};
	};
	const bookedTimeDay = () => {
		return bookedTime.filter(item => {
			const itemDate = new Date(item.date);
			return (
				itemDate.getFullYear() === year && itemDate.getMonth() === month && itemDate.getDate() === date
			);
		});
	};
	const customTimeDay = () => {
		return customTime.reduce((accum, item) => {
			const itemDate = new Date(item.date);

			if (
				itemDate.getFullYear() === year &&
				itemDate.getMonth() === month &&
				itemDate.getDate() === date
			) {
				accum.enabled = [...(accum.enabled || []), ...item.time_enable].filter(item => item);
				accum.disabled = [...(accum.disabled || []), ...item.time_disable].filter(item => item);
			}
			return accum;
		}, {});
	};
	return {
		workingTimeDay: workingTimeDay(),
		customTimeDay: customTimeDay(),
		bookedTimeDay: bookedTimeDay(),
	};
};
