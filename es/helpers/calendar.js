import _map from "lodash/map";
import _findIndex from "lodash/findIndex";
import _parseInt from "lodash/parseInt";
import _reduce from "lodash/reduce";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import moment from 'moment';
var DAY_MS = 60 * 1000 * 60 * 24;
export var MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export var WEEKDAYS_LONG = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
export var WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
export var WEEKDAYS_ENG_RUS = [{
  rus: 'Вс',
  eng: 'sun'
}, {
  eng: 'mon',
  rus: 'Пн'
}, {
  eng: 'tue',
  rus: 'Вт'
}, {
  eng: 'wed',
  rus: 'Ср'
}, {
  eng: 'thu',
  rus: 'Чт'
}, {
  eng: 'fri',
  rus: 'Пт'
}, {
  eng: 'sat',
  rus: 'Сб'
}];
export var DAYS_OF_WEEK = [{
  label: 'Воскресенье',
  shortLabel: 'Вс',
  value: 'sun'
}, {
  label: 'Понедельник',
  shortLabel: 'Пн',
  value: 'mon'
}, {
  label: 'Вторник',
  shortLabel: 'Вт',
  value: 'tue'
}, {
  label: 'Среда',
  shortLabel: 'Ср',
  value: 'wed'
}, {
  label: 'Четверг',
  shortLabel: 'Чт',
  value: 'thu'
}, {
  label: 'Пятница',
  shortLabel: 'Пт',
  value: 'fri'
}, {
  label: 'Суббота',
  shortLabel: 'Сб',
  value: 'sat'
}];
export var preppareDataforWorkTime = function preppareDataforWorkTime(data) {
  var res = {
    mon: {},
    tue: {},
    wed: {},
    thu: {},
    fri: {},
    sat: {},
    sun: {}
  };

  if (Array.isArray(data)) {
    data.forEach(function (i) {
      switch (i.col) {
        case 1:
          {
            res.sun[i.row] = 'white';
            break;
          }

        case 2:
          {
            res.mon[i.row] = 'white';
            break;
          }

        case 3:
          {
            res.tue[i.row] = 'white';
            break;
          }

        case 4:
          {
            res.wed[i.row] = 'white';
            break;
          }

        case 5:
          {
            res.thu[i.row] = 'white';
            break;
          }

        case 6:
          {
            res.fri[i.row] = 'white';
            break;
          }

        case 7:
          {
            res.sat[i.row] = 'white';
            break;
          }

        default:
          break;
      }
    });
  }

  return res;
};
export var recoveryDataForWorkTime = function recoveryDataForWorkTime() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    mon: '{}',
    tue: '{}',
    wed: '{}',
    thu: '{}',
    fri: '{}',
    sat: '{}',
    sun: '{}'
  };
  var res = [];

  if (_typeof(data) === 'object' && data !== null) {
    Object.keys(data).forEach(function (i) {
      var day = data[i] !== null && (typeof data[i] === 'string' || _typeof(data[i]) === 'object') ? Object.keys(typeof data[i] === 'string' ? JSON.parse(data[i]) : data[i]) : [];
      day.forEach(function (item) {
        var key = 1;

        switch (i) {
          case 'sun':
            {
              key = 1;
              break;
            }

          case 'mon':
            {
              key = 2;
              break;
            }

          case 'tue':
            {
              key = 3;
              break;
            }

          case 'wed':
            {
              key = 4;
              break;
            }

          case 'thu':
            {
              key = 5;
              break;
            }

          case 'fri':
            {
              key = 6;
              break;
            }

          case 'sat':
            {
              key = 7;
              break;
            }

          default:
            break;
        }

        res = [].concat(_toConsumableArray(res), [{
          col: key,
          row: parseInt(item)
        }]);
      });
    });
  }

  return res;
};
export var formatHours = function formatHours(row, interval, startTime) {
  var hour = Math.floor((startTime + interval * (row - 1)) / 60);
  hour = hour >= 24 ? hour - 24 : hour;
  var minutes = ((startTime + interval * (row - 1)) % 60).toString();
  return "".concat(hour.toString().length < 2 ? "0".concat(hour) : hour, ":").concat(minutes.length === 1 ? '0' + minutes : minutes);
};
export var getObjectOfPeriods = function getObjectOfPeriods(dayData, interval, startTime) {
  return _reduce(dayData, function (memo, row) {
    var formatedHours = _parseInt(row);

    var prevPeriodIndex = _findIndex(memo, {
      to: formatedHours
    });

    if (prevPeriodIndex > -1) {
      memo[prevPeriodIndex] = _objectSpread({}, memo[prevPeriodIndex], {
        to: formatedHours + 1
      });
    } else {
      memo.push({
        from: formatedHours,
        to: formatedHours + 1
      });
    }

    return memo;
  }, []);
};
export var getWorkPeriodsOfDay = function getWorkPeriodsOfDay(dayData, interval, startTime) {
  var periods = getObjectOfPeriods(dayData, interval, startTime);

  var formatedPeriods = _map(periods, function (period) {
    return "".concat(formatHours(period.from, interval, startTime), " - ").concat(formatHours(period.to, interval, startTime));
  });

  return formatedPeriods.join(' / ');
};

