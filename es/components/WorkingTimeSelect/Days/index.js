function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import PropTypes from 'prop-types';
import { WEEKDAYS_SHORT, getWorkPeriodsOfDay } from '../../../helpers/calendar';
var style = {
  "circle": "style-module_fq_circle___sTmOM",
  "timeTag": "style-module_fq_timeTag___36bYN",
  "time": "style-module_fq_time___2Nuis"
};

var Days = function Days(_ref) {
  var selectedTime = _ref.selectedTime;
  var days = selectedTime.reduce(function (accumulator, item) {
    accumulator[item.col - 1] = accumulator[item.col - 1] ? [].concat(_toConsumableArray(accumulator[item.col - 1]), [item.row]) : [item.row];
    return accumulator;
  }, []);
  return React.createElement(React.Fragment, null, days.map(function (item, index) {
    var sorted = item.sort(function (a, b) {
      return a - b;
    });
    return item ? React.createElement("div", {
      key: "day_".concat(index),
      className: style.timeTag
    }, React.createElement("div", {
      className: style.circle
    }, WEEKDAYS_SHORT[index]), ' ', React.createElement("div", {
      className: style.time
    }, getWorkPeriodsOfDay(sorted))) : '';
  }));
};

Days.propTypes = {
  selectedTime: PropTypes.array
};
export default Days;