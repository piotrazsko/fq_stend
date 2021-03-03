"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _moment = _interopRequireDefault(require("moment"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TimePicker = function TimePicker(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      disabledTime = _ref.disabledTime,
      hourStep = _ref.hourStep,
      minuteStep = _ref.minuteStep,
      inputProps = _ref.inputProps,
      disabled = _ref.disabled,
      _ref$disableBeforeNow = _ref.disableBeforeNow,
      disableBeforeNow = _ref$disableBeforeNow === void 0 ? true : _ref$disableBeforeNow;
  var hours = [];

  for (var i = 0; i < 24; i = i + hourStep) {
    hours.push(i);
  }

  var minutes = [];

  for (var _i = 0; _i < 60; _i = _i + minuteStep) {
    minutes.push(_i);
  }

  var inputElHour = _react.default.useRef(null);

  var inputElMinutes = _react.default.useRef(null);

  var _React$useState = _react.default.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedHour = _React$useState2[0],
      setHour = _React$useState2[1];

  var _React$useState3 = _react.default.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedMinute = _React$useState4[0],
      setMinutes = _React$useState4[1];

  var _React$useState5 = _react.default.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      anchorEl = _React$useState6[0],
      setAnchorEl = _React$useState6[1];

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var handleClick = function handleClick(event) {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
    }
  };

  var handleClose = function handleClose(save) {
    setAnchorEl(null);

    if (save) {
      var date = (0, _moment.default)(value || Date.now());
      date.hours(selectedHour);
      date.minutes(selectedMinute);
      date.seconds(0);
      onChange(date.toDate());
    }
  };

  _react.default.useEffect(function () {
    setHour((0, _moment.default)(value).hours());
    setMinutes((0, _moment.default)(value).minutes());
  }, [value, open]);

  _react.default.useEffect(function () {
    setTimeout(function () {
      if (open && inputElHour.current && inputElMinutes.current) {
        inputElHour.current.scrollIntoView();
        inputElMinutes.current.scrollIntoView();
      }
    }, 100);
  }, [open, value]);

  var str = (selectedMinute || "0").toString();
  str = str.length < 2 ? "0".concat(str) : str;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    disabled: disabled,
    classes: {
      root: _styleModule.default.textField
    },
    onClick: handleClick,
    value: typeof selectedHour !== 'undefined' ? "".concat(selectedHour, ":").concat(str || '00') : ''
  }, inputProps)), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: function onClose() {
      return handleClose(false);
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.timeColumn
  }, hours.map(function (i) {
    // const disabled = ;
    var selected = i == parseInt(selectedHour);
    var disabled = false;
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: inputElHour,
      className: [_styleModule.default.item, selected ? _styleModule.default.selectedItem : ''].join(' '),
      key: i,
      onClick: function onClick() {
        setHour(i);
      }
    }, i);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.timeColumn
  }, minutes.map(function (i) {
    var selected = i == parseInt(selectedMinute);
    var disabled = disabledTime.find(function (item) {
      var currentTime = selectedHour * 60 + i;
      return currentTime < item.start + item.duration && currentTime >= item.start ? true : false;
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: inputElMinutes,
      className: [_styleModule.default.item, selected ? _styleModule.default.selectedItem : '', disabled ? _styleModule.default.disabledItem : ''].join(' '),
      key: i,
      onClick: function onClick() {
        if (!disabled) {
          setMinutes(i);
        }
      }
    }, i < 10 ? "0".concat(i) : i);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.button
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "small",
    color: "primary",
    variant: "contained",
    onClick: function onClick() {
      handleClose(true);
    }
  }, "Ok"))));
};

TimePicker.propTypes = {
  value: _propTypes.default.any,
  onChange: _propTypes.default.func,
  hourStep: _propTypes.default.number,
  minuteStep: _propTypes.default.number,
  inputProps: _propTypes.default.object,
  disabledTime: _propTypes.default.array,
  disabled: _propTypes.default.bool,
  disableBeforeNow: _propTypes.default.bool
};
TimePicker.defaultProps = {
  disabledTime: [],
  onChange: function onChange(date) {
    console.log(date);
  },
  hourStep: 1,
  minuteStep: 5,
  inputProps: {}
};
var _default = TimePicker;
exports.default = _default;