var strPrepare = function strPrepare(min) {
  var hours = Math.floor(min / 60).toString();
  var mins = (min % 60).toString();
  return "".concat(hours.length == 1 ? '0' + hours : hours, ":").concat(mins.length == 1 ? '0' + mins : mins);
};

export var prepareWorkingTimeIntervals = function prepareWorkingTimeIntervals(_ref) {
  var data = _ref.data,
      interval = _ref.interval,
      startTime = _ref.startTime;
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
    var rows = Array.from(new Set(data.filter(function (item) {
      return item.col === i;
    }).map(function (item) {
      return item.row;
    }))).sort(function (a, b) {
      return a - b;
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
export var prepareCustomTimeIntervals = function prepareCustomTimeIntervals(_ref2) {
  var data = _ref2.data,
      interval = _ref2.interval,
      startTime = _ref2.startTime,
      startWeekDay = _ref2.startWeekDay;
  var dataWithPreparedDate = data.map(function (item) {
    var date = new Date(item.curentDay);
    var dayOfWeek = date.getDay();
    var curentDayCol = dayOfWeek + 1 - startWeekDay;
    return _objectSpread({}, item, {
      curentDay: new Date(item.curentDay - (curentDayCol - item.col) * DAY_MS)
    });
  }).sort(function (a, b) {
    return a.curentDay.valueOf() - b.curentDay.valueOf();
  });
  var enabled = dataWithPreparedDate.filter(function (item) {
    return !item.disabled;
  });
  var disabled = dataWithPreparedDate.filter(function (item) {
    return item.disabled;
  });
  var res = {
    enabled: [],
    disabled: []
  };

  var getPeriods = function getPeriods(data, interval, startTime) {
    var map = new Map();
    var res = [];
    data.forEach(function (item) {
      var arr = map.get(item.curentDay.valueOf());
      map.set(item.curentDay.valueOf(), [].concat(_toConsumableArray(Array.isArray(arr) ? arr : []), [item]));
    });
    map.forEach(function (item, index) {
      getObjectOfPeriods(item.map(function (i) {
        return i.row - 1;
      }).sort(function (a, b) {
        return a - b;
      })).forEach(function (i) {
        var day = new Date(index);
        var start = "".concat(moment(day).format('YYYY-MM-DD'), " ").concat(strPrepare(i.from * interval + startTime));
        var end = "".concat(moment(day).format('YYYY-MM-DD'), " ").concat(strPrepare(i.to * interval + startTime));
        res.push({
          start: start,
          end: end
        });
      });
    });
    return res;
  };

  res.enabled = getPeriods(enabled, interval, startTime);
  res.disabled = getPeriods(disabled, interval, startTime);
  return res;
};
export var recoveryWorkingTimeIntervals = function recoveryWorkingTimeIntervals(_ref3) {
  var _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
  } : _ref3$data,
      interval = _ref3.interval,
      _ref3$startTime = _ref3.startTime,
      startTime = _ref3$startTime === void 0 ? 0 : _ref3$startTime,
      _ref3$startWeekDay = _ref3.startWeekDay,
      startWeekDay = _ref3$startWeekDay === void 0 ? 0 : _ref3$startWeekDay;
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