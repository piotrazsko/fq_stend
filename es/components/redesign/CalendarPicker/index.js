"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CalendarPicker;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("@material-ui/core/styles");

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _reactDateRange = require("react-date-range");

var locales = _interopRequireWildcard(require("react-date-range/dist/locale"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

require("react-date-range/dist/styles.css");

require("react-date-range/dist/theme/default.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// theme css file
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    buttonRoot: {
      padding: '12px 20px'
    },
    root: {
      backgroundColor: theme.palette.action.hover
    },
    outlined: {
      backgroundColor: '#fff'
    },
    checkboxContainer: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    }
  };
});

function CalendarPicker(_ref) {
  var onChange = _ref.onChange,
      date = _ref.date,
      disabled = _ref.disabled,
      color = _ref.color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      children = _ref.children;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var classes = useStyles();
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var handleClick = function handleClick(event) {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
    }
  };

  var _React$useState3 = _react.default.useState(new Date()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  _react.default.useEffect(function () {
    if (date) {
      setState(date);
    }
  }, [date]);

  var handleClose = function handleClose(date) {
    setAnchorEl(null);

    if (date) {
      onChange(date);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.cloneElement(children, {
    onClick: handleClick,
    disabled: disabled
  }) || /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: variant,
    classes: {
      text: classes.root,
      outlined: classes.outlined,
      root: classes.buttonRoot
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.buttonContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    size: "small",
    className: _styleModule.default.iconContainer,
    onClick: function onClick() {
      onChange((0, _moment.default)(date).subtract(1, 'days').toDate());
    }
  }, /*#__PURE__*/_react.default.createElement(_ChevronLeft.default, {
    fontSize: "small",
    htmlColor: '#fa835f'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.headerButton,
    onClick: handleClick,
    color: color,
    name: "name",
    size: "small"
  }, "".concat((0, _moment.default)(state).format('DD MMMM YYYY'))), /*#__PURE__*/_react.default.createElement("div", {
    size: "small",
    className: _styleModule.default.iconContainer,
    onClick: function onClick() {
      onChange((0, _moment.default)(date).add(1, 'days').toDate());
    }
  }, /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    fontSize: "small",
    htmlColor: '#fa835f'
  })))), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: function onClose() {
      return handleClose();
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
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, {
    color: "#fa835f",
    showPreview: false,
    showMonthAndYearPickers: false,
    showDateDisplay: false,
    locale: locales['ru'],
    onChange: function onChange(item) {
      handleClose(item);
      setState(item);
    },
    showSelectionPreview: true,
    date: date
  })))));
}

CalendarPicker.defaultProps = {
  options: [],
  onChange: function onChange() {}
};
CalendarPicker.propTypes = {
  date: _propTypes.default.instanceOf(Date),
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  color: _propTypes.default.string,
  variant: _propTypes.default.string,
  children: _propTypes.default.element
};