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
}, {
  label: 'Воскресенье',
  shortLabel: 'Вс',
  value: 'sun'
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
export var recoveryDataForWorkTime = function recoveryDataForWorkTime(data) {
  var res = [];

  if (_typeof(data) === 'object') {
    Object.keys(data).forEach(function (i) {
      var day = _typeof(data[i]) === ('object' || 'string') ? Object.keys(typeof data[i] === 'string' ? JSON.parse(data[i]) : data[i]) : [];
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
export var formatHours = function formatHours(hour) {
  return "".concat(hour.toString().length < 2 ? "0".concat(hour) : hour, ":00");
};
export var getWorkPeriodsOfDay = function getWorkPeriodsOfDay(dayData) {
  var periods = _reduce(dayData, function (memo, hour) {
    var formatedHours = _parseInt(hour);

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

  var formatedPeriods = _map(periods, function (period) {
    return "".concat(formatHours(period.from), " - ").concat(formatHours(period.to));
  });

  return formatedPeriods.join(' / ');
};