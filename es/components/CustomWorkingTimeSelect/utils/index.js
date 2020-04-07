function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { getPermanentWorkingPeriods, getCustomTimePeriods, getBookedTimePeriods } from '../../../helpers/periodsPrepare.v2.js';
export { getDataForSelectedDate } from '../../../helpers/curentDayPrepare.v2.js';
export { prepareWorkingTimeIntervals, recoveryWorkingTimeIntervals, convertColRowToCustomTime } from '../../../helpers/calendar';
export var workingTimePrepare = function workingTimePrepare(_ref) {
  var workingTimeDay = _ref.workingTimeDay,
      customTimeDay = _ref.customTimeDay,
      bookedTimeDay = _ref.bookedTimeDay,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 15 : _ref$interval,
      curentDay = _ref.curentDay;
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
  return {
    interval: interval,
    curentDay: curentDay,
    permanentWorkingIntervals: permanentWorkingIntervals,
    customTimePeriods: customTimePeriods,
    bookedTimePeriods: bookedTimePeriods
  };
};
export var getBookingTime = function getBookingTime(_ref2) {
  var startWeekDay = _ref2.startWeekDay,
      bookedTime = _ref2.bookedTime,
      interval = _ref2.interval,
      startTime = _ref2.startTime;
  return bookedTime.reduce(function (acc, item, index) {
    item.forEach(function (i) {
      var row = Math.ceil((i - startTime) / interval) + 1;
      var col = index % 7 + 1;
      acc = [].concat(_toConsumableArray(acc), [{
        col: col,
        row: row
      }]);
    });
    return acc;
  }, []);
};