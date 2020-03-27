import React from 'react';
import PropTypes from 'prop-types';
import { WEEKDAYS_LONG, MONTHS } from '../../utils/config';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { IconButton } from '@material-ui/core';
import './style.scss';

var Day = function Day(_ref) {
  var workingTimeActual = _ref.workingTimeActual,
      setCurentDay = _ref.setCurentDay,
      curentDay = _ref.curentDay,
      selectDate = _ref.selectDate,
      selectedDate = _ref.selectedDate,
      setShowTime = _ref.setShowTime,
      onCancel = _ref.onCancel,
      _ref$disableBeforeCur = _ref.disableBeforeCurentTime,
      disableBeforeCurentTime = _ref$disableBeforeCur === void 0 ? true : _ref$disableBeforeCur,
      _ref$onConfirm = _ref.onConfirm,
      onConfirm = _ref$onConfirm === void 0 ? function () {} : _ref$onConfirm,
      _ref$autoConfirm = _ref.autoConfirm,
      autoConfirm = _ref$autoConfirm === void 0 ? true : _ref$autoConfirm;
  var workingTimeActualFiltered = disableBeforeCurentTime ? function () {
    var today = new Date();
    var minutes = curentDay.getFullYear() === today.getFullYear() && curentDay.getMonth() === today.getMonth() && curentDay.getDate() === today.getDate() && today.getHours() * 60 + today.getMinutes();
    return workingTimeActual.filter(function (i) {
      return i.start > minutes;
    });
  }() : workingTimeActual;

  var getPrevDay = function getPrevDay() {
    var newDate = new Date(curentDay.valueOf() - 1000 * 60 * 60 * 24);
    setCurentDay(newDate);
  };

  var getNextDay = function getNextDay() {
    var newDate = new Date(curentDay.valueOf() + 1000 * 60 * 60 * 24);
    setCurentDay(newDate);
  };

  var onClickDay = function onClickDay(item) {
    var day = new Date(curentDay);
    day.setMinutes(item.minutes);
    day.setHours(item.hour);
    day.setSeconds(0);
    selectDate(day);

    if (autoConfirm) {
      onConfirm(day);
    }
  };

  var checkSelected = function checkSelected(item) {
    return curentDay.getFullYear() === selectedDate.getFullYear() && curentDay.getMonth() === selectedDate.getMonth() && curentDay.getDate() === selectedDate.getDate() && item.hour === selectedDate.getHours() && item.minutes === selectedDate.getMinutes();
  };

  return React.createElement("div", {
    className: "timeContainer"
  }, React.createElement("div", {
    className: "time_day-block time_day-name"
  }, React.createElement("div", {
    className: "time_day-name__items time_day__weekday"
  }, WEEKDAYS_LONG[curentDay.getDay()]), React.createElement("div", {
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: setShowTime,
    className: "time_day-name__items time_day__button-calendar"
  }, React.createElement(CalendarToday, null))), React.createElement("div", {
    className: "time_day-block time_day-slider"
  }, React.createElement(IconButton, {
    size: "small",
    className: "time_day__button",
    role: "button",
    tabIndex: "-1",
    disabled: disableBeforeCurentTime && curentDay < new Date(),
    onKeyDown: function onKeyDown() {},
    onClick: getPrevDay
  }, React.createElement(ArrowLeft, null)), React.createElement("div", {
    className: "time_day__date"
  }, "".concat(curentDay.getDate(), " ").concat(MONTHS[curentDay.getMonth()])), React.createElement(IconButton, {
    size: "small",
    className: "time_day__button",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: getNextDay
  }, React.createElement(ArrowRight, null))), React.createElement("div", {
    className: workingTimeActualFiltered.length > 0 ? 'time_grid' : 'time_grid empty'
  }, workingTimeActualFiltered.length > 0 ? workingTimeActualFiltered.map(function (item) {
    var minutes = item.minutes.toString();
    minutes = minutes.length == 1 ? "0".concat(minutes) : minutes;
    return React.createElement("div", {
      onClick: function onClick() {
        return onClickDay(item);
      },
      className: ['time_grid__item', checkSelected(item) ? 'time_grid__item-selected' : ''].join(' '),
      key: item.start + '_index'
    }, "".concat(item.hour, ":").concat(minutes));
  }) : React.createElement("div", {
    className: 'emptyDay_shedule'
  }, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F")), !autoConfirm && React.createElement("div", {
    className: "time_day-block time_day_confirm-block"
  }, React.createElement("div", {
    onClick: onCancel,
    className: "time_day__button  time_day__button-cancel",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), React.createElement("div", {
    onClick: function onClick() {
      if (selectedDate) {
        onConfirm(selectedDate);
      }
    },
    className: "time_day__button time_day__button-confirm  ".concat(selectedDate === null ? 'time_day__button-disabled' : ''),
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")));
};

Day.propTypes = {
  workingTimeActual: PropTypes.array.isRequired,
  setCurentDay: PropTypes.func.isRequired,
  curentDay: PropTypes.object,
  selectDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
  setShowTime: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  autoConfirm: PropTypes.bool,
  disableBeforeCurentTime: PropTypes.bool
};
export default Day;