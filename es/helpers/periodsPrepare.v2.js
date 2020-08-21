"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookedTimePeriods = exports.getCustomTimePeriods = exports.getPermanentWorkingPeriods = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var reduceIntervals = function reduceIntervals(arr, interval) {
  return arr.reduce(function (acc, item) {
    var startTimeArr = item.start.match(/^.{1,2}:..($|:..)/gm) ? item.start.split(':') : function () {
      var time = new Date((0, _moment.default)(item.start).toDate());
      return [time.getHours().toString(), time.getMinutes().toString()];
    }();
    var endTimeArr = item.end.match(/^.{1,2}:..($|:..)/gm) ? item.end.split(':') : function () {
      var time = new Date((0, _moment.default)(item.end).toDate());
      var hours = time.getHours();
      return [hours.toString(), time.getMinutes().toString()];
    }();
    endTimeArr[0] = endTimeArr[0] == 0 ? '24' : endTimeArr[0];
    var startTime = startTimeArr[0] * 60 + parseInt(startTimeArr[1]);
    var endTime = endTimeArr[0] * 60 + parseInt(endTimeArr[1]);
    var externalItervals = Math.floor((endTime - startTime) / interval);

    for (var i = 0; i < externalItervals; i++) {
      acc = [].concat(_toConsumableArray(acc), [startTime + i * interval]);
    }

    return acc;
  }, []);
};

var getPermanentWorkingPeriods = function getPermanentWorkingPeriods(_ref) {
  var workingTimeDay = _ref.workingTimeDay,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 60 : _ref$interval;
  return workingTimeDay && Object.keys(workingTimeDay).length > 0 ? reduceIntervals(workingTimeDay, interval) : [];
};

exports.getPermanentWorkingPeriods = getPermanentWorkingPeriods;

var getCustomTimePeriods = function getCustomTimePeriods(_ref2) {
  var customTimeDay = _ref2.customTimeDay,
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 60 : _ref2$interval;
  return {
    enabled: customTimeDay.enabled ? reduceIntervals(customTimeDay.enabled, interval) : [],
    disabled: customTimeDay.disabled ? reduceIntervals(customTimeDay.disabled, interval) : []
  };
};

exports.getCustomTimePeriods = getCustomTimePeriods;

var getBookedTimePeriods = function getBookedTimePeriods(_ref3) {
  var bookedTimeDay = _ref3.bookedTimeDay,
      _ref3$interval = _ref3.interval,
      interval = _ref3$interval === void 0 ? 60 : _ref3$interval;
  return bookedTimeDay.reduce(function (acc, item) {
    var date = new Date((0, _moment.default)(item.date).toDate());
    var startTime = date.getHours() * 60 + date.getMinutes();
    var endTime = startTime + item.duration; // TODO:  need check it for calnedar

    for (var i = startTime; i < endTime; i = i + interval) {
      acc = [].concat(_toConsumableArray(acc), [i]);
    }

    return _toConsumableArray(acc);
  }, []);
};

exports.getBookedTimePeriods = getBookedTimePeriods;