function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import moment from 'moment';
export var getCustomDisabledTime = function getCustomDisabledTime(customTime, currentDay) {
  var disabledTime = customTimePrepare(customTime).disabledTime;
  return disabledTime.filter(function (item) {
    return item.toDateString() === currentDay.toDateString();
  });
};
export var getCustomEnabledTime = function getCustomEnabledTime(customTime, currentDay) {
  var enabledTime = customTimePrepare(customTime).enabledTime;
  return enabledTime.filter(function (item) {
    return item.toDateString() === currentDay.toDateString();
  });
};

function customTimePrepare(time) {
  var res = {
    disabledTime: [],
    enabledTime: []
  };
  res.disabledTime = _toConsumableArray(time.map(function (item) {
    var date = moment(item.date);
    return item.time_disable.map(function (i) {
      var time = new Date(date);
      var timeHalf = new Date(date);
      time.setHours(i);
      timeHalf.setHours(i);
      timeHalf.setMinutes(30);
      return i !== '' ? [time, timeHalf] : [];
    }).flat();
  }).flat());
  res.enabledTime = _toConsumableArray(time.map(function (item) {
    var date = moment(item.date);
    return item.time_enable.map(function (i) {
      var time = new Date(date);
      var timeHalf = new Date(date);
      time.setHours(i);
      timeHalf.setHours(i);
      timeHalf.setMinutes(30);
      return i !== '' ? [time, timeHalf] : [];
    }).flat();
  }).flat());
  return res;
}