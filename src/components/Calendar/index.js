import React from 'react';
import PropTypes from 'prop-types';
import { Day, Time } from './components';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from './config';
import { getDatesMounthBeforeToday, getDisabledTimeBeforeCurrentTime } from './utils/Dates';
import style from './style.module.scss';
import getHoursFromEvents from './utils/getHoursFromEvents';
import { getDisabledTimeFromShefule } from './utils/getDisabledTimeFromShedule';
import { getDisabledDaysFromShedule } from './utils/getDisabledDaysFromShedule';

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
	onChangeDay = ev => {
		this.setState({ selectedTime: null });
	};
	render() {
		const state = {
			...this.state,
		};
		const props = { ...this.props };
		const bookedTime = [
			...getHoursFromEvents(props.bookedTime),
			...getDisabledTimeFromShefule(props.workingTime, state.selectedDate),
		];
		const disabledTimeForToday = Array.from(
			new Set(getDisabledTimeBeforeCurrentTime(new Date(), bookedTime))
		);
		const disabledDays = props.isDisabledBeforeToday
			? [
					...props.disabledDays,
					...getDatesMounthBeforeToday(new Date(), state.currentMonth),
					...getDisabledDaysFromShedule(props.workingTime, state.currentMonth),
					...[disabledTimeForToday.length === 48 && new Date()],
			  ]
			: props.disabledDays;
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
			onMonthChange: this.onMonthChange,
			className: style.datapicker,
		};
		return state.showTime ? <Time {...timeProps} /> : <Day {...dateProps} />;
	}
}

export default Calendar;
