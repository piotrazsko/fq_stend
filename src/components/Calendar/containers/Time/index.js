import React, {Component} from 'react';

import { TimeDisplay } from '../../components';
import './style.css';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

class Time extends Component {
    constructor(props) {
        super(props);
        this.getNextDay = this.getNextDay.bind(this);
        this.getPrevDay = this.getPrevDay.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.confirmHandler= this.confirmHandler.bind(this);
    }
    static defaultProps = {
        disabledTime: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            21,
            22,
            23
        ]
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    getPrevDay() {
        const {
            setDate,
            selectedDate
        } = this.props;
        const newDate = new Date(selectedDate.valueOf() - 1000 * 60 * 60 * 24);
        setDate(newDate);
    }
    getNextDay() {
        const {
            setDate,
            selectedDate
        } = this.props;
        const newDate = new Date(selectedDate.valueOf() + 1000 * 60 * 60 * 24);
        setDate(newDate);

    }
    showCalendar() {
        const {
            showCalendar
        } = this.props;
        showCalendar();
    }
    confirmHandler(){
        const {confirmDate} = this.props
        confirmDate()
    }
    cancelHandler(){
        const {onCancel} = this.props;
        onCancel();
    }

    render() {
        const props = {
            ...this.props
        };
        const {
            selectedDate,
            weekDays,
            selectedTime,
            disabledTime,
            onTimeClick,
            month
        } = props;
        const timeProps = {
            selectedTime: selectedTime,
            disabledTime: disabledTime,
            onTimeClick: onTimeClick
        }
        return (<div className="timeContainer">
            <div className="time_day-block time_day-name">
                <div className="time_day-name__items time_day__weekday">{weekDays[selectedDate.getDay()]}</div>
                <div  role="button" tabIndex = "-1" onKeyDown = {()=>{}} onClick = {this.showCalendar} className="time_day-name__items time_day__button-calendar"><CalendarToday/></div>
            </div>
            <div className="time_day-block time_day-slider">
                <div className="time_day__button" role="button" tabIndex = "-1" onKeyDown = {()=>{}} onClick={this.getPrevDay}><ArrowLeft/></div>
                <div className="time_day__date">{`${selectedDate.getDate()} ${month[selectedDate.getMonth()]}`}</div>
                <div className="time_day__button" role="button" tabIndex = "-1" onKeyDown = {()=>{}} onClick={this.getNextDay}><ArrowRight/></div>
            </div>
            <TimeDisplay {...timeProps}/>
            <div className="time_day-block time_day_confirm-block">
                <div onClick = {this.cancelHandler} className="time_day__button  time_day__button-cancel" role="button" tabIndex = "-1" onKeyDown = {()=>{}}>Отменить</div>
                <div onClick = {this.confirmHandler} className="time_day__button time_day__button-confirm"  role="button" tabIndex = "-1" onKeyDown = {()=>{}}>Применить</div>
            </div>
        </div>);
    }
}
Time.propTypes = {};

export default Time;
