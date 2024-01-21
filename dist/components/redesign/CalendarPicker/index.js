"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
var _styles = require("@material-ui/core/styles");
var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));
var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));
var _reactDateRange = require("react-date-range");
var locales = _interopRequireWildcard(require("react-date-range/dist/locale"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // main css file
// theme css file

const useStyles = (0, _styles.makeStyles)(theme => ({
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
}));
const CalendarPicker = _ref => {
  let {
    onChange,
    date,
    disabled,
    color,
    variant = 'text',
    children,
    pickerProps,
    buttonProps,
    rightSide,
    autoClose = true,
    forceClose = false,
    calendarClasses
  } = _ref;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = event => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
    }
  };
  const [state, setState] = _react.default.useState(new Date());
  _react.default.useEffect(() => {
    if (date) {
      setState(date);
    }
  }, [date]);
  _react.default.useEffect(() => {
    if (forceClose) {
      setAnchorEl(null);
    }
  }, [forceClose]);
  const handleClose = date => {
    if (!date) {
      setAnchorEl(null);
    } else if (date && autoClose) {
      setAnchorEl(null);
    }
    if (date) {
      onChange(date);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.cloneElement(children, {
    onClick: handleClick,
    disabled
  }) || /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    variant: variant,
    classes: {
      text: classes.root,
      outlined: classes.outlined,
      root: classes.buttonRoot
    }
  }, buttonProps), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.buttonContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    size: "small",
    className: _styleModule.default.iconContainer,
    onClick: () => {
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
    onClick: () => {
      onChange((0, _moment.default)(date).add(1, 'days').toDate());
    }
  }, /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    fontSize: "small",
    htmlColor: '#fa835f'
  })))), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: () => handleClose(),
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
    className: [_styleModule.default.calendarContainer, calendarClasses.calendarContainer].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, _extends({
    color: "#fa835f",
    showPreview: false,
    showMonthAndYearPickers: false,
    showDateDisplay: false,
    locale: locales['ru'],
    onChange: item => {
      handleClose(item);
      setState(item);
    },
    showSelectionPreview: true,
    date: date
  }, pickerProps)), rightSide))));
};
var _default = exports.default = CalendarPicker;
CalendarPicker.defaultProps = {
  options: [],
  onChange: () => {},
  pickerProps: {},
  buttonProps: {},
  rightSide: false,
  calendarClasses: {
    calendarContainer: ''
  }
};
CalendarPicker.propTypes = {
  date: _propTypes.default.instanceOf(Date),
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  color: _propTypes.default.string,
  variant: _propTypes.default.string,
  children: _propTypes.default.element,
  pickerProps: _propTypes.default.object,
  buttonProps: _propTypes.default.object,
  rightSide: _propTypes.default.any,
  autoClose: _propTypes.default.bool,
  forceClose: _propTypes.default.bool,
  calendarClasses: _propTypes.default.shape({
    calendarContainer: _propTypes.default.string
  })
};