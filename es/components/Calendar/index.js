function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { workingTimePrepare, getDataForSelectedDate } from './utils';
import Day from './components/Day';
import Month from './components/Month';
var style = {
  "container": "style-module_fq_container___ohkyl"
};

var getActualIntervalsByDay = function getActualIntervalsByDay(_ref) {
  var day = _ref.day,
      workingTimeIntervals = _ref.workingTimeIntervals,
      customTime = _ref.customTime,
      bookedTime = _ref.bookedTime,
      interval = _ref.interval;
  return workingTimePrepare(_objectSpread(_objectSpread({}, getDataForSelectedDate({
    workingTime: workingTimeIntervals,
    customTime: customTime,
    bookedTime: bookedTime,
    curentDay: day
  })), {}, {
    interval: interval
  }));
};

var today = new Date();

var Calendar = function Calendar(_ref2) {
  var _ref2$defaultShowDay = _ref2.defaultShowDay,
      defaultShowDay = _ref2$defaultShowDay === void 0 ? false : _ref2$defaultShowDay,
      workingTimeIntervals = _ref2.workingTimeIntervals,
      bookedTime = _ref2.bookedTime,
      _ref2$onConfirm = _ref2.onConfirm,
      onConfirm = _ref2$onConfirm === void 0 ? function () {} : _ref2$onConfirm,
      _ref2$onCancel = _ref2.onCancel,
      onCancel = _ref2$onCancel === void 0 ? function () {} : _ref2$onCancel,
      _ref2$customTime = _ref2.customTime,
      customTime = _ref2$customTime === void 0 ? {} : _ref2$customTime,
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 20 : _ref2$interval,
      _ref2$curentDay = _ref2.curentDay,
      curentDayDefault = _ref2$curentDay === void 0 ? today : _ref2$curentDay,
      _ref2$selectedDate = _ref2.selectedDate,
      selectedTimeProps = _ref2$selectedDate === void 0 ? today : _ref2$selectedDate,
      classNames = _ref2.classNames;

  var _React$useState = React.useState(curentDayDefault),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      curentDay = _React$useState2[0],
      setCurentDay = _React$useState2[1];

  var _React$useState3 = React.useState(selectedTimeProps),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedDate = _React$useState4[0],
      _selectDate = _React$useState4[1];

  var _React$useState5 = React.useState(defaultShowDay),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showTime = _React$useState6[0],
      _setShowTime = _React$useState6[1];

  React.useEffect(function () {
    _selectDate(selectedTimeProps);
  }, [selectedTimeProps]);
  var curentDayIntervals = getActualIntervalsByDay({
    day: curentDay,
    workingTimeIntervals: workingTimeIntervals,
    customTime: customTime,
    bookedTime: bookedTime,
    interval: interval
  });
  return /*#__PURE__*/React.createElement("div", {
    className: [style.container, classNames.container || ''].join(' ')
  }, showTime ? /*#__PURE__*/React.createElement(Day, {
    workingTimeActual: curentDayIntervals,
    disableBeforeCurentTime: true,
    curentDay: curentDay,
    setCurentDay: setCurentDay,
    selectDate: function selectDate(date) {
      _selectDate(date);
    },
    onCancel: onCancel,
    onConfirm: onConfirm,
    selectedDate: selectedDate,
    setShowTime: function setShowTime() {
      return _setShowTime(!showTime);
    }
  }) : /*#__PURE__*/React.createElement(Month, {
    disableBeforeCurentTime: true,
    workingTimeActual: curentDayIntervals,
    curentDay: curentDay,
    setCurentDay: setCurentDay,
    disabledDays: function disabledDays(day) {
      return getActualIntervalsByDay({
        day: day,
        workingTimeIntervals: workingTimeIntervals,
        customTime: customTime,
        bookedTime: bookedTime,
        interval: interval
      });
    },
    setShowTime: function setShowTime() {
      return _setShowTime(!showTime);
    }
  }));
};

Calendar.getActualIntervals = getActualIntervalsByDay;
Calendar.propTypes = {
  defaultShowDay: PropTypes.bool,
  bookedTime: PropTypes.array,
  onConfirm: PropTypes.func.isRequired,
  workingTimeIntervals: PropTypes.object.isRequired,
  customTime: PropTypes.array,
  interval: PropTypes.number,
  curentDay: PropTypes.instanceOf(Date),
  selectedDate: PropTypes.instanceOf(Date),
  classNames: PropTypes.shape({
    container: PropTypes.string
  }),
  onCancel: PropTypes.func
};
Calendar.defaultProps = {
  selectedDay: new Date(),
  classNames: {
    conatainer: ''
  }
};
export default Calendar;