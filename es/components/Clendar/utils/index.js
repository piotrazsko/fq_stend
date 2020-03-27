function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*global  Set*/
import { getPermanentWorkingPeriods, getCustomTimePeriods, getBookedTimePeriods } from './periodsPrepare.v2.js';
export { getDataForSelectedDate } from './curentDayPrepare.v2.js';
export var workingTimePrepare = function workingTimePrepare(_ref) {
  var workingTimeDay = _ref.workingTimeDay,
      customTimeDay = _ref.customTimeDay,
      bookedTimeDay = _ref.bookedTimeDay,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 15 : _ref$interval;
  var permanentWorkingIntervals = getPermanentWorkingPeriods({
    workingTimeDay: workingTimeDay,
    interval: interval
  });
  var customTimePeriods = getCustomTimePeriods({
    customTimeDay: customTimeDay,
    interval: interval
  });
  var bookedTimePeriods = getBookedTimePeriods({
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