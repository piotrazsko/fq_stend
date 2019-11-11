import React from 'react';
import PropTypes from 'prop-types';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import TimeDisplay from '../TimeDisplay';
import './style.css';

var Time = function Time(_ref) {
  var selectedDate = _ref.selectedDate,
      weekDays = _ref.weekDays,
      selectedTime = _ref.selectedTime,
      disabledTime = _ref.disabledTime,
      onTimeClick = _ref.onTimeClick,
      month = _ref.month,
      onCancel = _ref.onCancel,
      confirmDate = _ref.confirmDate,
      showCalendar = _ref.showCalendar,
      setDate = _ref.setDate,
      onChangeDay = _ref.onChangeDay;
  var timeProps = {
    selectedTime: selectedTime,
    disabledTime: disabledTime,
    onTimeClick: onTimeClick
  };

  var getPrevDay = function getPrevDay() {
    var newDate = new Date(selectedDate.valueOf() - 1000 * 60 * 60 * 24);
    setDate(newDate);
    onChangeDay();
  };

  var getNextDay = function getNextDay() {
    var newDate = new Date(selectedDate.valueOf() + 1000 * 60 * 60 * 24);
    setDate(newDate);
    onChangeDay();
  };

  return React.createElement("div", {
    className: "timeContainer"
  }, React.createElement("div", {
    className: "time_day-block time_day-name"
  }, React.createElement("div", {
    className: "time_day-name__items time_day__weekday"
  }, weekDays[selectedDate.getDay()]), React.createElement("div", {
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: showCalendar,
    className: "time_day-name__items time_day__button-calendar"
  }, React.createElement(CalendarToday, null))), React.createElement("div", {
    className: "time_day-block time_day-slider"
  }, React.createElement("div", {
    className: "time_day__button",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: getPrevDay
  }, React.createElement(ArrowLeft, null)), React.createElement("div", {
    className: "time_day__date"
  }, "".concat(selectedDate.getDate(), " ").concat(month[selectedDate.getMonth()])), React.createElement("div", {
    className: "time_day__button",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: getNextDay
  }, React.createElement(ArrowRight, null))), React.createElement(TimeDisplay, timeProps), React.createElement("div", {
    className: "time_day-block time_day_confirm-block"
  }, React.createElement("div", {
    onClick: onCancel,
    className: "time_day__button  time_day__button-cancel",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), React.createElement("div", {
    onClick: function onClick() {
      if (selectedTime) {
        confirmDate();
      }
    },
    className: "time_day__button time_day__button-confirm  ".concat(selectedTime === null ? 'time_day__button-disabled' : ''),
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")));
};

Time.propTypes = {
  weekDays: PropTypes.array,
  selectedTime: PropTypes.object,
  disabledTime: PropTypes.object,
  onTimeClick: PropTypes.func,
  month: PropTypes.array,
  onCancel: PropTypes.func,
  confirmDate: PropTypes.func,
  showCalendar: PropTypes.func,
  setDate: PropTypes.func
};
Time.defaultProps = {
  disabledTime: [0, 1, 2, 3, 4, 5, 6, 7, 21, 22, 23]
};
export default Time;