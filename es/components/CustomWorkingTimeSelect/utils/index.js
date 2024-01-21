"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookingTime = exports.getArrayOfstrDatesByColRow = exports.convertCustomTimeToColRowObj = exports.convertColRowToCustomTime = exports.addRealDate = void 0;
Object.defineProperty(exports, "getDataForSelectedDate", {
  enumerable: true,
  get: function () {
    return _curentDayPrepareV.getDataForSelectedDate;
  }
});
exports.getRealDateByColRowObj = exports.getRealDateByColRow = exports.getFirstWeekDayByDate = void 0;
Object.defineProperty(exports, "prepareWorkingTimeIntervals", {
  enumerable: true,
  get: function () {
    return _calendar.prepareWorkingTimeIntervals;
  }
});
Object.defineProperty(exports, "recoveryWorkingTimeIntervals", {
  enumerable: true,
  get: function () {
    return _calendar.recoveryWorkingTimeIntervals;
  }
});
exports.workingTimePrepare = void 0;
var _calendar = require("../../../helpers/calendar");
var _moment = _interopRequireDefault(require("moment"));
var _periodsPrepareV = require("../../../helpers/periodsPrepare.v2.js");
var _curentDayPrepareV = require("../../../helpers/curentDayPrepare.v2.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*global   Map*/

const DAY_MS = 60 * 1000 * 60 * 24;
const workingTimePrepare = _ref => {
  let {
    workingTimeDay,
    customTimeDay,
    bookedTimeDay,
    interval = 15,
    curentDay
  } = _ref;
  const permanentWorkingIntervals = (0, _periodsPrepareV.getPermanentWorkingPeriods)({
    workingTimeDay,
    interval
  });
  const customTimePeriods = (0, _periodsPrepareV.getCustomTimePeriods)({
    customTimeDay,
    interval
  });
  const bookedTimePeriods = (0, _periodsPrepareV.getBookedTimePeriods)({
    bookedTimeDay,
    interval
  });
  return {
    interval,
    curentDay,
    permanentWorkingIntervals,
    customTimePeriods,
    bookedTimePeriods
  };
};
exports.workingTimePrepare = workingTimePrepare;
const getBookingTime = _ref2 => {
  let {
    bookedTime,
    interval,
    startTime
  } = _ref2;
  return bookedTime.reduce((acc, item, index) => {
    item.forEach(i => {
      const row = Math.ceil((i - startTime) / interval) + 1;
      const col = index % 7 + 1;
      acc = [...acc, {
        col: col,
        row
      }];
    });
    return acc;
  }, []);
};
exports.getBookingTime = getBookingTime;
const getRealDateByColRowObj = _ref3 => {
  let {
    item,
    interval,
    startTime,
    startWeekDay,
    rowOffset = 1,
    colOffset = 1,
    onlyDate = true
  } = _ref3;
  const date = new Date(item.curentDay);
  const dayOfWeek = date.getDay();
  const curentDayCol = dayOfWeek + colOffset - startWeekDay;
  return new Date(item.curentDay - (curentDayCol - item.col) * DAY_MS + (!onlyDate ? 1000 * 60 * (startTime + (item.row - rowOffset) * interval) : 0));
};
exports.getRealDateByColRowObj = getRealDateByColRowObj;
const getFirstWeekDayByDate = _ref4 => {
  let {
    date: inputDate,
    startWeekDay
  } = _ref4;
  const date = new Date(inputDate);
  const dayOfWeek = date.getDay();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  const diff = dayOfWeek - startWeekDay;
  return new Date(date.valueOf() - (diff >= 0 ? diff : diff + 7) * DAY_MS);
};
exports.getFirstWeekDayByDate = getFirstWeekDayByDate;
const getRealDateByColRow = _ref5 => {
  let {
    col,
    row,
    interval,
    startTime,
    rowOffset = 1,
    colOffset = 1,
    firstWeekDayDate
  } = _ref5;
  const date = firstWeekDayDate.valueOf() + (col - colOffset) * DAY_MS + interval * 1000 * 60 * (row - rowOffset) + startTime * 60 * 1000;
  return new Date(date);
};
exports.getRealDateByColRow = getRealDateByColRow;
const addRealDate = _ref6 => {
  let {
    data,
    interval,
    startTime,
    startWeekDay
  } = _ref6;
  return data.map(item => {
    return {
      ...item,
      curentDate: getRealDateByColRowObj({
        item,
        interval,
        startTime,
        startWeekDay
      }),
      curentTimeReal: getRealDateByColRowObj({
        item,
        interval,
        startTime,
        startWeekDay,
        onlyDate: false
      })
    };
  }).sort((a, b) => a.curentDate.valueOf() - b.curentDate.valueOf());
};
exports.addRealDate = addRealDate;
const getArrayOfstrDatesByColRow = _ref7 => {
  let {
    data,
    interval,
    startTime,
    rowOffset = 1
  } = _ref7;
  const map = new Map();
  const res = [];
  data.forEach(item => {
    const arr = map.get(item.itemTime.toDateString());
    map.set(item.itemTime.toDateString(), [...(Array.isArray(arr) ? arr : []), item]);
  });
  map.forEach((item, index) => {
    (0, _calendar.getObjectOfPeriods)(item.map(i => i.row - rowOffset).sort((a, b) => a - b)).forEach(i => {
      const day = new Date(index);
      const start = "".concat((0, _moment.default)(day).format('YYYY-MM-DD'), " ").concat((0, _calendar.strPrepare)(i.from * interval + startTime));
      const end = "".concat((0, _moment.default)(day).format('YYYY-MM-DD'), " ").concat((0, _calendar.strPrepare)(i.to * interval + startTime));
      res.push({
        start,
        end
      });
    });
  });
  return res;
};
exports.getArrayOfstrDatesByColRow = getArrayOfstrDatesByColRow;
const convertColRowToCustomTime = _ref8 => {
  let {
    data = [],
    interval,
    startTime,
    startWeekDay
  } = _ref8;
  const enabled = data.filter(item => !item.disabled);
  const disabled = data.filter(item => item.disabled);
  return {
    enabled: getArrayOfstrDatesByColRow({
      data: enabled,
      interval,
      startTime,
      startWeekDay
    }),
    disabled: getArrayOfstrDatesByColRow({
      data: disabled,
      interval,
      startTime,
      startWeekDay
    })
  };
};
exports.convertColRowToCustomTime = convertColRowToCustomTime;
const convertCustomTimeToColRowObj = _ref9 => {
  let {
    interval,
    startTime,
    startWeekDay,
    colOffset = 1,
    rowOffset = 1,
    customTimeIntervals
  } = _ref9;
  const resPrepare = function () {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    return !Array.isArray(arr) ? [] : arr.reduce((acc, item) => {
      const start = new Date((0, _moment.default)(item.start).toDate());
      const startHour = start.getHours();
      const startMinutes = start.getMinutes();
      const day = start.getDay();
      const duration = (new Date((0, _moment.default)(item.end).toDate()).valueOf() - start.valueOf()) / (1000 * 60);
      return [...acc, ...new Array(Math.ceil(duration / interval)).fill('1').map((item, index) => {
        return {
          itemTime: start,
          startWeekDay: getFirstWeekDayByDate({
            date: start,
            startWeekDay
          }),
          col: (day - startWeekDay + 7) % 7 + colOffset,
          disabled: callback(),
          row: Math.floor((startHour * 60 + startMinutes - startTime) / interval) + index + rowOffset
        };
      })];
    }, []);
  };
  return [...resPrepare(customTimeIntervals.enabled, () => false), ...resPrepare(customTimeIntervals.disabled, () => true)];
};
exports.convertCustomTimeToColRowObj = convertCustomTimeToColRowObj;