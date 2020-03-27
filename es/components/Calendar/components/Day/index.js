import React from 'react';
import PropTypes from 'prop-types';
import { WEEKDAYS_LONG, MONTHS } from '../../utils/config';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { IconButton } from '@material-ui/core';
var style = {
  "cell": "style-module_fq_cell___3Cojs",
  "timeContainer": "style-module_fq_timeContainer___1Eaoa",
  "time_day-name": "style-module_fq_time_day-name___3Aze6",
  "time_day-name__items": "style-module_fq_time_day-name__items___183Ks",
  "time_day__weekday": "style-module_fq_time_day__weekday___1vtrg",
  "time_day-slider": "style-module_fq_time_day-slider___1SXSH",
  "time_day__button-calendar": "style-module_fq_time_day__button-calendar___1FlOL",
  "time_day__date": "style-module_fq_time_day__date___1mYSw",
  "time_day-block": "style-module_fq_time_day-block___l3_iz",
  "time_day__button": "style-module_fq_time_day__button___2T1Ps",
  "time_day__button-confirm": "style-module_fq_time_day__button-confirm___3MutT",
  "time_day__button-cancel": "style-module_fq_time_day__button-cancel___2L6_J",
  "time_day__button-disabled": "style-module_fq_time_day__button-disabled___3nUrX",
  "time_day_confirm-block": "style-module_fq_time_day_confirm-block___2T-hA",
  "time_grid__item": "style-module_fq_time_grid__item___1gKKx",
  "time_grid__item-selected": "style-module_fq_time_grid__item-selected___UEejs",
  "time_grid": "style-module_fq_time_grid___3zixG",
  "empty": "style-module_fq_empty___3HaKR",
  "emptyDay_shedule": "style-module_fq_emptyDay_shedule___CSOAb",
  "time_grid__item-disable": "style-module_fq_time_grid__item-disable___2oJ7l"
};

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
    className: style['timeContainer']
  }, React.createElement("div", {
    className: [style['time_day-block'], style['time_day-name']].join(' ')
  }, React.createElement("div", {
    className: [style['time_day-name__items'], style[' time_day__weekday']].join(' ')
  }, WEEKDAYS_LONG[curentDay.getDay()]), React.createElement("div", {
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: setShowTime,
    className: [style['time_day-name__items'], style['time_day__button-calendar']].join(' ')
  }, React.createElement(CalendarToday, null))), React.createElement("div", {
    className: [style['time_day-block'], style['time_day-slider']].join(' ')
  }, React.createElement(IconButton, {
    size: "small",
    className: style['time_day__button'],
    role: "button",
    tabIndex: "-1",
    disabled: disableBeforeCurentTime && curentDay < new Date(),
    onKeyDown: function onKeyDown() {},
    onClick: getPrevDay
  }, React.createElement(ArrowLeft, null)), React.createElement("div", {
    className: style['time_day__date']
  }, "".concat(curentDay.getDate(), " ").concat(MONTHS[curentDay.getMonth()])), React.createElement(IconButton, {
    size: "small",
    className: style['time_day__button'],
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: getNextDay
  }, React.createElement(ArrowRight, null))), React.createElement("div", {
    className: [style['time_grid'], workingTimeActualFiltered.length === 0 ? style['empty'] : ''].join(' ')
  }, workingTimeActualFiltered.length > 0 ? workingTimeActualFiltered.map(function (item) {
    var minutes = item.minutes.toString();
    minutes = minutes.length == 1 ? "0".concat(minutes) : minutes;
    return React.createElement("div", {
      onClick: function onClick() {
        return onClickDay(item);
      },
      className: [style['time_grid__item'], checkSelected(item) ? style['time_grid__item-selected'] : ''].join(' '),
      key: item.start + '_index'
    }, "".concat(item.hour, ":").concat(minutes));
  }) : React.createElement("div", {
    className: style['emptyDay_shedule']
  }, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F")), !autoConfirm && React.createElement("div", {
    className: [style['time_day-block'], style['time_day_confirm-block']].join(' ')
  }, React.createElement("div", {
    onClick: onCancel,
    className: [style['time_day__button'], style['time_day__button-cancel']].join(' '),
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), React.createElement("div", {
    onClick: function onClick() {
      if (selectedDate) {
        onConfirm(selectedDate);
      }
    },
    className: [style["time_day__button"], style["time_day__button-confirm"], selectedDate === null ? style['time_day__button-disabled'] : ''].join(' '),
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