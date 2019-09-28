import React from 'react';
import PropTypes from 'prop-types';
import { Day, Time } from './components';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from './config';
import {
	getDatesMounthBeforeToday,
	getDisabledTimeForDay,
	getDisabledTimeBeforeCurrentTime,
} from './utils/Dates';
import style from './style.module.scss';
class Calendar extends React.Component {
	state = {
		showTime: false,
		selectedDate: new Date(),
		selectedTime: null,
		disabledDays: [],
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

	componentWillMount() {
		const props = { ...this.props };
		let result = { ...this.state };
		if (props.isDisabledBeforeToday) {
			result.disabledDays = props.disabledDays.concat(getDatesMounthBeforeToday(new Date()));
		} else {
			result.disabledDays = props.disabledDays;
		}
		this.setState(result);
	}

	onDayClickHandler = date => {
		const { showTime } = this.state;
		this.setState({
			showTime: !showTime,
			selectedDate: date,
		});
	};
	onTimeClickHandler = time => {
		let { selectedDate } = this.state;
		selectedDate.setHours(time);
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

	render() {
		const state = {
			...this.state,
		};
		const props = { ...this.props };
		let disabledTime = state.selectedDate
			? props.disabledTime.concat(props.afterHours[state.selectedDate.getDay()])
			: props.disabledTime;
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
			disabledTime: props.isDisabledBeforeCurrentTime
				? disabledTime.concat(getDisabledTimeBeforeCurrentTime(state.selectedDate, props.bookedTime))
				: disabledTime,
		};
		const dateProps = {
			months: MONTHS,
			selectedDays: timeProps.selectedDate,
			weekdaysLong: WEEKDAYS_LONG,
			weekdaysShort: WEEKDAYS_SHORT,
			onDayClick: this.onDayClickHandler,
			disabledDays: [...state.disabledDays],
			className: style.datapicker,
		};
		return state.showTime ? <Time {...timeProps} /> : <Day {...dateProps} />;
	}
}

export default Calendar;
