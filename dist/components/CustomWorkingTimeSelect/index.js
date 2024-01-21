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
const today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
const DAY_MS = 60 * 1000 * 60 * 24;
const useBookedTimeHook = _ref => {
  let {
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    curentDay,
    interval,
    startWeekDay,
    startTime
  } = _ref;
  const [workingTimeActual, setActualWorkingTime] = _react.default.useState(weekPrepare({
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    curentDay,
    interval,
    startWeekDay
  }));
  _react.default.useEffect(() => {
    setActualWorkingTime(weekPrepare({
      workingTimeIntervals,
      customTimeIntervals,
      bookedTime,
      curentDay,
      interval,
      startWeekDay
    }));
  }, [curentDay, bookedTime, startWeekDay, interval, customTimeIntervals, workingTimeIntervals]);
  return (0, _utils.getBookingTime)({
    interval,
    startTime,
    startWeekDay,
    bookedTime: workingTimeActual.map(i => i.bookedTimePeriods)
  });
};
const weekPrepare = _ref2 => {
  let {
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    curentDay,
    interval,
    startWeekDay
  } = _ref2;
  const arr = new Array(7);
  return arr.fill(1).map((item, index) => {
    const day = new Date(curentDay);
    return (0, _utils.workingTimePrepare)({
      ...(0, _utils.getDataForSelectedDate)({
        workingTime: workingTimeIntervals,
        customTime: customTimeIntervals,
        bookedTime: bookedTime,
        curentDay: new Date(day.valueOf() - (day.getDay() - index - startWeekDay) * DAY_MS),
        interval
      })
    });
  });
};
const CustomWorkingTimeSelect = _ref3 => {
  let {
    onChange = () => {},
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    isMobile = false,
    selectedTimeText = '',
    startTime,
    endTime,
    disableSelectBeforeDate = new Date(),
    interval,
    startWeekDay,
    curentDay: curentDayDefault,
    filterOutSuspensionIntervals = true
  } = _ref3;
  //used for show working time
  const [workingTime, setWorkingTime] = _react.default.useState([...(0, _utils.recoveryWorkingTimeIntervals)({
    data: workingTimeIntervals,
    startTime,
    interval,
    startWeekDay
  })]);
  _react.default.useEffect(() => {
    setWorkingTime([...(0, _utils.recoveryWorkingTimeIntervals)({
      data: workingTimeIntervals,
      startTime,
      interval,
      startWeekDay
    })]);
  }, [interval, startWeekDay]);
  const [curentDay, setCurentDay] = _react.default.useState((0, _utils.getFirstWeekDayByDate)({
    date: curentDayDefault,
    startWeekDay
  }));
  _react.default.useEffect(() => {
    const newCurentDay = (0, _utils.getFirstWeekDayByDate)({
      date: curentDayDefault,
      startWeekDay
    });
    setCurentDay(newCurentDay);
  }, [startWeekDay]);
  const [selectedCell, setSelectedCell] = _react.default.useState([...(0, _utils.convertCustomTimeToColRowObj)({
    interval,
    startTime,
    startWeekDay,
    colOffset: 1,
    rowOffset: 1,
    customTimeIntervals
  }).filter(item => {
    if (filterOutSuspensionIntervals) {
      const cell = workingTime.find(i => i.col == item.col && i.row == item.row);
      const needRemove = cell && item.enabled || !cell && item.disabled;
      return !needRemove;
    }
    return true;
  })]);
  _react.default.useEffect(() => {
    setSelectedCell([...(0, _utils.convertCustomTimeToColRowObj)({
      interval,
      startTime,
      startWeekDay,
      colOffset: 1,
      rowOffset: 1,
      customTimeIntervals
    }).filter(item => {
      if (filterOutSuspensionIntervals) {
        const cell = workingTime.find(i => i.col == item.col && i.row == item.row);
        const needRemove = cell && item.enabled || !cell && item.disabled;
        return !needRemove;
      }
      return true;
    })]);
  }, [interval, startWeekDay]);
  const bookedTimePrepared = useBookedTimeHook({
    workingTimeIntervals,
    customTimeIntervals,
    bookedTime,
    curentDay,
    interval,
    startWeekDay,
    startTime
  });
  _react.default.useEffect(() => {
    onChange((0, _utils.convertColRowToCustomTime)({
      data: selectedCell,
      interval,
      startTime,
      startWeekDay
    }));
  }, [selectedCell]);
  const onSelect = selected => {
    const filtered = selectedCell.filter(item => {
      const startWeekDayMS = item.startWeekDay.valueOf();
      return !selected.find(i => i.col === item.col && i.row === item.row && curentDay.valueOf() >= startWeekDayMS && curentDay.valueOf() < startWeekDayMS + 7 * DAY_MS);
    });
    if (filtered.length !== selectedCell.length) {
      setSelectedCell([...filtered]);
    } else {
      const cells = [...selectedCell, ...selected.filter(item => {
        return !bookedTimePrepared.find(i => i.col === item.col && i.row === item.row);
      }).map(item => ({
        ...item,
        startWeekDay: curentDay,
        itemTime: (0, _utils.getRealDateByColRow)({
          col: item.col,
          row: item.row,
          interval,
          startTime,
          rowOffset: 1,
          colOffset: 1,
          firstWeekDayDate: curentDay
        }),
        disabled: Boolean(workingTime.find(i => i.col == item.col && item.row == i.row))
      }))];
      setSelectedCell(disableSelectBeforeDate ? cells.filter(i => i.itemTime > disableSelectBeforeDate) : cells);
    }
  };
  const onClear = col => {
    // BUG:  need change algorithm for clean/ now cleaned for all dated in this column
    setSelectedCell([...selectedCell.filter(i => i.col !== col)]);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.resultContainer
  }, /*#__PURE__*/_react.default.createElement(_Days.default, {
    startWeekDay: startWeekDay,
    curentDay: curentDay,
    setCurentDay: setCurentDay
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    isMobile: isMobile,
    className: _styleModule.default.gridContainer,
    cols: 9,
    rows: Math.ceil((endTime - startTime) / interval + 1),
    selectFromCol: 1,
    selectToCol: 7,
    selectFromRow: 1,
    selectToRow: Math.ceil((endTime - startTime) / interval + 1),
    setRowStyle: row => {
      return row === 0 ? _styleModule.default.firstRow : '';
    },
    setColStyle: col => {
      switch (col) {
        case 0:
          return _styleModule.default.firstColumn;
        case 8:
          return _styleModule.default.lastColumn;
        default:
          return '';
      }
    },
    cellProps: {
      children: /*#__PURE__*/_react.default.createElement(_Cell.default, {
        setCurentDay: setCurentDay,
        startTime: startTime,
        startWeekDay: startWeekDay,
        endTime: endTime,
        interval: interval,
        selectedTimeText: selectedTimeText,
        onClear: onClear,
        isMobile: isMobile,
        curentDay: curentDay,
        customTimeSelectedCell: selectedCell,
        bookedTime: bookedTimePrepared
      })
    },
    selected: workingTime,
    onSelect: onSelect
  }));
};
CustomWorkingTimeSelect.propTypes = {
  onChange: _propTypes.default.func,
  isMobile: _propTypes.default.bool,
  selectedTimeText: _propTypes.default.string,
  startTime: _propTypes.default.number,
  endTime: _propTypes.default.number,
  startWeekDay: _propTypes.default.number,
  interval: _propTypes.default.number,
  workingTimeIntervals: _propTypes.default.object,
  customTimeIntervals: _propTypes.default.object,
  bookedTime: _propTypes.default.array,
  curentDay: _propTypes.default.instanceOf(Date),
  disableSelectBeforeDate: _propTypes.default.instanceOf(Date)
};
CustomWorkingTimeSelect.defaultProps = {
  workingTime: [],
  startTime: 300,
  endTime: 1440,
  interval: 60,
  startWeekDay: 1,
  //utc day of week
  workingTimeIntervals: {},
  curentDay: today,
  customTimeIntervals: {}
};
var _default = exports.default = CustomWorkingTimeSelect;