import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { MONTHS, WEEKDAYS_SHORT } from '../../../../helpers/config';
var style = {
  "datapicker": "style-module_fq_datapicker___1IAIn"
};
import 'react-day-picker/lib/style.css';
var yesterday = new Date();
yesterday.setDate(new Date().getDate() - 1);
yesterday.setHours(12);
yesterday.setMinutes(0);
yesterday.setSeconds(0);
yesterday.setMilliseconds(0);

var Month = function Month(_ref) {
  var curentDay = _ref.curentDay,
      setCurentDay = _ref.setCurentDay,
      setShowTime = _ref.setShowTime,
      _ref$disableBeforeCur = _ref.disableBeforeCurentTime,
      disableBeforeCurentTime = _ref$disableBeforeCur === void 0 ? true : _ref$disableBeforeCur,
      disabledDaysFunction = _ref.disabledDays;
  var disabledDays = disableBeforeCurentTime ? function (date) {
    return date <= yesterday || disabledDaysFunction(date).length == 0;
  } : [];
  return React.createElement(DayPicker, {
    onMonthChange: function onMonthChange(month) {
      var day = new Date(curentDay);
      day.setMonth(month.getMonth());
    },
    onDayClick: function onDayClick(day, modifiers) {
      if (!modifiers.disabled) {
        setCurentDay(day);
        setShowTime();
      }
    },
    disabledDays: disabledDays,
    locale: "ru",
    firstDayOfWeek: 1,
    selectedDays: [curentDay],
    className: style.datapicker,
    weekdaysShort: WEEKDAYS_SHORT,
    months: MONTHS
  });
};

Month.propTypes = {
  curentDay: PropTypes.object.isRequired,
  setCurentDay: PropTypes.func.isRequired,
  setShowTime: PropTypes.func.isRequired,
  disableBeforeCurentTime: PropTypes.bool,
  disabledDays: PropTypes.func
};
export default Month;