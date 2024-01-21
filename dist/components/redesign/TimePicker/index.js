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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* global Set */
const TimePicker = _ref => {
  let {
    value,
    onChange,
    disabledTime,
    hourStep,
    minuteStep,
    inputProps,
    disabled,
    disableBeforeNow = true
  } = _ref;
  const hours = [];
  for (let i = 0; i < 24; i = i + hourStep) {
    hours.push(i);
  }
  const minutes = [];
  for (let i = 0; i < 60; i = i + minuteStep) {
    minutes.push(i);
  }
  const inputElHour = _react.default.useRef(null);
  const inputElMinutes = _react.default.useRef(null);
  const [selectedHour, setHour] = _react.default.useState();
  const [selectedMinute, setMinutes] = _react.default.useState();
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = event => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = save => {
    setAnchorEl(null);
    if (save) {
      const date = (0, _moment.default)(value || Date.now());
      date.hours(selectedHour);
      date.minutes(selectedMinute);
      date.seconds(0);
      onChange(date.toDate());
    }
  };
  _react.default.useEffect(() => {
    setHour((0, _moment.default)(value).hours());
    setMinutes((0, _moment.default)(value).minutes());
  }, [value, open]);
  _react.default.useEffect(() => {
    setTimeout(() => {
      if (open && inputElHour.current && inputElMinutes.current) {
        inputElHour.current.scrollIntoView();
        inputElMinutes.current.scrollIntoView();
      }
    }, 100);
  }, [open, value]);
  let str = (selectedMinute || "0").toString();
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
    onClose: () => handleClose(false),
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
  }, hours.map(i => {
    // const disabled = ;
    const selected = i == parseInt(selectedHour);
    const disabled = false;
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: inputElHour,
      className: [_styleModule.default.item, selected ? _styleModule.default.selectedItem : ''].join(' '),
      key: i,
      onClick: () => {
        setHour(i);
      }
    }, i);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.timeColumn
  }, minutes.map(i => {
    const selected = i == parseInt(selectedMinute);
    const disabled = disabledTime.find(item => {
      const currentTime = selectedHour * 60 + i;
      return currentTime < item.start + item.duration && currentTime >= item.start ? true : false;
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: inputElMinutes,
      className: [_styleModule.default.item, selected ? _styleModule.default.selectedItem : '', disabled ? _styleModule.default.disabledItem : ''].join(' '),
      key: i,
      onClick: () => {
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
    onClick: () => {
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
  onChange: date => {},
  hourStep: 1,
  minuteStep: 5,
  inputProps: {}
};
var _default = exports.default = TimePicker;