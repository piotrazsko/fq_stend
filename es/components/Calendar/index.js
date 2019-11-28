function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global Set */
import React from 'react';
import PropTypes from 'prop-types';
import { Day, Time } from './components';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from './config';
import { getDatesMounthBeforeToday, getDisabledTimeBeforeCurrentTime } from './utils/Dates';
var style = {
  "datapicker": "style-module_fq_datapicker___1QWkp"
};
import getHoursFromEvents from './utils/getHoursFromEvents';
import { getDisabledTimeFromShefule } from './utils/getDisabledTimeFromShedule';
import { getDisabledDaysFromShedule } from './utils/getDisabledDaysFromShedule';
import { getCustomDisabledTime, getCustomEnabledTime } from './utils/customTime';

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showTime: false,
      selectedDate: new Date(),
      selectedTime: null,
      currentMonth: new Date(new Date().setDate(1))
    });

    _defineProperty(_assertThisInitialized(_this), "onDayClickHandler", function (date) {
      var showTime = _this.state.showTime;

      _this.setState({
        showTime: !showTime,
        selectedDate: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTimeClickHandler", function (time) {
      var selectedDate = _this.state.selectedDate;
      var ceil = Math.floor(time / 2);
      selectedDate.setHours(ceil);
      selectedDate.setMinutes((time / 2 - ceil) * 60);

      _this.setState({
        selectedTime: time,
        selectedDate: selectedDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setDateHandler", function (date) {
      _this.setState({
        selectedDate: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showCalendar", function () {
      _this.setState({
        showTime: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "confirmDate", function () {
      var onConfirm = _this.props.onConfirm;
      var selectedDate = _this.state.selectedDate;
      onConfirm(selectedDate);
    });

    _defineProperty(_assertThisInitialized(_this), "onMonthChange", function (ev) {
      _this.setState({
        currentMonth: ev,
        selectedTime: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeDay", function () {
      _this.setState({
        selectedTime: null
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var state = _objectSpread({}, this.state);

      var props = _objectSpread({}, this.props);

      var customDisabledTime = getCustomDisabledTime(_toConsumableArray(props.customTime), state.selectedDate);
      var customEnabledTime = getCustomEnabledTime(_toConsumableArray(props.customTime), state.selectedDate);
      var bookedTime = [].concat(_toConsumableArray(getHoursFromEvents(props.bookedTime)), _toConsumableArray(customDisabledTime), _toConsumableArray(getDisabledTimeFromShefule(props.workingTime, state.selectedDate).filter(function (item) {
        return !customEnabledTime.find(function (i) {
          return i.toISOString() === item.toISOString();
        });
      })));
      var disabledTimeForToday = Array.from(new Set(getDisabledTimeBeforeCurrentTime(new Date(), bookedTime)));
      var disabledDays = props.isDisabledBeforeToday ? [].concat(_toConsumableArray(props.disabledDays), _toConsumableArray(getDatesMounthBeforeToday(new Date(), state.currentMonth)), _toConsumableArray(getDisabledDaysFromShedule(props.workingTime, state.currentMonth)), [disabledTimeForToday.length === 48 && new Date()]) : props.disabledDays;
      var timeProps = {
        onTimeClick: this.onTimeClickHandler,
        selectedTime: state.selectedTime,
        selectedDate: state.selectedDate,
        showCalendar: this.showCalendar,
        weekDays: WEEKDAYS_LONG,
        month: MONTHS,
        setDate: this.setDateHandler,
        confirmDate: this.confirmDate,
        onCancel: props.onCancel,
        disabledTime: getDisabledTimeBeforeCurrentTime(state.selectedDate, bookedTime),
        onChangeDay: this.onChangeDay
      };
      var dateProps = {
        months: MONTHS,
        selectedDays: timeProps.selectedDate,
        weekdaysLong: WEEKDAYS_LONG,
        weekdaysShort: WEEKDAYS_SHORT,
        onDayClick: this.onDayClickHandler,
        disabledDays: disabledDays,
        month: timeProps.selectedDate,
        onMonthChange: this.onMonthChange,
        className: style.datapicker
      };
      return state.showTime ? React.createElement(Time, timeProps) : React.createElement(Day, dateProps);
    }
  }]);

  return Calendar;
}(React.Component);

_defineProperty(Calendar, "defaultProps", {
  onConfirm: function onConfirm(date) {
    console.log(date);
  },
  onCancel: function onCancel() {},
  disabledDays: [],
  disabledTime: [],
  isDisabledBeforeToday: true,
  isDisabledBeforeCurrentTime: true,
  bookedTime: [],
  afterHours: []
});

_defineProperty(Calendar, "propTypes", {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  disabledDays: PropTypes.array,
  disabledTime: PropTypes.array,
  isDisabledBeforeToday: PropTypes.bool,
  isDisabledBeforeCurrentTime: PropTypes.bool,
  bookedTime: PropTypes.array,
  afterHours: PropTypes.array,
  workingTime: PropTypes.array,
  customTime: PropTypes.array
});

export default Calendar;