import React from 'react';
import PropTypes from 'prop-types';
import { WEEKDAYS_SHORT, getWorkPeriodsOfDay } from '../../../helpers/calendar';
import style from './style.module.scss';

const Days = ({ selectedTime }) => {
	const days = selectedTime.reduce((accumulator, item) => {
		accumulator[item.col - 1] = accumulator[item.col - 1]
			? [...accumulator[item.col - 1], item.row]
			: [item.row];
		return accumulator;
	}, []);

	return (
		<React.Fragment>
			{days.map((item, index) => {
				const sorted = item.sort((a, b) => a - b);
				return item ? (
					<div key={`day_${index}`} className={style.timeTag}>
						<div className={style.circle}>{WEEKDAYS_SHORT[index]}</div>{' '}
						<div className={style.time}>{getWorkPeriodsOfDay(sorted)}</div>
					</div>
				) : (
					''
				);
			})}
		</React.Fragment>
	);
};

Days.propTypes = {
	selectedTime: PropTypes.array,
};

export default Days;
