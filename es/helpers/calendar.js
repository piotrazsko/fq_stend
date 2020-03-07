import _map from "lodash/map";
import _findIndex from "lodash/findIndex";
import _parseInt from "lodash/parseInt";
import _reduce from "lodash/reduce";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
export var prepareCalendarToWeekDaysView = function prepareCalendarToWeekDaysView(data) {
  console.log(data);
};
export var prepareCalendarToWorkingView = function prepareCalendarToWorkingView(data) {
  console.log(data);
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