import React from 'react';
import PropTypes from 'prop-types';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../../helpers/calendar';
import style from './style.module.scss';

const Days = ({ selectedTime }) => {
	const dayNum = 0;
	console.log(selectedTime);
	return (
		<React.Fragment>
			<div>{<div className={style.circle}>{WEEKDAYS_SHORT[dayNum]}</div>}</div>
		</React.Fragment>
	);
};

Days.propTypes = {
	selectedTime: PropTypes.array,
};

export default Days;
