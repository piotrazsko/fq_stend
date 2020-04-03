function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types'; // import { preppareDataforworkingTime, recoveryDataForworkingTime } from '../../helpers/calendar';

import { workingTimePrepare, getDataForSelectedDate } from './utils';
import Day from './components/Day';
import Month from './components/Month'; // import style from './style.module.scss';

var today = new Date();

var Calendar = function Calendar(_ref) {
  var _ref$defaultShowDay = _ref.defaultShowDay,
      defaultShowDay = _ref$defaultShowDay === void 0 ? false : _ref$defaultShowDay,
      autoConfirm = _ref.autoConfirm,
      workingTimeIntervals = _ref.workingTimeIntervals,
      bookedTime = _ref.bookedTime,
      onConfirm = _ref.onConfirm,
      _ref$customTime = _ref.customTime,
      customTime = _ref$customTime === void 0 ? {} : _ref$customTime,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 20 : _ref$interval,
      _ref$curentDay = _ref.curentDay,
      curentDayDefault = _ref$curentDay === void 0 ? today : _ref$curentDay,
      _ref$selectedDate = _ref.selectedDate,
      selectedTimeProps = _ref$selectedDate === void 0 ? today : _ref$selectedDate,
      classNames = _ref.classNames;

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
  var selectedDayData = getDataForSelectedDate({
    workingTime: workingTimeIntervals,
    customTime: customTime,
    bookedTime: bookedTime,
    curentDay: curentDay
  });
  var workingTimeActual = workingTimePrepare(_objectSpread({}, selectedDayData, {
    interval: interval
  }));
  return React.createElement("div", {
    className: classNames.container || ''
  }, showTime ? React.createElement(Day, {
    workingTimeActual: workingTimeActual,
    disableBeforeCurentTime: true,
    curentDay: curentDay,
    setCurentDay: setCurentDay,
    autoConfirm: autoConfirm,
    selectDate: function selectDate(date) {
      _selectDate(date);
    },
    onConfirm: onConfirm,
    selectedDate: selectedDate,
    setShowTime: function setShowTime() {
      return _setShowTime(!showTime);
    }
  }) : React.createElement(Month, {
    disableBeforeCurentTime: true,
    workingTimeActual: workingTimeActual,
    curentDay: curentDay,
    setCurentDay: setCurentDay,
    setShowTime: function setShowTime() {
      return _setShowTime(!showTime);
    }
  }));
};

Calendar.propTypes = {
  defaultShowDay: PropTypes.bool,
  autoConfirm: PropTypes.bool,
  bookedTime: PropTypes.array,
  onConfirm: PropTypes.func.isRequired,
  workingTimeIntervals: PropTypes.object.isRequired,
  customTime: PropTypes.array,
  interval: PropTypes.number,
  curentDay: PropTypes.instanceOf(Date),
  selectedDate: PropTypes.instanceOf(Date),
  classNames: PropTypes.shape({
    container: PropTypes.string
  })
};
Calendar.defaultProps = {
  selectedDay: new Date(),
  classNames: {
    conatainer: ''
  }
};
export default Calendar;