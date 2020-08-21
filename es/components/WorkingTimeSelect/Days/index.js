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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Days = function Days(_ref) {
  var selectedTime = _ref.selectedTime,
      interval = _ref.interval,
      startTime = _ref.startTime,
      startWeekDay = _ref.startWeekDay;
  var days = selectedTime.reduce(function (accumulator, item) {
    accumulator[item.col - 1] = accumulator[item.col - 1] ? [].concat(_toConsumableArray(accumulator[item.col - 1]), [item.row]) : [item.row];
    return accumulator;
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, days.map(function (item, index) {
    var sorted = item.sort(function (a, b) {
      return a - b;
    });
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
var _default = Days;
exports.default = _default;