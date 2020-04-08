function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*global   Map*/
import { getObjectOfPeriods, strPrepare } from '../../../helpers/calendar';
import moment from 'moment';
import { getPermanentWorkingPeriods, getCustomTimePeriods, getBookedTimePeriods } from '../../../helpers/periodsPrepare.v2.js';
export { getDataForSelectedDate } from '../../../helpers/curentDayPrepare.v2.js';
export { prepareWorkingTimeIntervals, recoveryWorkingTimeIntervals } from '../../../helpers/calendar';
var DAY_MS = 60 * 1000 * 60 * 24;
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
  var bookedTime = _ref2.bookedTime,
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
export var getRealDateByColRowObj = function getRealDateByColRowObj(_ref3) {
  var item = _ref3.item,
      interval = _ref3.interval,
      startTime = _ref3.startTime,
      startWeekDay = _ref3.startWeekDay,
      _ref3$rowOffset = _ref3.rowOffset,
      rowOffset = _ref3$rowOffset === void 0 ? 1 : _ref3$rowOffset,
      _ref3$colOffset = _ref3.colOffset,
      colOffset = _ref3$colOffset === void 0 ? 1 : _ref3$colOffset,
      _ref3$onlyDate = _ref3.onlyDate,
      onlyDate = _ref3$onlyDate === void 0 ? true : _ref3$onlyDate;
  var date = new Date(item.curentDay);
  var dayOfWeek = date.getDay();
  var curentDayCol = dayOfWeek + colOffset - startWeekDay;
  return new Date(item.curentDay - (curentDayCol - item.col) * DAY_MS + (!onlyDate ? 1000 * 60 * (startTime + (item.row - rowOffset) * interval) : 0));
};
export var getFirstWeekDayByDate = function getFirstWeekDayByDate(_ref4) {
  var inputDate = _ref4.date,
      startWeekDay = _ref4.startWeekDay;
  var date = new Date(inputDate);
  var dayOfWeek = date.getDay();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  var diff = dayOfWeek - startWeekDay;
  return new Date(date.valueOf() - (diff >= 0 ? diff : diff + 7) * DAY_MS);
};
export var getRealDateByColRow = function getRealDateByColRow(_ref5) {
  var col = _ref5.col,
      row = _ref5.row,
      interval = _ref5.interval,
      startTime = _ref5.startTime,
      _ref5$rowOffset = _ref5.rowOffset,
      rowOffset = _ref5$rowOffset === void 0 ? 1 : _ref5$rowOffset,
      _ref5$colOffset = _ref5.colOffset,
      colOffset = _ref5$colOffset === void 0 ? 1 : _ref5$colOffset,
      firstWeekDayDate = _ref5.firstWeekDayDate;
  var date = firstWeekDayDate.valueOf() + (col - colOffset) * DAY_MS + interval * 1000 * 60 * (row - rowOffset) + startTime * 60 * 1000;
  return new Date(date);
};
export var addRealDate = function addRealDate(_ref6) {
  var data = _ref6.data,
      interval = _ref6.interval,
      startTime = _ref6.startTime,
      startWeekDay = _ref6.startWeekDay;
  return data.map(function (item) {
    return _objectSpread({}, item, {
      curentDate: getRealDateByColRowObj({
        item: item,
        interval: interval,
        startTime: startTime,
        startWeekDay: startWeekDay
      }),
      curentTimeReal: getRealDateByColRowObj({
        item: item,
        interval: interval,
        startTime: startTime,
        startWeekDay: startWeekDay,
        onlyDate: false
      })
    });
  }).sort(function (a, b) {
    return a.curentDate.valueOf() - b.curentDate.valueOf();
  });
};
export var getArrayOfstrDatesByColRow = function getArrayOfstrDatesByColRow(_ref7) {
  var data = _ref7.data,
      interval = _ref7.interval,
      startTime = _ref7.startTime,
      startWeekDay = _ref7.startWeekDay;
  var map = new Map();
  var res = [];
  data.forEach(function (item) {
    var arr = map.get(item.itemTime.toDateString());
    map.set(item.itemTime.toDateString(), [].concat(_toConsumableArray(Array.isArray(arr) ? arr : []), [item]));
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
export var convertColRowToCustomTime = function convertColRowToCustomTime(_ref8) {
  var _ref8$data = _ref8.data,
      data = _ref8$data === void 0 ? [] : _ref8$data,
      interval = _ref8.interval,
      startTime = _ref8.startTime,
      startWeekDay = _ref8.startWeekDay;
  var enabled = data.filter(function (item) {
    return !item.disabled;
  });
  var disabled = data.filter(function (item) {
    return item.disabled;
  });
  return {
    enabled: getArrayOfstrDatesByColRow({
      data: enabled,
      interval: interval,
      startTime: startTime,
      startWeekDay: startWeekDay
    }),
    disabled: getArrayOfstrDatesByColRow({
      data: disabled,
      interval: interval,
      startTime: startTime,
      startWeekDay: startWeekDay
    })
  };
};
export var convertCustomTimeToColRowObj = function convertCustomTimeToColRowObj(_ref9) {
  var interval = _ref9.interval,
      startTime = _ref9.startTime,
      startWeekDay = _ref9.startWeekDay,
      _ref9$colOffset = _ref9.colOffset,
      colOffset = _ref9$colOffset === void 0 ? 1 : _ref9$colOffset,
      _ref9$rowOffset = _ref9.rowOffset,
      rowOffset = _ref9$rowOffset === void 0 ? 1 : _ref9$rowOffset,
      customTimeIntervals = _ref9.customTimeIntervals;

  var resPrepare = function resPrepare() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return !Array.isArray(arr) ? [] : arr.reduce(function (acc, item) {
      var start = new Date(item.start);
      var startHour = start.getHours();
      var startMinutes = start.getMinutes();
      var day = start.getDay();
      var duration = (new Date(item.end).valueOf() - start.valueOf()) / (1000 * 60);
      return [].concat(_toConsumableArray(acc), _toConsumableArray(new Array(Math.ceil(duration / interval)).fill('1').map(function (item, index) {
        return {
          itemTime: start,
          startWeekDay: getFirstWeekDayByDate({
            date: start,
            startWeekDay: startWeekDay
          }),
          col: (day - startWeekDay + 7) % 7 + colOffset,
          disabled: callback(),
          row: Math.floor((startHour * 60 + startMinutes - startTime) / interval) + index + rowOffset
        };
      })));
    }, []);
  };

  return [].concat(_toConsumableArray(resPrepare(customTimeIntervals.enabled, function () {
    return false;
  })), _toConsumableArray(resPrepare(customTimeIntervals.disabled, function () {
    return true;
  })));
};