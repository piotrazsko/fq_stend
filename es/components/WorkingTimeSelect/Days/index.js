"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _calendar = require("../../../helpers/calendar");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Days = _ref => {
  let {
    selectedTime,
    interval,
    startTime,
    startWeekDay
  } = _ref;
  const days = selectedTime.reduce((accumulator, item) => {
    accumulator[item.col - 1] = accumulator[item.col - 1] ? [...accumulator[item.col - 1], item.row] : [item.row];
    return accumulator;
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, days.map((item, index) => {
    const sorted = item.sort((a, b) => a - b);
    return item ? /*#__PURE__*/_react.default.createElement("div", {
      key: "day_".concat(index),
      className: _styleModule.default.timeTag
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _styleModule.default.circle
    }, _calendar.WEEKDAYS_SHORT[(index + startWeekDay) % 7]), /*#__PURE__*/_react.default.createElement("div", {
      className: _styleModule.default.time
    }, (0, _calendar.getWorkPeriodsOfDay)(sorted, interval, startTime))) : '';
  }));
};
Days.propTypes = {
  selectedTime: _propTypes.default.array,
  interval: _propTypes.default.number,
  startTime: _propTypes.default.number,
  startWeekDay: _propTypes.default.number
};
var _default = exports.default = Days;