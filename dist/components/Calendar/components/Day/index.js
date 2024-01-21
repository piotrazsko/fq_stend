"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _config = require("../../../../helpers/config");
var _CalendarToday = _interopRequireDefault(require("@material-ui/icons/CalendarToday"));
var _ArrowLeft = _interopRequireDefault(require("@material-ui/icons/ArrowLeft"));
var _ArrowRight = _interopRequireDefault(require("@material-ui/icons/ArrowRight"));
var _core = require("@material-ui/core");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Day = _ref => {
  let {
    workingTimeActual,
    setCurentDay,
    curentDay,
    selectDate,
    selectedDate,
    setShowTime,
    disableBeforeCurentTime = true,
    onConfirm = () => {},
    autoConfirm = true
  } = _ref;
  const workingTimeActualFiltered = disableBeforeCurentTime ? (() => {
    const today = new Date();
    const minutes = curentDay.getFullYear() === today.getFullYear() && curentDay.getMonth() === today.getMonth() && curentDay.getDate() === today.getDate() && today.getHours() * 60 + today.getMinutes();
    return minutes ? workingTimeActual.filter(i => i.start > minutes) : workingTimeActual;
  })() : workingTimeActual;
  const getPrevDay = () => {
    const newDate = new Date(curentDay.valueOf() - 1000 * 60 * 60 * 24);
    setCurentDay(newDate);
  };
  const getNextDay = () => {
    const newDate = new Date(curentDay.valueOf() + 1000 * 60 * 60 * 24);
    setCurentDay(newDate);
  };
  const onClickDay = item => {
    const day = new Date(curentDay);
    day.setMinutes(item.minutes);
    day.setHours(item.hour);
    day.setSeconds(0);
    selectDate(day);
    if (autoConfirm) {
      onConfirm(day);
    }
  };
  const checkSelected = item => {
    return curentDay.getFullYear() === selectedDate.getFullYear() && curentDay.getMonth() === selectedDate.getMonth() && curentDay.getDate() === selectedDate.getDate() && item.hour === selectedDate.getHours() && item.minutes === selectedDate.getMinutes();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default['timeContainer']
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default['time_day-block'], _styleModule.default['time_day-name']].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default['time_day-name__items'], _styleModule.default[' time_day__weekday']].join(' ')
  }, _config.WEEKDAYS_LONG[curentDay.getDay()]), /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    tabIndex: "-1",
    onKeyDown: () => {},
    onClick: setShowTime,
    className: [_styleModule.default['time_day-name__items'], _styleModule.default['time_day__button-calendar']].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_CalendarToday.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default['time_day-block'], _styleModule.default['time_day-slider']].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    className: _styleModule.default['time_day__button'],
    role: "button",
    tabIndex: "-1",
    disabled: disableBeforeCurentTime && curentDay < new Date(),
    onKeyDown: () => {},
    onClick: getPrevDay
  }, /*#__PURE__*/_react.default.createElement(_ArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default['time_day__date']
  }, "".concat(curentDay.getDate(), " ").concat(_config.MONTHS[curentDay.getMonth()])), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    className: _styleModule.default['time_day__button'],
    role: "button",
    tabIndex: "-1",
    onKeyDown: () => {},
    onClick: getNextDay
  }, /*#__PURE__*/_react.default.createElement(_ArrowRight.default, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default['time_grid'], workingTimeActualFiltered.length === 0 ? _styleModule.default['empty'] : ''].join(' ')
  }, workingTimeActualFiltered.length > 0 ? workingTimeActualFiltered.map(item => {
    let minutes = item.minutes.toString();
    minutes = minutes.length == 1 ? "0".concat(minutes) : minutes;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _styleModule.default.itemContainer,
      key: item.start + '_index'
    }, /*#__PURE__*/_react.default.createElement("div", {
      onClick: () => onClickDay(item),
      className: [_styleModule.default['time_grid__item'], checkSelected(item) ? _styleModule.default['time_grid__item-selected'] : ''].join(' ')
    }, "".concat(item.hour, ":").concat(minutes)));
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default['emptyDay_shedule']
  }, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F")));
};
Day.propTypes = {
  workingTimeActual: _propTypes.default.array.isRequired,
  setCurentDay: _propTypes.default.func.isRequired,
  curentDay: _propTypes.default.object,
  selectDate: _propTypes.default.func.isRequired,
  selectedDate: _propTypes.default.object,
  setShowTime: _propTypes.default.func.isRequired,
  onConfirm: _propTypes.default.func.isRequired,
  autoConfirm: _propTypes.default.bool,
  disableBeforeCurentTime: _propTypes.default.bool
};
var _default = exports.default = Day;