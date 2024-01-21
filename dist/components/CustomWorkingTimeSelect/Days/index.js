"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _calendar = require("../../../helpers/calendar");
var _core = require("@material-ui/core");
var _ArrowForwardIos = _interopRequireDefault(require("@material-ui/icons/ArrowForwardIos"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DAY_MS = 60 * 1000 * 60 * 24;
const getPrevMonth = curentDay => {
  const date = new Date(curentDay);
  date.setMonth(date.getMonth() - 1);
  return date;
};
const getNextMonth = curentDay => {
  const date = new Date(curentDay);
  date.setMonth(date.getMonth() + 1);
  return date;
};
const Days = _ref => {
  let {
    curentDay,
    setCurentDay
  } = _ref;
  const firstDayMs = curentDay.valueOf() - curentDay.getDay() * DAY_MS;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.monthTitle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.month
  }, _calendar.MONTHS[new Date(firstDayMs).getMonth()]), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.year
  }, curentDay.getFullYear()), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.buttons
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: () => {
      setCurentDay(getPrevMonth(curentDay));
    }
  }, /*#__PURE__*/_react.default.createElement(_ArrowForwardIos.default, {
    htmlColor: "#000",
    style: {
      transform: 'rotate(180deg)',
      fontSize: 18
    }
  })), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: () => {
      setCurentDay(getNextMonth(curentDay));
    }
  }, /*#__PURE__*/_react.default.createElement(_ArrowForwardIos.default, {
    style: {
      fontSize: 18
    },
    htmlColor: "#000"
  })))));
};
Days.propTypes = {
  curentDay: _propTypes.default.instanceOf(Date),
  setCurentDay: _propTypes.default.func.isRequired
};
var _default = exports.default = Days;