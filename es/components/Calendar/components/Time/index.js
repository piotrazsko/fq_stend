"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CalendarToday = _interopRequireDefault(require("@material-ui/icons/CalendarToday"));

var _ArrowLeft = _interopRequireDefault(require("@material-ui/icons/ArrowLeft"));

var _ArrowRight = _interopRequireDefault(require("@material-ui/icons/ArrowRight"));

var _TimeDisplay = _interopRequireDefault(require("../TimeDisplay"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Time = function Time(_ref) {
  var selectedDate = _ref.selectedDate,
      weekDays = _ref.weekDays,
      selectedTime = _ref.selectedTime,
      disabledTime = _ref.disabledTime,
      onTimeClick = _ref.onTimeClick,
      month = _ref.month,
      onCancel = _ref.onCancel,
      confirmDate = _ref.confirmDate,
      showCalendar = _ref.showCalendar,
      setDate = _ref.setDate;
  var timeProps = {
    selectedTime: selectedTime,
    disabledTime: disabledTime,
    onTimeClick: onTimeClick
  };

  var getPrevDay = function getPrevDay() {
    var newDate = new Date(selectedDate.valueOf() - 1000 * 60 * 60 * 24);
    setDate(newDate);
  };

  var getNextDay = function getNextDay() {
    var newDate = new Date(selectedDate.valueOf() + 1000 * 60 * 60 * 24);
    setDate(newDate);
  };

  return _react.default.createElement("div", {
    className: "timeContainer"
  }, _react.default.createElement("div", {
    className: "time_day-block time_day-name"
  }, _react.default.createElement("div", {
    className: "time_day-name__items time_day__weekday"
  }, weekDays[selectedDate.getDay()]), _react.default.createElement("div", {
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: showCalendar,
    className: "time_day-name__items time_day__button-calendar"
  }, _react.default.createElement(_CalendarToday.default, null))), _react.default.createElement("div", {
    className: "time_day-block time_day-slider"
  }, _react.default.createElement("div", {
    className: "time_day__button",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: getPrevDay
  }, _react.default.createElement(_ArrowLeft.default, null)), _react.default.createElement("div", {
    className: "time_day__date"
  }, "".concat(selectedDate.getDate(), " ").concat(month[selectedDate.getMonth()])), _react.default.createElement("div", {
    className: "time_day__button",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {},
    onClick: getNextDay
  }, _react.default.createElement(_ArrowRight.default, null))), _react.default.createElement(_TimeDisplay.default, timeProps), _react.default.createElement("div", {
    className: "time_day-block time_day_confirm-block"
  }, _react.default.createElement("div", {
    onClick: onCancel,
    className: "time_day__button  time_day__button-cancel",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), _react.default.createElement("div", {
    onClick: confirmDate,
    className: "time_day__button time_day__button-confirm",
    role: "button",
    tabIndex: "-1",
    onKeyDown: function onKeyDown() {}
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")));
};

Time.propTypes = {
  weekDays: _propTypes.default.array,
  selectedTime: _propTypes.default.object,
  disabledTime: _propTypes.default.object,
  onTimeClick: _propTypes.default.func,
  month: _propTypes.default.array,
  onCancel: _propTypes.default.func,
  confirmDate: _propTypes.default.func,
  showCalendar: _propTypes.default.func,
  setDate: _propTypes.default.func
};
Time.defaultProps = {
  disabledTime: [0, 1, 2, 3, 4, 5, 6, 7, 21, 22, 23]
};
var _default = Time;
exports.default = _default;