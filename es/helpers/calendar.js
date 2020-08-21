"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recoveryWorkingTimeIntervals = exports.prepareWorkingTimeIntervals = exports.strPrepare = exports.getWorkPeriodsOfDay = exports.getObjectOfPeriods = exports.formatHours = exports.recoveryDataForWorkTime = exports.preppareDataforWorkTime = exports.DAYS_OF_WEEK = exports.WEEKDAYS_ENG_RUS = exports.WEEKDAYS_SHORT = exports.WEEKDAYS_LONG = exports.MONTHS = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DAY_MS = 60 * 1000 * 60 * 24;
var MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
exports.MONTHS = MONTHS;
var WEEKDAYS_LONG = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
exports.WEEKDAYS_LONG = WEEKDAYS_LONG;
var WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
exports.WEEKDAYS_SHORT = WEEKDAYS_SHORT;
var WEEKDAYS_ENG_RUS = [{
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
exports.WEEKDAYS_ENG_RUS = WEEKDAYS_ENG_RUS;
var DAYS_OF_WEEK = [{
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
exports.DAYS_OF_WEEK = DAYS_OF_WEEK;

var preppareDataforWorkTime = function preppareDataforWorkTime(data) {
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

exports.preppareDataforWorkTime = preppareDataforWorkTime;

var recoveryDataForWorkTime = function recoveryDataForWorkTime() {
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

exports.recoveryDataForWorkTime = recoveryDataForWorkTime;

var formatHours = function formatHours(row, interval, startTime) {
  var hour = Math.floor((startTime + interval * (row - 1)) / 60);
  hour = hour >= 24 ? hour - 24 : hour;
  var minutes = ((startTime + interval * (row - 1)) % 60).toString();
  return "".concat(hour.toString().length < 2 ? "0".concat(hour) : hour, ":").concat(minutes.length === 1 ? '0' + minutes : minutes);
};

exports.formatHours = formatHours;

var getObjectOfPeriods = function getObjectOfPeriods(dayData) {
  return _lodash.default.reduce(dayData, function (memo, row) {
    var formatedHours = _lodash.default.parseInt(row);

    var prevPeriodIndex = _lodash.default.findIndex(memo, {
      to: formatedHours
    });

    if (prevPeriodIndex > -1) {
      memo[prevPeriodIndex] = _objectSpread(_objectSpread({}, memo[prevPeriodIndex]), {}, {
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

exports.getObjectOfPeriods = getObjectOfPeriods;

var getWorkPeriodsOfDay = function getWorkPeriodsOfDay(dayData, interval, startTime) {
  var periods = getObjectOfPeriods(dayData, interval, startTime);

  var formatedPeriods = _lodash.default.map(periods, function (period) {
    return "".concat(formatHours(period.from, interval, startTime), " - ").concat(formatHours(period.to, interval, startTime));
  });

  return formatedPeriods.join(' / ');
};

exports.getWorkPeriodsOfDay = getWorkPeriodsOfDay;

var strPrepare = function strPrepare(min) {
  var hours = Math.floor(min / 60).toString();
  var mins = (min % 60).toString();
  return "".concat(hours.length == 1 ? '0' + hours : hours, ":").concat(mins.length == 1 ? '0' + mins : mins);
};

exports.strPrepare = strPrepare;

var prepareWorkingTimeIntervals = function prepareWorkingTimeIntervals(_ref) {
  var _ref$startWeekDay = _ref.startWeekDay,
      startWeekDay = _ref$startWeekDay === void 0 ? 1 : _ref$startWeekDay,
      _ref$startCol = _ref.startCol,
      startCol = _ref$startCol === void 0 ? 1 : _ref$startCol,
      data = _ref.data,
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
  DAYS_OF_WEEK.forEach(function (day, index) {
    var i = (index + 7 - startWeekDay) % 7;
    var item = DAYS_OF_WEEK[index];
    var col = i + startCol;
    var rows = Array.from(new Set(data.filter(function (item) {
      return item.col === col;
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

exports.prepareWorkingTimeIntervals = prepareWorkingTimeIntervals;

var recoveryWorkingTimeIntervals = function recoveryWorkingTimeIntervals(_ref2) {
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

exports.recoveryWorkingTimeIntervals = recoveryWorkingTimeIntervals;