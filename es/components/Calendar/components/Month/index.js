import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { WEEKDAYS_LONG, MONTHS, WEEKDAYS_SHORT } from '../../../../helpers/config';
var style = {
  "datapicker": "style-module_fq_datapicker___1IAIn"
};
import 'react-day-picker/lib/style.css';
var yeaterday = new Date().setDate(new Date().getDate() - 1);

var Month = function Month(_ref) {
  var curentDay = _ref.curentDay,
      setCurentDay = _ref.setCurentDay,
      setShowTime = _ref.setShowTime,
      disableBeforeCurentTime = _ref.disableBeforeCurentTime;
  var disabledDays = disableBeforeCurentTime ? function (date) {
    return date < yeaterday;
  } : [];
  return React.createElement(DayPicker, {
    onMonthChange: function onMonthChange(month) {
      var day = new Date(curentDay);
      day.setMonth(month.getMonth());
    },
    onDayClick: function onDayClick(day) {
      setCurentDay(day);
      setShowTime();
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
  disableBeforeCurentTime: PropTypes.bool
};
export default Month;