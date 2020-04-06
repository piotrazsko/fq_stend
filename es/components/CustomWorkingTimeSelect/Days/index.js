import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import { WEEKDAYS_SHORT, MONTHS, WEEKDAYS_ENG_RUS, getWorkPeriodsOfDay } from '../../../helpers/calendar';
var style = {
  "dateContainer": "style-module_fq_dateContainer___2sn37",
  "weekDay": "style-module_fq_weekDay___2M2c4",
  "monthDay": "style-module_fq_monthDay___39Knp",
  "beforToday": "style-module_fq_beforToday___UkYxx",
  "firstLastColumn": "style-module_fq_firstLastColumn___Edz_B"
};
import { Paper, IconButton, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
      setCurentDay = _ref.setCurentDay,
      changeCurentDay = _ref.changeCurentDay;
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
  })), React.createElement(IconButton, {
    onClick: function onClick() {
      setCurentDay(new Date(curentDay.valueOf() - 7 * DAY_MS));
    }
  }, React.createElement(ArrowForwardIosIcon, {
    htmlColor: "#000",
    style: {
      transform: 'rotate(180deg)',
      fontSize: 20
    }
  })), "WEEK", React.createElement(IconButton, {
    onClick: function onClick() {
      setCurentDay(new Date(curentDay.valueOf() + 7 * DAY_MS));
    }
  }, React.createElement(ArrowForwardIosIcon, {
    style: {
      fontSize: 20
    },
    htmlColor: "#000"
  })))));
};

Days.propTypes = {
  selectedTime: PropTypes.array,
  interval: PropTypes.number,
  startTime: PropTypes.number,
  startWeekDay: PropTypes.number
};
export default Days;