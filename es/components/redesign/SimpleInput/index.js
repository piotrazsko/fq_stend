"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _styles = require("@material-ui/core/styles");

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.action.hover
    },
    outlined: {
      backgroundColor: '#fff',
      borderRadius: '6px'
    },
    checkboxContainer: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
    input: {
      maxWidth: '45%',
      width: 120 // height: 24,
      // fontSize: 22,

    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      margin: '0 10px 10px 10px'
    }
  };
});

var SimpleInput = function SimpleInput(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      value = _ref.value,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      color = _ref.color,
      children = _ref.children,
      _ref$isRange = _ref.isRange,
      isRange = _ref$isRange === void 0 ? true : _ref$isRange,
      _ref$inputStartProps = _ref.inputStartProps,
      inputStartProps = _ref$inputStartProps === void 0 ? {} : _ref$inputStartProps,
      _ref$inputEndProps = _ref.inputEndProps,
      inputEndProps = _ref$inputEndProps === void 0 ? {} : _ref$inputEndProps,
      _ref$inputsProps = _ref.inputsProps,
      inputsProps = _ref$inputsProps === void 0 ? {} : _ref$inputsProps,
      _ref$confirmText = _ref.confirmText,
      confirmText = _ref$confirmText === void 0 ? 'Ok' : _ref$confirmText;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = _react.default.useState(isRange ? (0, _get.default)(value, 'from') : value),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      start = _React$useState4[0],
      setStart = _React$useState4[1];

  var _React$useState5 = _react.default.useState(isRange ? (0, _get.default)(value, 'to') : undefined),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      end = _React$useState6[0],
      setEnd = _React$useState6[1];

  var classes = useStyles();
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children ? /*#__PURE__*/_react.default.cloneElement(children, {
    onClick: handleClick
  }) : /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: color,
    "aria-describedby": id,
    onClick: handleClick,
    classes: {
      text: classes.root,
      outlined: classes.outlined
    },
    name: "name",
    variant: variant,
    endIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
      color: color === 'primary' ? undefined : 'primary'
    })
  }, (0, _get.default)(value, 'label', placeholder)), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxContainer
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    classes: {
      root: classes.input
    },
    onChange: function onChange(ev) {
      setStart(ev.target.value);
    },
    variant: 'outlined',
    size: "small",
    placeholder: "\u041E\u0442",
    label: "\u041E\u0442",
    InputLabelProps: {
      shrink: true
    }
  }, inputsProps, inputStartProps)), isRange && /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    classes: {
      root: classes.input
    },
    onChange: function onChange(ev) {
      setEnd(ev.target.value);
    },
    placeholder: "\u0414\u043E",
    label: "\u0414\u043E",
    variant: 'outlined',
    size: "small",
    InputLabelProps: {
      shrink: true
    }
  }, inputsProps, inputEndProps))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.buttonContainer
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      if (isRange) {
        onChange({
          from: start,
          to: end
        });
      } else {
        onChange(start);
      }

      handleClose();
    },
    size: "small",
    variant: 'contained',
    color: 'primary'
  }, confirmText))));
};

SimpleInput.defaultProps = {
  onChange: function onChange() {},
  inputStartProps: {},
  inputEndProps: {},
  inputsProps: {},
  value: undefined
};
SimpleInput.propTypes = {
  placeholder: _propTypes.default.string,
  value: _propTypes.default.any,
  onChange: _propTypes.default.func,
  variant: _propTypes.default.string,
  color: _propTypes.default.string,
  children: _propTypes.default.element,
  isRange: _propTypes.default.bool,
  inputStartProps: _propTypes.default.object,
  inputEndProps: _propTypes.default.object,
  inputsProps: _propTypes.default.object,
  confirmText: _propTypes.default.string
};
var _default = SimpleInput;
exports.default = _default;