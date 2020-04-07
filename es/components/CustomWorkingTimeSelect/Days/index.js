import React from 'react';
import PropTypes from 'prop-types';
import { MONTHS } from '../../../helpers/calendar';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
var style = {
  "monthTitle": "style-module_fq_monthTitle___12gCN",
  "month": "style-module_fq_month___1y-pd",
  "year": "style-module_fq_year___1Q8No",
  "buttons": "style-module_fq_buttons___1jN5f"
};
var DAY_MS = 60 * 1000 * 60 * 24;

var getPrevMonth = function getPrevMonth(curentDay) {
  var date = new Date(curentDay);
  date.setMonth(date.getMonth() - 1);
  return date;
};

var getNextMonth = function getNextMonth(curentDay) {
  var date = new Date(curentDay);
  date.setMonth(date.getMonth() + 1);
  return date;
};

var Days = function Days(_ref) {
  var curentDay = _ref.curentDay,
      setCurentDay = _ref.setCurentDay;
  var firstDayMs = curentDay.valueOf() - curentDay.getDay() * DAY_MS;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: style.monthTitle
  }, React.createElement("div", {
    className: style.month
  }, MONTHS[new Date(firstDayMs).getMonth()]), React.createElement("div", {
    className: style.year
  }, curentDay.getFullYear()), React.createElement("div", {
    className: style.buttons
  }, React.createElement(IconButton, {
    size: "small",
    onClick: function onClick() {
      setCurentDay(getPrevMonth(curentDay));
    }
  }, React.createElement(ArrowForwardIosIcon, {
    htmlColor: "#000",
    style: {
      transform: 'rotate(180deg)',
      fontSize: 18
    }
  })), React.createElement(IconButton, {
    size: "small",
    onClick: function onClick() {
      setCurentDay(getNextMonth(curentDay));
    }
  }, React.createElement(ArrowForwardIosIcon, {
    style: {
      fontSize: 18
    },
    htmlColor: "#000"
  })))));
};

Days.propTypes = {
  curentDay: PropTypes.instanceOf(Date),
  setCurentDay: PropTypes.func.isRequired
};
export default Days;