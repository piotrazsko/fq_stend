"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStaticRanges = exports.default = void 0;
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
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // main css file
// theme css file

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    backgroundColor: theme.palette.action.hover
  },
  outlined: {
    backgroundColor: '#fff',
    borderRadius: '6px'
  },
  buttonRoot: {
    padding: 0
    // [theme.breakpoints.down('md')]: {
    //     fontSize: 11,
    // },
  },
  checkboxContainer: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  }
}));
const defineds = {
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
const staticRangeHandler = {
  range: {},
  isSelected(range) {
    const definedRange = this.range();
    return (0, _dateFns.isSameDay)(range.startDate, definedRange.startDate) && (0, _dateFns.isSameDay)(range.endDate, definedRange.endDate);
  }
};
function createStaticRanges(ranges) {
  return ranges.map(range => ({
    ...staticRangeHandler,
    ...range
  }));
}
const defaultStaticRanges = exports.defaultStaticRanges = createStaticRanges([{
  label: 'Сегодня',
  range: () => ({
    startDate: defineds.startOfToday,
    endDate: defineds.endOfToday
  })
}, {
  label: 'Вчера',
  range: () => ({
    startDate: defineds.startOfYesterday,
    endDate: defineds.endOfYesterday
  })
}, {
  label: 'Текущая неделя',
  range: () => ({
    startDate: defineds.startOfWeek,
    endDate: defineds.endOfWeek
  })
}, {
  label: 'Прошлая неделя',
  range: () => ({
    startDate: defineds.startOfLastWeek,
    endDate: defineds.endOfLastWeek
  })
}, {
  label: 'Текущий месяц',
  range: () => ({
    startDate: defineds.startOfMonth,
    endDate: defineds.endOfMonth
  })
}, {
  label: 'Прошлый месяц',
  range: () => ({
    startDate: defineds.startOfLastMonth,
    endDate: defineds.endOfLastMonth
  })
}]);
const RangePicker = _ref => {
  let {
    onChange,
    date,
    color,
    variant = 'text',
    rightAlign = false,
    placeholder,
    buttonProps,
    pickerProps
  } = _ref;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [chagedShownDate, updateShownDate] = _react.default.useState();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const datePrepared = _react.default.useMemo(() => ({
    from: date.from instanceof Date ? (0, _moment.default)(date.from) : date.from,
    to: date.to instanceof Date ? (0, _moment.default)(date.to) : date.to
  }), [date]);
  const [state, setState] = _react.default.useState([{
    startDate: datePrepared.from.toDate(),
    endDate: datePrepared.to.toDate(),
    key: 'selection'
  }]);
  _react.default.useEffect(() => {
    setState([{
      startDate: datePrepared.from.toDate(),
      endDate: datePrepared.to.toDate(),
      key: 'selection'
    }]);
  }, [datePrepared]);
  _react.default.useEffect(() => {
    if (open) {
      updateShownDate();
    }
  }, [open]);
  const handleClose = () => {
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
  }, buttonProps), placeholder ? placeholder : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ChevronLeft.default, {
    fontSize: "small",
    color: "primary"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.textButton
  }, datePrepared.from.format('MM YYYY') !== datePrepared.to.format('MM YYYY') ? "   ".concat(datePrepared.from.format('DD.MM.YYYY'), " - ").concat(datePrepared.to.format('DD.MM.YYYY')) : "   ".concat(datePrepared.from.format('DD'), " - ").concat(datePrepared.to.format('DD.MM.YYYY'))), /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    color: "primary",
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Popover.default, {
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
    navigatorRenderer: (currentFocusedDate, changeShownDate) => {
      if (!chagedShownDate) {
        changeShownDate((0, _moment.default)(currentFocusedDate).subtract(1, 'months').toDate());
        updateShownDate(currentFocusedDate);
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styleModule.default.navigationContainer
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: () => {
          changeShownDate((0, _moment.default)(currentFocusedDate).subtract(1, 'months').toDate());
        },
        type: "button",
        className: "rdrNextPrevButton rdrPprevButton"
      }, /*#__PURE__*/_react.default.createElement("i", null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
        className: "rdrMonthAndYearPickers"
      }, (0, _moment.default)(currentFocusedDate).add(1, 'month').format('MMMM'))), /*#__PURE__*/_react.default.createElement("button", {
        onClick: () => {
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
    onChange: item => setState([item.selection]),
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
var _default = exports.default = RangePicker;
RangePicker.defaultProps = {
  options: [],
  onChange: () => {},
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
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string
};