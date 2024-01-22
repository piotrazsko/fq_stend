"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Grid = _interopRequireDefault(require("../Grid"));
var _Cell = _interopRequireDefault(require("./Cell"));
var _Days = _interopRequireDefault(require("./Days"));
var _utils = require("./utils");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WorkingTimeSelect = _ref => {
  let {
    workingTimeIntervals,
    isMobile = false,
    selectedTimeText = '',
    startTime,
    endTime,
    interval,
    startWeekDay,
    onChange,
    showIntervals = true
  } = _ref;
  const workingTimePrepared = _react.default.useMemo(() => {
    return (0, _utils.recoveryWorkingTimeIntervals)({
      data: workingTimeIntervals,
      startTime,
      interval,
      startWeekDay
    });
  }, [workingTimeIntervals, startTime, interval, startWeekDay]);
  const [selectedTime, selectTime] = _react.default.useState([...workingTimePrepared]);
  _react.default.useEffect(() => {
    onChange((0, _utils.prepareWorkingTimeIntervals)({
      data: selectedTime,
      startTime,
      interval,
      startWeekDay
    }));
  }, [selectedTime]);
  _react.default.useEffect(() => {
    if (workingTimePrepared.length !== selectedTime.length || !workingTimePrepared.every(item => selectedTime.find(i => i.col == item.col && i.row == item.row))) {
      selectTime([...workingTimePrepared]);
    }
  }, [workingTimeIntervals, startWeekDay]);

  // TODO:  we can get bugs
  _react.default.useEffect(() => {
    selectTime([...workingTimePrepared]);
  }, [interval]);
  const onSelect = selected => {
    if (selectedTime.find(item => {
      return selected.length > 0 && item.col === selected[0].col && item.row === selected[0].row;
    })) {
      selectTime([...selectedTime.filter(item => {
        return !selected.find(i => item.col == i.col && item.row == i.row);
      })]);
    } else {
      selectTime([...selectedTime, ...selected]);
    }
  };
  const onClear = col => {
    selectTime([...[...selectedTime].filter(item => item.col !== col)]);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, showIntervals && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.resultContainer
  }, /*#__PURE__*/_react.default.createElement(_Days.default, {
    startWeekDay: startWeekDay,
    selectedTime: selectedTime,
    startTime: startTime,
    interval: interval
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    isMobile: isMobile,
    className: _styleModule.default.gridContainer,
    cols: 8,
    rows: Math.ceil((endTime - startTime) / interval + 1),
    selectFromCol: 1,
    selectToCol: 7,
    selectFromRow: 1,
    selectToRow: Math.ceil((endTime - startTime) / interval + 1),
    setRowStyle: row => {
      return row === 0 ? _styleModule.default.firstRow : '';
    },
    setColStyle: col => {
      return col === 0 ? _styleModule.default.firstColumn : '';
    },
    cellProps: {
      children: /*#__PURE__*/_react.default.createElement(_Cell.default, {
        startTime: startTime,
        startWeekDay: startWeekDay,
        endTime: endTime,
        interval: interval,
        selectedTimeText: selectedTimeText,
        onClear: onClear,
        isMobile: isMobile
      })
    },
    selected: selectedTime,
    onSelect: onSelect
  }));
};
WorkingTimeSelect.propTypes = {
  onChange: _propTypes.default.func,
  isMobile: _propTypes.default.bool,
  selectedTimeText: _propTypes.default.string,
  startTime: _propTypes.default.number,
  endTime: _propTypes.default.number,
  startWeekDay: _propTypes.default.number,
  interval: _propTypes.default.number,
  workingTimeIntervals: _propTypes.default.object,
  showIntervals: _propTypes.default.bool
};
WorkingTimeSelect.defaultProps = {
  workingTime: [],
  startTime: 300,
  endTime: 1440,
  interval: 60,
  startWeekDay: 1,
  //utc day of week
  workingTimeIntervals: {}
};
var _default = exports.default = WorkingTimeSelect;