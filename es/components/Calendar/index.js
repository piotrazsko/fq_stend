"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("./components");

var _config = require("./config");

var _Dates = require("./utils/Dates");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _getHoursFromEvents = _interopRequireDefault(require("./utils/getHoursFromEvents"));

var _getDisabledTimeFromShedule = require("./utils/getDisabledTimeFromShedule");

var _getDisabledDaysFromShedule = require("./utils/getDisabledDaysFromShedule");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      var bookedTime = [].concat(_toConsumableArray((0, _getHoursFromEvents.default)(props.bookedTime)), _toConsumableArray((0, _getDisabledTimeFromShedule.getDisabledTimeFromShefule)(props.workingTime, state.selectedDate)));
      var disabledTimeForToday = Array.from(new Set((0, _Dates.getDisabledTimeBeforeCurrentTime)(new Date(), bookedTime)));
      var disabledDays = props.isDisabledBeforeToday ? [].concat(_toConsumableArray(props.disabledDays), _toConsumableArray((0, _Dates.getDatesMounthBeforeToday)(new Date(), state.currentMonth)), _toConsumableArray((0, _getDisabledDaysFromShedule.getDisabledDaysFromShedule)(props.workingTime, state.currentMonth)), [disabledTimeForToday.length === 48 && new Date()]) : props.disabledDays;
      var timeProps = {
        onTimeClick: this.onTimeClickHandler,
        selectedTime: state.selectedTime,
        selectedDate: state.selectedDate,
        showCalendar: this.showCalendar,
        weekDays: _config.WEEKDAYS_LONG,
        month: _config.MONTHS,
        setDate: this.setDateHandler,
        confirmDate: this.confirmDate,
        onCancel: props.onCancel,
        disabledTime: (0, _Dates.getDisabledTimeBeforeCurrentTime)(state.selectedDate, bookedTime),
        onChangeDay: this.onChangeDay
      };
      var dateProps = {
        months: _config.MONTHS,
        selectedDays: timeProps.selectedDate,
        weekdaysLong: _config.WEEKDAYS_LONG,
        weekdaysShort: _config.WEEKDAYS_SHORT,
        onDayClick: this.onDayClickHandler,
        disabledDays: disabledDays,
        onMonthChange: this.onMonthChange,
        className: _styleModule.default.datapicker
      };
      return state.showTime ? _react.default.createElement(_components.Time, timeProps) : _react.default.createElement(_components.Day, dateProps);
    }
  }]);

  return Calendar;
}(_react.default.Component);

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
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  disabledDays: _propTypes.default.array,
  disabledTime: _propTypes.default.array,
  isDisabledBeforeToday: _propTypes.default.bool,
  isDisabledBeforeCurrentTime: _propTypes.default.bool,
  bookedTime: _propTypes.default.array,
  afterHours: _propTypes.default.array,
  workingTime: _propTypes.default.array
});

var _default = Calendar;
exports.default = _default;