"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultStaticRanges = void 0;

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

var _dateFns = require("date-fns");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.action.hover
    },
    outlined: {
      backgroundColor: '#fff',
      borderRadius: '6px'
    },
    buttonRoot: {
      padding: 0 // [theme.breakpoints.down('md')]: {
      //     fontSize: 11,
      // },

    },
    checkboxContainer: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    }
  };
});
var defineds = {
  startOfWeek: (0, _dateFns.startOfWeek)(new Date()),
  endOfWeek: (0, _dateFns.endOfWeek)(new Date()),
  startOfLastWeek: (0, _dateFns.startOfWeek)((0, _dateFns.addDays)(new Date(), -7)),
  endOfLastWeek: (0, _dateFns.endOfWeek)((0, _dateFns.addDays)(new Date(), -7)),
  startOfToday: (0, _dateFns.startOfDay)(new Date()),
  endOfToday: (0, _dateFns.endOfDay)(new Date()),
  startOfYesterday: (0, _dateFns.startOfDay)((0, _dateFns.addDays)(new Date(), -1)),
  endOfYesterday: (0, _dateFns.endOfDay)((0, _dateFns.addDays)(new Date(), -1)),
  startOfMonth: (0, _dateFns.startOfMonth)(new Date()),
  endOfMonth: (0, _dateFns.endOfMonth)(new Date()),
  startOfLastMonth: (0, _dateFns.startOfMonth)((0, _dateFns.addMonths)(new Date(), -1)),
  endOfLastMonth: (0, _dateFns.endOfMonth)((0, _dateFns.addMonths)(new Date(), -1))
};
var staticRangeHandler = {
  range: {},
  isSelected: function isSelected(range) {
    var definedRange = this.range();
    return (0, _dateFns.isSameDay)(range.startDate, definedRange.startDate) && (0, _dateFns.isSameDay)(range.endDate, definedRange.endDate);
  }
};

function createStaticRanges(ranges) {
  return ranges.map(function (range) {
    return _objectSpread(_objectSpread({}, staticRangeHandler), range);
  });
}

var defaultStaticRanges = createStaticRanges([{
  label: 'Сегодня',
  range: function range() {
    return {
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday
    };
  }
}, {
  label: 'Вчера',
  range: function range() {
    return {
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday
    };
  }
}, {
  label: 'Текущая неделя',
  range: function range() {
    return {
      startDate: defineds.startOfWeek,
      endDate: defineds.endOfWeek
    };
  }
}, {
  label: 'Прошлая неделя',
  range: function range() {
    return {
      startDate: defineds.startOfLastWeek,
      endDate: defineds.endOfLastWeek
    };
  }
}, {
  label: 'Текущий месяц',
  range: function range() {
    return {
      startDate: defineds.startOfMonth,
      endDate: defineds.endOfMonth
    };
  }
}, {
  label: 'Прошлый месяц',
  range: function range() {
    return {
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth
    };
  }
}]);
exports.defaultStaticRanges = defaultStaticRanges;

var RangePicker = function RangePicker(_ref) {
  var onChange = _ref.onChange,
      date = _ref.date,
      color = _ref.color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      _ref$rightAlign = _ref.rightAlign,
      rightAlign = _ref$rightAlign === void 0 ? false : _ref$rightAlign,
      buttonProps = _ref.buttonProps,
      pickerProps = _ref.pickerProps;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var classes = useStyles();
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var _React$useState3 = _react.default.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      chagedShownDate = _React$useState4[0],
      updateShownDate = _React$useState4[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var datePrepared = _react.default.useMemo(function () {
    return {
      from: date.from instanceof Date ? (0, _moment.default)(date.from) : date.from,
      to: date.to instanceof Date ? (0, _moment.default)(date.to) : date.to
    };
  }, [date]);

  var _React$useState5 = _react.default.useState([{
    startDate: datePrepared.from.toDate(),
    endDate: datePrepared.to.toDate(),
    key: 'selection'
  }]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1];

  _react.default.useEffect(function () {
    setState([{
      startDate: datePrepared.from.toDate(),
      endDate: datePrepared.to.toDate(),
      key: 'selection'
    }]);
  }, [datePrepared]);

  _react.default.useEffect(function () {
    if (open) {
      updateShownDate();
    }
  }, [open]);

  var handleClose = function handleClose() {
    setAnchorEl(null);
    onChange(state);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    className: rightAlign ? '' : _styleModule.default.headerButton,
    onClick: handleClick,
    color: color,
    classes: {
      text: classes.root,
      outlined: classes.outlined,
      root: classes.buttonRoot
    },
    name: "name",
    variant: variant
  }, buttonProps), /*#__PURE__*/_react.default.createElement(_ChevronLeft.default, {
    fontSize: "small",
    color: "primary"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.textButton
  }, datePrepared.from.format('MM YYYY') !== datePrepared.to.format('MM YYYY') ? "   ".concat(datePrepared.from.format('DD.MM.YYYY'), " - ").concat(datePrepared.to.format('DD.MM.YYYY')) : "   ".concat(datePrepared.from.format('DD'), " - ").concat(datePrepared.to.format('DD.MM.YYYY'))), /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    color: "primary",
    fontSize: "small"
  })), /*#__PURE__*/_react.default.createElement(_Popover.default, {
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
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactDateRange.DateRangePicker, _extends({
    color: "#fa835f",
    showPreview: false,
    navigatorRenderer: function navigatorRenderer(currentFocusedDate, changeShownDate) {
      if (!chagedShownDate) {
        changeShownDate((0, _moment.default)(currentFocusedDate).subtract(1, 'months').toDate());
        updateShownDate(currentFocusedDate);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styleModule.default.navigationContainer
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          changeShownDate((0, _moment.default)(currentFocusedDate).subtract(1, 'months').toDate());
        },
        type: "button",
        className: "rdrNextPrevButton rdrPprevButton"
      }, /*#__PURE__*/_react.default.createElement("i", null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
        className: "rdrMonthAndYearPickers"
      }, (0, _moment.default)(currentFocusedDate).add(1, 'month').format('MMMM'))), /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          changeShownDate((0, _moment.default)(currentFocusedDate).add(1, 'months').toDate());
        },
        type: "button",
        className: "rdrNextPrevButton rdrNextButton"
      }, /*#__PURE__*/_react.default.createElement("i", null)));
    },
    showMonthAndYearPickers: false,
    staticRanges: defaultStaticRanges,
    showDateDisplay: false,
    rangeColors: ['#fa835f', '#fa835f'],
    locale: locales['ru'],
    inputRanges: [],
    onChange: function onChange(item) {
      return setState([item.selection]);
    },
    showSelectionPreview: true,
    moveRangeOnFirstSelection: false,
    months: 2,
    ranges: state,
    direction: "horizontal",
    maxDate: new Date()
  }, pickerProps))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.buttonConfirm
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "small",
    color: "primary",
    variant: "contained",
    onClick: handleClose
  }, "Ok")))));
};

var _default = RangePicker;
exports.default = _default;
RangePicker.defaultProps = {
  options: [],
  onChange: function onChange() {},
  pickerProps: {},
  buttonProps: {}
};
RangePicker.propTypes = {
  date: _propTypes.default.shape({
    from: _propTypes.default.instanceOf(_moment.default),
    to: _propTypes.default.instanceOf(_moment.default)
  }),
  color: _propTypes.default.string,
  variant: _propTypes.default.string,
  rightAlign: _propTypes.default.bool,
  pickerProps: _propTypes.default.object,
  buttonProps: _propTypes.default.object,
  onChange: _propTypes.default.func
};