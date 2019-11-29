/* global Set */
import React from 'react';
import PropTypes from 'prop-types';
import { Day, Time } from './components';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from './config';
import { getDatesMounthBeforeToday, getDisabledTimeBeforeCurrentTime } from './utils/Dates';
import style from './style.module.scss';
import getHoursFromEvents from './utils/getHoursFromEvents';
import { getDisabledTimeFromShefule } from './utils/getDisabledTimeFromShedule';
import { getFullMounthDaysList } from './utils/getFullMounthDaysList';
import { getCustomDisabledTime, getCustomEnabledTime } from './utils/customTime';
class Calendar extends React.Component {
	state = {
		showTime: false,
		selectedDate: new Date(),
		selectedTime: null,
		currentMonth: new Date(new Date().setDate(1)),
	};

	static defaultProps = {
		onConfirm: date => {
			console.log(date);
		},
		onCancel: () => {},
		disabledDays: [],
		disabledTime: [],
		isDisabledBeforeToday: true,
		isDisabledBeforeCurrentTime: true,
		bookedTime: [],
		afterHours: [],
		customTime: [],
	};
	static propTypes = {
		onConfirm: PropTypes.func,
		onCancel: PropTypes.func,
		disabledDays: PropTypes.array,
		disabledTime: PropTypes.array,
		isDisabledBeforeToday: PropTypes.bool,
		isDisabledBeforeCurrentTime: PropTypes.bool,
		bookedTime: PropTypes.array,
		afterHours: PropTypes.array,
		workingTime: PropTypes.array,
		customTime: PropTypes.array,
	};

	onDayClickHandler = date => {
		const { showTime } = this.state;
		this.setState({
			showTime: !showTime,
			selectedDate: date,
		});
	};
	onTimeClickHandler = time => {
		let { selectedDate } = this.state;
		const ceil = Math.floor(time / 2);
		selectedDate.setHours(ceil);
		selectedDate.setMinutes((time / 2 - ceil) * 60);
		this.setState({
			selectedTime: time,
			selectedDate: selectedDate,
		});
	};
	setDateHandler = date => {
		this.setState({
			selectedDate: date,
			currentMonth: date,
		});
	};
	showCalendar = () => {
		this.setState({
			showTime: false,
		});
	};
	confirmDate = () => {
		const { onConfirm } = this.props;
		const { selectedDate } = this.state;
		onConfirm(selectedDate);
	};
	onMonthChange = ev => {
		this.setState({ currentMonth: ev, selectedTime: null });
	};
	onChangeDay = () => {
		this.setState({ selectedTime: null });
	};
	render() {
		const state = {
			...this.state,
		};
		const props = { ...this.props };
		const disabledTimeOfDay = ({ currentDay, bookedTime, customTime, workingTime }) => {
			const customDisabledTime = getCustomDisabledTime([...customTime], currentDay);
			const customEnabledTime = getCustomEnabledTime([...customTime], currentDay);
			const res = [
				...getHoursFromEvents(bookedTime),
				...customDisabledTime,
				...getDisabledTimeFromShefule(workingTime, currentDay).filter(
					item =>
						!customEnabledTime.find(i => {
							return Math.floor(i.valueOf() / 100000) === Math.floor(item.valueOf() / 100000);
						})
				),
			]
				.filter(item => item.toDateString() === currentDay.toDateString())
				.map(item => {
					item.setMilliseconds(0);
					item.setSeconds(0);
					return item;
				});
			const set = Array.from(new Set(res.map(item => item.toISOString())));
			return set.map(item => new Date(item));
		};
		const bookedTime = disabledTimeOfDay({
			currentDay: state.selectedDate,
			bookedTime: props.bookedTime,
			customTime: props.customTime,
			workingTime: props.workingTime,
		});
		const disabledDays = [
			...props.disabledDays,
			...getDatesMounthBeforeToday(new Date(), state.currentMonth),
			...getFullMounthDaysList(state.currentMonth).filter(
				item =>
					disabledTimeOfDay({
						currentDay: item,
						bookedTime: props.bookedTime,
						customTime: props.customTime,
						workingTime: props.workingTime,
					}).length >= 48
			),
		];

		const timeProps = {
			onTimeClick: this.onTimeClickHandler,
			selectedTime: state.selectedTime,
			selectedDate: state.selectedDate,
			showCalendar: this.showCalendar,
			weekDays: WEEKDAYS_LONG,
			month: MONTHS,
			setDate: this.setDateHandler,
			confirmDate: this.confirmDate,
			onCancel: props.onCancel,
			disabledTime: getDisabledTimeBeforeCurrentTime(state.selectedDate, bookedTime),
			onChangeDay: this.onChangeDay,
		};
		const dateProps = {
			months: MONTHS,
			selectedDays: timeProps.selectedDate,
			weekdaysLong: WEEKDAYS_LONG,
			weekdaysShort: WEEKDAYS_SHORT,
			onDayClick: this.onDayClickHandler,
			disabledDays,
			month: state.currentMonth,
			onMonthChange: this.onMonthChange,
			className: style.datapicker,
		};
		return state.showTime ? <Time {...timeProps} /> : <Day {...dateProps} />;
	}
}

export default Calendar;
