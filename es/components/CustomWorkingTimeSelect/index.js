"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Cell = _interopRequireDefault(require("./Cell"));

var _Days = _interopRequireDefault(require("./Days"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  "lastColumn": "style-module_fq_lastColumn___crCtl",
  "cellCustomDay": "style-module_fq_cellCustomDay___2YUDD",
  "cellCustomDayDisabled": "style-module_fq_cellCustomDayDisabled___2lO-G",
  "reservedTime": "style-module_fq_reservedTime___2amMA"
};
var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
var DAY_MS = 60 * 1000 * 60 * 24;

var useBookedTimeHook = function useBookedTimeHook(_ref) {
  var workingTimeIntervals = _ref.workingTimeIntervals,
      customTimeIntervals = _ref.customTimeIntervals,
      bookedTime = _ref.bookedTime,
      curentDay = _ref.curentDay,
      interval = _ref.interval,
      startWeekDay = _ref.startWeekDay,
      startTime = _ref.startTime;

  var _React$useState = _react.default.useState(weekPrepare({
    workingTimeIntervals: workingTimeIntervals,
    customTimeIntervals: customTimeIntervals,
    bookedTime: bookedTime,
    curentDay: curentDay,
    interval: interval,
    startWeekDay: startWeekDay
  })),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      workingTimeActual = _React$useState2[0],
      setActualWorkingTime = _React$useState2[1];

  _react.default.useEffect(function () {
    setActualWorkingTime(weekPrepare({
      workingTimeIntervals: workingTimeIntervals,
      customTimeIntervals: customTimeIntervals,
      bookedTime: bookedTime,
      curentDay: curentDay,
      interval: interval,
      startWeekDay: startWeekDay
    }));
  }, [curentDay, bookedTime, startWeekDay, interval, customTimeIntervals, workingTimeIntervals]);

  return (0, _utils.getBookingTime)({
    interval: interval,
    startTime: startTime,
    startWeekDay: startWeekDay,
    bookedTime: workingTimeActual.map(function (i) {
      return i.bookedTimePeriods;
    })
  });
};

var weekPrepare = function weekPrepare(_ref2) {
  var workingTimeIntervals = _ref2.workingTimeIntervals,
      customTimeIntervals = _ref2.customTimeIntervals,
      bookedTime = _ref2.bookedTime,
      curentDay = _ref2.curentDay,
      interval = _ref2.interval,
      startWeekDay = _ref2.startWeekDay;
  var arr = new Array(7);
  return arr.fill(1).map(function (item, index) {
    var day = new Date(curentDay);
    return (0, _utils.workingTimePrepare)(_objectSpread({}, (0, _utils.getDataForSelectedDate)({
      workingTime: workingTimeIntervals,
      customTime: customTimeIntervals,
      bookedTime: bookedTime,
      curentDay: new Date(day.valueOf() - (day.getDay() - index - startWeekDay) * DAY_MS),
      interval: interval
    })));
  });
};

var CustomWorkingTimeSelect = function CustomWorkingTimeSelect(_ref3) {
  var _ref3$onChange = _ref3.onChange,
      onChange = _ref3$onChange === void 0 ? function () {} : _ref3$onChange,
      workingTimeIntervals = _ref3.workingTimeIntervals,
      customTimeIntervals = _ref3.customTimeIntervals,
      bookedTime = _ref3.bookedTime,
      _ref3$isMobile = _ref3.isMobile,
      isMobile = _ref3$isMobile === void 0 ? false : _ref3$isMobile,
      _ref3$selectedTimeTex = _ref3.selectedTimeText,
      selectedTimeText = _ref3$selectedTimeTex === void 0 ? '' : _ref3$selectedTimeTex,
      startTime = _ref3.startTime,
      endTime = _ref3.endTime,
      _ref3$disableSelectBe = _ref3.disableSelectBeforeDate,
      disableSelectBeforeDate = _ref3$disableSelectBe === void 0 ? new Date() : _ref3$disableSelectBe,
      interval = _ref3.interval,
      startWeekDay = _ref3.startWeekDay,
      curentDayDefault = _ref3.curentDay,
      _ref3$filterOutSuspen = _ref3.filterOutSuspensionIntervals,
      filterOutSuspensionIntervals = _ref3$filterOutSuspen === void 0 ? true : _ref3$filterOutSuspen;

  //used for show working time
  var _React$useState3 = _react.default.useState(_toConsumableArray((0, _utils.recoveryWorkingTimeIntervals)({
    data: workingTimeIntervals,
    startTime: startTime,
    interval: interval,
    startWeekDay: startWeekDay
  }))),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      workingTime = _React$useState4[0],
      setWorkingTime = _React$useState4[1];

  _react.default.useEffect(function () {
    setWorkingTime(_toConsumableArray((0, _utils.recoveryWorkingTimeIntervals)({
      data: workingTimeIntervals,
      startTime: startTime,
      interval: interval,
      startWeekDay: startWeekDay
    })));
  }, [interval, startWeekDay]);

  var _React$useState5 = _react.default.useState((0, _utils.getFirstWeekDayByDate)({
    date: curentDayDefault,
    startWeekDay: startWeekDay
  })),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      curentDay = _React$useState6[0],
      setCurentDay = _React$useState6[1];

  _react.default.useEffect(function () {
    var newCurentDay = (0, _utils.getFirstWeekDayByDate)({
      date: curentDayDefault,
      startWeekDay: startWeekDay
    });
    setCurentDay(newCurentDay);
  }, [startWeekDay]);

  var _React$useState7 = _react.default.useState(_toConsumableArray((0, _utils.convertCustomTimeToColRowObj)({
    interval: interval,
    startTime: startTime,
    startWeekDay: startWeekDay,
    colOffset: 1,
    rowOffset: 1,
    customTimeIntervals: customTimeIntervals
  }).filter(function (item) {
    if (filterOutSuspensionIntervals) {
      var cell = workingTime.find(function (i) {
        return i.col == item.col && i.row == item.row;
      });
      var needRemove = cell && item.enabled || !cell && item.disabled;
      return !needRemove;
    }

    return true;
  }))),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectedCell = _React$useState8[0],
      setSelectedCell = _React$useState8[1];

  _react.default.useEffect(function () {
    setSelectedCell(_toConsumableArray((0, _utils.convertCustomTimeToColRowObj)({
      interval: interval,
      startTime: startTime,
      startWeekDay: startWeekDay,
      colOffset: 1,
      rowOffset: 1,
      customTimeIntervals: customTimeIntervals
    }).filter(function (item) {
      if (filterOutSuspensionIntervals) {
        var cell = workingTime.find(function (i) {
          return i.col == item.col && i.row == item.row;
        });
        var needRemove = cell && item.enabled || !cell && item.disabled;
        return !needRemove;
      }

      return true;
    })));
  }, [interval, startWeekDay]);

  var bookedTimePrepared = useBookedTimeHook({
    workingTimeIntervals: workingTimeIntervals,
    customTimeIntervals: customTimeIntervals,
    bookedTime: bookedTime,
    curentDay: curentDay,
    interval: interval,
    startWeekDay: startWeekDay,
    startTime: startTime
  });

  _react.default.useEffect(function () {
    onChange((0, _utils.convertColRowToCustomTime)({
      data: selectedCell,
      interval: interval,
      startTime: startTime,
      startWeekDay: startWeekDay
    }));
  }, [selectedCell]);

  var onSelect = function onSelect(selected) {
    var filtered = selectedCell.filter(function (item) {
      var startWeekDayMS = item.startWeekDay.valueOf();
      return !selected.find(function (i) {
        return i.col === item.col && i.row === item.row && curentDay.valueOf() >= startWeekDayMS && curentDay.valueOf() < startWeekDayMS + 7 * DAY_MS;
      });
    });

    if (filtered.length !== selectedCell.length) {
      setSelectedCell(_toConsumableArray(filtered));
    } else {
      var cells = [].concat(_toConsumableArray(selectedCell), _toConsumableArray(selected.filter(function (item) {
        return !bookedTimePrepared.find(function (i) {
          return i.col === item.col && i.row === item.row;
        });
      }).map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          startWeekDay: curentDay,
          itemTime: (0, _utils.getRealDateByColRow)({
            col: item.col,
            row: item.row,
            interval: interval,
            startTime: startTime,
            rowOffset: 1,
            colOffset: 1,
            firstWeekDayDate: curentDay
          }),
          disabled: Boolean(workingTime.find(function (i) {
            return i.col == item.col && item.row == i.row;
          }))
        });
      })));
      setSelectedCell(disableSelectBeforeDate ? cells.filter(function (i) {
        return i.itemTime > disableSelectBeforeDate;
      }) : cells);
    }
  };

  var onClear = function onClear(col) {
    // BUG:  need change algorithm for clean/ now cleaned for all dated in this column
    setSelectedCell(_toConsumableArray(selectedCell.filter(function (i) {
      return i.col !== col;
    })));
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: style.resultContainer
  }, /*#__PURE__*/_react.default.createElement(_Days.default, {
    startWeekDay: startWeekDay,
    curentDay: curentDay,
    setCurentDay: setCurentDay
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    isMobile: isMobile,
    className: style.gridContainer,
    cols: 9,
    rows: Math.ceil((endTime - startTime) / interval + 1),
    selectFromCol: 1,
    selectToCol: 7,
    selectFromRow: 1,
    selectToRow: Math.ceil((endTime - startTime) / interval + 1),
    setRowStyle: function setRowStyle(row) {
      return row === 0 ? style.firstRow : '';
    },
    setColStyle: function setColStyle(col) {
      switch (col) {
        case 0:
          return style.firstColumn;

        case 8:
          return style.lastColumn;

        default:
          return '';
      }
    },
    cellProps: {
      children: /*#__PURE__*/_react.default.createElement(_Cell.default, {
        setCurentDay: setCurentDay,
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
    selected: workingTime,
    onSelect: onSelect
  }));
};

CustomWorkingTimeSelect.propTypes = {
  onChange: _propTypes.default.func,
  isMobile: _propTypes.default.bool,
  selectedTimeText: _propTypes.default.string,
  startTime: _propTypes.default.number,
  endTime: _propTypes.default.number,
  startWeekDay: _propTypes.default.number,
  interval: _propTypes.default.number,
  workingTimeIntervals: _propTypes.default.object,
  customTimeIntervals: _propTypes.default.object,
  bookedTime: _propTypes.default.array,
  curentDay: _propTypes.default.instanceOf(Date),
  disableSelectBeforeDate: _propTypes.default.instanceOf(Date)
};
CustomWorkingTimeSelect.defaultProps = {
  workingTime: [],
  startTime: 300,
  endTime: 1440,
  interval: 60,
  startWeekDay: 1,
  //utc day of week
  workingTimeIntervals: {},
  curentDay: today,
  customTimeIntervals: {}
};
var _default = CustomWorkingTimeSelect;
exports.default = _default;