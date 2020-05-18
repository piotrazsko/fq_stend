function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import moment from 'moment';

var reduceIntervals = function reduceIntervals(arr, interval) {
  return arr.reduce(function (acc, item) {
    var startTimeArr = item.start.match(/^.{1,2}:..:../gm) ? item.start.split(':') : function () {
      var time = new Date(moment(item.start).toDate());
      return [time.getHours().toString(), time.getMinutes().toString()];
    }();
    var endTimeArr = item.end.match(/^.{1,2}:..:../gm) ? item.end.split(':') : function () {
      var time = new Date(moment(item.end).toDate());
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

export var getPermanentWorkingPeriods = function getPermanentWorkingPeriods(_ref) {
  var workingTimeDay = _ref.workingTimeDay,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 60 : _ref$interval;
  return workingTimeDay && Object.keys(workingTimeDay).length > 0 ? reduceIntervals(workingTimeDay, interval) : [];
};
export var getCustomTimePeriods = function getCustomTimePeriods(_ref2) {
  var customTimeDay = _ref2.customTimeDay,
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 60 : _ref2$interval;
  return {
    enabled: customTimeDay.enabled ? reduceIntervals(customTimeDay.enabled, interval) : [],
    disabled: customTimeDay.disabled ? reduceIntervals(customTimeDay.disabled, interval) : []
  };
};
export var getBookedTimePeriods = function getBookedTimePeriods(_ref3) {
  var bookedTimeDay = _ref3.bookedTimeDay,
      _ref3$interval = _ref3.interval,
      interval = _ref3$interval === void 0 ? 60 : _ref3$interval;
  return bookedTimeDay.reduce(function (acc, item) {
    var date = new Date(moment(item.date).toDate());
    var startTime = date.getHours() * 60 + date.getMinutes();
    var externalItervals = Math.floor(item.duration / interval); // TODO:  need check it for calnedar

    for (var i = 0; i <= externalItervals; i++) {
      acc = [].concat(_toConsumableArray(acc), [startTime + i * interval]);
    }

    return _toConsumableArray(acc);
  }, []);
};