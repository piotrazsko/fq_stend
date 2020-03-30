function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { DAYS_OF_WEEK, getObjectOfPeriods } from '../../../helpers/calendar';

var strPrepare = function strPrepare(min) {
  var hours = Math.floor(min / 60).toString();
  var mins = (min % 60).toString();
  return "".concat(hours.length == 1 ? '0' + hours : hours, ":").concat(mins.length == 1 ? '0' + mins : mins);
};

export var prepareWorkingTimeIntervals = function prepareWorkingTimeIntervals(_ref) {
  var data = _ref.data,
      startWeekDay = _ref.startWeekDay,
      interval = _ref.interval,
      startTime = _ref.startTime;
  var sortedData = data.sort(function (a, b) {
    return a.col - b.col;
  });
  var res = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
  };
  DAYS_OF_WEEK.forEach(function (item, i) {
    var rows = sortedData.filter(function (item) {
      return item.col === i;
    }).map(function (item) {
      return item.row;
    });
    var fromTo = getObjectOfPeriods(_toConsumableArray(rows), interval, startTime);
    res[item.value] = fromTo.map(function (item) {
      var start = (item.from - 1) * interval + startTime;
      var end = (item.to - 1) * interval + startTime;
      return {
        start: "".concat(strPrepare(start)),
        end: "".concat(strPrepare(end))
      };
    });
  });
  return res;
};
export var recoveryWorkingTimeIntervals = function recoveryWorkingTimeIntervals(_ref2) {
  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
  } : _ref2$data,
      interval = _ref2.interval,
      _ref2$startTime = _ref2.startTime,
      startTime = _ref2$startTime === void 0 ? 0 : _ref2$startTime,
      _ref2$startWeekDay = _ref2.startWeekDay,
      startWeekDay = _ref2$startWeekDay === void 0 ? 0 : _ref2$startWeekDay;
  var res = [];

  if (_typeof(data) === 'object' && data !== null) {
    var _loop = function _loop(index) {
      var day = data[DAYS_OF_WEEK[(index + startWeekDay) % 7].value] || [];
      var arr = day.reduce(function (acc, item) {
        var start = item.start.split(':');
        var end = item.end.split(':');
        var startWorkingTime = start[0] * 60 + parseInt(start[1]);
        var endWorkingTime = end[0] * 60 + parseInt(end[1]);

        for (var j = Math.floor(startWorkingTime / interval); j < Math.floor(endWorkingTime / interval); j++) {
          var col = index % 7 + 1;
          acc = [].concat(_toConsumableArray(acc), [{
            col: col,
            row: j + 1 - Math.floor(startTime / interval) || 1
          }]);
        }

        return acc;
      }, []);
      res = [].concat(_toConsumableArray(res), _toConsumableArray(arr));
    };

    for (var index = startWeekDay; index < DAYS_OF_WEEK.length + startWeekDay; index++) {
      _loop(index);
    }
  }

  return res;
};