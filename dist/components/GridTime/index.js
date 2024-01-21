"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
var _Grid = _interopRequireDefault(require("../Grid"));
var _Cell = _interopRequireDefault(require("./components/Cell"));
var _EventCell = _interopRequireDefault(require("./components/EventCell"));
var _DisabledCell = _interopRequireDefault(require("./components/DisabledCell"));
var _CurrentTime = _interopRequireDefault(require("./components/CurrentTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TimeGrid = _ref => {
  let {
    interval,
    masters,
    showCurrentTime,
    verticalSize,
    defaultCellOnclick,
    onMasterClick,
    onMasterRightClick,
    onCellRightClick,
    onEventRightClick,
    ...props
  } = _ref;
  // const verticalSize = 5;
  const rowOffset = 1;
  const [currentTime, setTime] = _react.default.useState(new Date());
  _react.default.useState(() => {
    if (showCurrentTime) {
      setInterval(() => {
        setTime(new Date());
      }, 30000);
    }
  }, []);
  const minTime = _react.default.useMemo(() => {
    let minTime = Infinity;
    masters.forEach(item => {
      const {
        events
      } = item;
      events.forEach(i => {
        minTime = i.startTime < minTime ? i.startTime : minTime;
      });
    });
    return minTime;
  }, [masters]);
  const eventsArr = _react.default.useMemo(() => {
    return masters.reduce((acc, item, index) => {
      const {
        events
      } = item;
      const masterEvents = events.map((i, j) => {
        return /*#__PURE__*/_react.default.createElement(_EventCell.default, {
          onEventRightClick: onEventRightClick,
          classes: {
            ...(i.classes || {})
          },
          onClick: i.onClick,
          eventConfirmed: i.confirmed,
          key: 'event' + index + j,
          startTime: i.startTime,
          endTime: i.endTime,
          name: i.clientName,
          verticalSize: verticalSize,
          col: index + 1,
          interval: interval,
          rowOffset: rowOffset,
          data: i,
          setRef: ref => {
            if (!showCurrentTime && minTime === i.startTime) {
              ref.scrollIntoView({
                block: 'center'
              });
            }
          }
        });
      });
      return [...acc, ...masterEvents];
    }, []);
  }, [masters]);
  const disableArr = _react.default.useMemo(() => {
    return masters.reduce((acc, item, index) => {
      const {
        disabledTime
      } = item;
      const masterEvents = disabledTime.map((i, j) => /*#__PURE__*/_react.default.createElement(_DisabledCell.default, {
        key: 'disable' + index + j,
        startTime: i.startTime,
        endTime: i.endTime,
        verticalSize: verticalSize,
        col: index + 1,
        interval: interval,
        rowOffset: rowOffset
      }));
      return [...acc, ...masterEvents];
    }, []);
  }, [masters]);
  return /*#__PURE__*/_react.default.createElement(_Grid.default, _extends({
    className: _styleModule.default.gridContainer,
    setRowStyle: row => {
      switch (true) {
        case row === 0:
          return _styleModule.default.firstRow;
        case row % (60 / interval) == 1:
          return _styleModule.default.borderedCell;
        default:
          return _styleModule.default.cell;
      }
    },
    setColStyle: col => {
      return col === 0 ? _styleModule.default.firstColumn : _styleModule.default.column;
    },
    cols: masters.length + 1,
    verticalSize: verticalSize,
    rows: 60 / interval * 24 + 1,
    cellProps: {
      children: /*#__PURE__*/_react.default.createElement(_Cell.default, {
        onMasterClick: onMasterClick,
        defaultCellOnclick: defaultCellOnclick,
        interval: interval,
        onMasterRightClick: onMasterRightClick,
        onCellRightClick: onCellRightClick,
        getMaster: col => {
          return masters[col - 1];
        }
      })
    }
  }, props), eventsArr, disableArr, showCurrentTime && /*#__PURE__*/_react.default.createElement(_CurrentTime.default, {
    setRef: ref => {
      if (showCurrentTime) {
        ref.scrollIntoView({
          block: 'center'
        });
      }
    },
    time: currentTime,
    cols: masters.length + 1,
    verticalSize: verticalSize,
    interval: interval,
    rowOffset: rowOffset
  }));
};
TimeGrid.defaultProps = {
  masters: [],
  interval: 10,
  verticalSize: 5,
  showCurrentTime: false,
  defaultCellOnclick: () => {},
  onMasterClick: () => {},
  onMasterRightClick: () => {},
  onCellRightClick: () => {},
  onEventRightClick: () => {}
};
TimeGrid.propTypes = {
  masters: _propTypes.default.array,
  showCurrentTime: _propTypes.default.bool,
  interval: _propTypes.default.number,
  verticalSize: _propTypes.default.number,
  defaultCellOnclick: _propTypes.default.func,
  onMasterClick: _propTypes.default.func,
  onMasterRightClick: _propTypes.default.func,
  onCellRightClick: _propTypes.default.func,
  onEventRightClick: _propTypes.default.func
};
var _default = exports.default = TimeGrid;