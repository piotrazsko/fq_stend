function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Cell from './Cell';
import Days from './Days';
import { recoveryWorkingTimeIntervals, workingTimePrepare, getDataForSelectedDate, convertColRowToCustomTime, getBookingTime } from './utils';
var style = {
  "title": "style-module_fq_title___1dUq-",
  "resultContainer": "style-module_fq_resultContainer___in4He",
  "cellTime": "style-module_fq_cellTime___3w21q",
  "cellDay": "style-module_fq_cellDay___2VHbc",
  "menuItem": "style-module_fq_menuItem___3rsXc",
  "selectedCell": "style-module_fq_selectedCell___1B1Ne",
  "gridContainer": "style-module_fq_gridContainer___1tkST",
  "firstRow": "style-module_fq_firstRow___lFQL8",
  "firstColumn": "style-module_fq_firstColumn___2NXDm",
  "cellCustomDay": "style-module_fq_cellCustomDay___2YUDD",
  "cellCustomDayDisabled": "style-module_fq_cellCustomDayDisabled___2lO-G",
  "reservedTime": "style-module_fq_reservedTime___2amMA"
};
var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
var DAY_MS = 60 * 1000 * 60 * 24;

var weekPrepare = function weekPrepare(_ref) {
  var workingTimeIntervals = _ref.workingTimeIntervals,
      customTimeIntervals = _ref.customTimeIntervals,
      bookedTime = _ref.bookedTime,
      curentDay = _ref.curentDay,
      interval = _ref.interval,
      startWeekDay = _ref.startWeekDay;
  var arr = new Array(7);
  return arr.fill(1).map(function (item, index) {
    var day = new Date(curentDay);
    return workingTimePrepare(_objectSpread({}, getDataForSelectedDate({
      workingTime: workingTimeIntervals,
      customTime: customTimeIntervals,
      bookedTime: bookedTime,
      curentDay: new Date(day.valueOf() - (day.getDay() - index - startWeekDay) * DAY_MS),
      interval: interval
    })));
  });
};

var CustomWorkingTimeSelect = function CustomWorkingTimeSelect(_ref2) {
  var _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange,
      workingTimeIntervals = _ref2.workingTimeIntervals,
      customTimeIntervals = _ref2.customTimeIntervals,
      bookedTime = _ref2.bookedTime,
      _ref2$isMobile = _ref2.isMobile,
      isMobile = _ref2$isMobile === void 0 ? false : _ref2$isMobile,
      _ref2$selectedTimeTex = _ref2.selectedTimeText,
      selectedTimeText = _ref2$selectedTimeTex === void 0 ? '' : _ref2$selectedTimeTex,
      startTime = _ref2.startTime,
      endTime = _ref2.endTime,
      interval = _ref2.interval,
      startWeekDay = _ref2.startWeekDay,
      curentDayDefault = _ref2.curentDay;

  var selectedTime = _toConsumableArray(recoveryWorkingTimeIntervals({
    data: workingTimeIntervals,
    startTime: startTime,
    interval: interval,
    startWeekDay: startWeekDay
  }));

  var _React$useState = React.useState(curentDayDefault),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      curentDay = _React$useState2[0],
      setCurentDay = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedCell = _React$useState4[0],
      setSelected = _React$useState4[1];

  var _React$useState5 = React.useState(weekPrepare({
    workingTimeIntervals: workingTimeIntervals,
    customTimeIntervals: customTimeIntervals,
    bookedTime: bookedTime,
    curentDay: curentDay,
    interval: interval,
    startWeekDay: startWeekDay
  })),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      workingTimeActual = _React$useState6[0],
      setActualWorkingTime = _React$useState6[1];

  console.log(workingTimeActual);
  var bookedTimePrepared = getBookingTime({
    interval: interval,
    startTime: startTime,
    startWeekDay: startWeekDay,
    bookedTime: workingTimeActual.map(function (i) {
      return i.bookedTimePeriods;
    })
  });
  React.useEffect(function () {
    setSelected([]);
  }, [startWeekDay, interval]);
  React.useEffect(function () {
    onChange(convertColRowToCustomTime({
      data: selectedCell,
      interval: interval,
      startTime: startTime,
      startWeekDay: startWeekDay
    }));
  }, [selectedCell]);
  React.useEffect(function () {
    setActualWorkingTime(weekPrepare({
      workingTimeIntervals: workingTimeIntervals,
      customTimeIntervals: customTimeIntervals,
      bookedTime: bookedTime,
      curentDay: curentDay,
      interval: interval,
      startWeekDay: startWeekDay
    }));
  }, [curentDay, startWeekDay, interval, customTimeIntervals]);

  var onSelect = function onSelect(selected) {
    var filtered = selectedCell.filter(function (item) {
      return !selected.find(function (i) {
        return i.col === item.col && i.row === item.row && curentDay.valueOf() === item.curentDay;
      });
    });
    setSelected(filtered.length !== selectedCell.length ? _toConsumableArray(filtered) : [].concat(_toConsumableArray(selectedCell), _toConsumableArray(selected.filter(function (item) {
      return !bookedTimePrepared.find(function (i) {
        return i.col === item.col && i.row === item.row;
      });
    }).map(function (item) {
      return _objectSpread({}, item, {
        curentDay: curentDay.valueOf(),
        disabled: Boolean(selectedTime.find(function (i) {
          return i.col == item.col && item.row == i.row;
        }))
      });
    }))));
  };

  var onClear = function onClear(col) {
    // BUG:  need change algorithm for clean/ now cleaned for all dated in this column
    setSelected(_toConsumableArray(selectedCell.filter(function (i) {
      return i.col !== col;
    })));
  };

  return React.createElement("div", null, React.createElement("div", {
    className: style.title
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0435 \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0440\u0435\u043C\u044F"), React.createElement("div", {
    className: style.resultContainer
  }, React.createElement(Days, {
    startWeekDay: startWeekDay,
    curentDay: curentDay,
    setCurentDay: setCurentDay
  })), React.createElement(Grid, {
    isMobile: isMobile,
    className: style.gridContainer,
    cols: 8,
    rows: Math.ceil((endTime - startTime) / interval + 1),
    selectFromCol: 1,
    selectToCol: 7,
    selectFromRow: 1,
    selectToRow: Math.ceil((endTime - startTime) / interval + 1),
    setRowStyle: function setRowStyle(row) {
      return row === 0 ? style.firstRow : '';
    },
    setColStyle: function setColStyle(col) {
      return col === 0 ? style.firstColumn : '';
    },
    cellProps: {
      children: React.createElement(Cell, {
        startTime: startTime,
        startWeekDay: startWeekDay,
        endTime: endTime,
        interval: interval,
        selectedTimeText: selectedTimeText,
        onClear: onClear,
        isMobile: isMobile,
        curentDay: curentDay,
        customTimeSelectedCell: selectedCell,
        bookedTime: bookedTimePrepared
      })
    },
    selected: selectedTime,
    onSelect: onSelect
  }));
};

CustomWorkingTimeSelect.propTypes = {
  onChange: PropTypes.func,
  isMobile: PropTypes.bool,
  selectedTimeText: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  startWeekDay: PropTypes.number,
  interval: PropTypes.number,
  workingTimeIntervals: PropTypes.object
};
CustomWorkingTimeSelect.defaultProps = {
  workingTime: [],
  startTime: 300,
  endTime: 1440,
  interval: 60,
  startWeekDay: 1,
  //utc day of week
  workingTimeIntervals: {},
  curentDay: today
};
export default CustomWorkingTimeSelect;