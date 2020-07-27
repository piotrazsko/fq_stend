"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getDataForSelectedDate", {
  enumerable: true,
  get: function get() {
    return _curentDayPrepareV.getDataForSelectedDate;
  }
});
exports.workingTimePrepare = void 0;

var _periodsPrepareV = require("../../../helpers/periodsPrepare.v2.js");

var _curentDayPrepareV = require("../../../helpers/curentDayPrepare.v2.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var workingTimePrepare = function workingTimePrepare(_ref) {
  var workingTimeDay = _ref.workingTimeDay,
      customTimeDay = _ref.customTimeDay,
      bookedTimeDay = _ref.bookedTimeDay,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 15 : _ref$interval;
  var permanentWorkingIntervals = (0, _periodsPrepareV.getPermanentWorkingPeriods)({
    workingTimeDay: workingTimeDay,
    interval: interval
  });
  var customTimePeriods = (0, _periodsPrepareV.getCustomTimePeriods)({
    customTimeDay: customTimeDay,
    interval: interval
  });
  var bookedTimePeriods = (0, _periodsPrepareV.getBookedTimePeriods)({
    bookedTimeDay: bookedTimeDay,
    interval: interval
  });
  var enabledTime = Array.from(new Set([].concat(_toConsumableArray(permanentWorkingIntervals), _toConsumableArray(customTimePeriods.enabled)))).sort(function (a, b) {
    return a - b;
  }).map(function (item) {
    return {
      start: item,
      end: item + interval,
      hour: Math.floor(item / 60),
      minutes: item % 60
    };
  });
  var disabledTime = Array.from(new Set([].concat(_toConsumableArray(bookedTimePeriods), _toConsumableArray(customTimePeriods.disabled)))).sort(function (a, b) {
    return a - b;
  }).map(function (item) {
    return {
      start: item,
      end: item + interval,
      hour: Math.floor(item / 60),
      minutes: item % 60
    };
  });
  return enabledTime.filter(function (item) {
    return !disabledTime.find(function (disabledItem) {
      return item.start <= disabledItem.start && item.end > disabledItem.start && item.end <= disabledItem.end || item.start >= disabledItem.start && item.start < disabledItem.end && item.end >= disabledItem.end;
    });
  });
};

exports.workingTimePrepare = workingTimePrepare;