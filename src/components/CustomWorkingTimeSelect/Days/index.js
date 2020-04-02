import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import {
	WEEKDAYS_SHORT,
	MONTHS,
	WEEKDAYS_ENG_RUS,
	getWorkPeriodsOfDay,
} from '../../../helpers/calendar';
import style from './style.module.scss';
import { Paper, IconButton, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const DAY_MS = 60 * 1000 * 60 * 24;

const getPrevMonth = curentDay => {
	const date = new Date(curentDay);
	date.setMonth(date.getMonth() - 1);
	return date;
};
const getNextMonth = curentDay => {
	const date = new Date(curentDay);
	date.setMonth(date.getMonth() + 1);
	return date;
};

const Days = ({ curentDay, setCurentDay, changeCurentDay }) => {
	const firstDayMs = curentDay.valueOf() - curentDay.getDay() * DAY_MS;
	return (
		<React.Fragment>
			<div className={style.monthTitle}>
				<div className={style.month}>{MONTHS[new Date(firstDayMs).getMonth()]}</div>
				<div className={style.year}>{curentDay.getFullYear()}</div>
				<div className={style.buttons}>
					<IconButton
						size="small"
						onClick={() => {
							setCurentDay(getPrevMonth(curentDay));
						}}
					>
						<ArrowForwardIosIcon
							htmlColor="#000"
							style={{
								transform: 'rotate(180deg)',
								fontSize: 18,
							}}
						/>
					</IconButton>
					<IconButton
						size="small"
						onClick={() => {
							setCurentDay(getNextMonth(curentDay));
						}}
					>
						<ArrowForwardIosIcon
							style={{
								fontSize: 18,
							}}
							htmlColor="#000"
						/>
					</IconButton>
					<IconButton
						onClick={() => {
							setCurentDay(new Date(curentDay.valueOf() - 7 * DAY_MS));
						}}
					>
						<ArrowForwardIosIcon
							htmlColor="#000"
							style={{
								transform: 'rotate(180deg)',
								fontSize: 20,
							}}
						/>
					</IconButton>
					WEEK
					<IconButton
						onClick={() => {
							setCurentDay(new Date(curentDay.valueOf() + 7 * DAY_MS));
						}}
					>
						<ArrowForwardIosIcon
							style={{
								fontSize: 20,
							}}
							htmlColor="#000"
						/>
					</IconButton>
				</div>
			</div>
		</React.Fragment>
	);
};

Days.propTypes = {
	selectedTime: PropTypes.array,
	interval: PropTypes.number,
	startTime: PropTypes.number,
	startWeekDay: PropTypes.number,
};

export default Days;
