"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventCell = function EventCell(_ref) {
  var startTime = _ref.startTime,
      endTime = _ref.endTime,
      verticalSize = _ref.verticalSize,
      col = _ref.col,
      interval = _ref.interval,
      _ref$rowOffset = _ref.rowOffset,
      rowOffset = _ref$rowOffset === void 0 ? 1 : _ref$rowOffset,
      eventData = _ref.eventData,
      _ref$eventConfirmed = _ref.eventConfirmed,
      eventConfirmed = _ref$eventConfirmed === void 0 ? true : _ref$eventConfirmed,
      data = _ref.data,
      setRef = _ref.setRef,
      classes = _ref.classes,
      onClick = _ref.onClick;
  var title = data.title,
      comment = data.comment; // const
  //

  var ref = _react.default.useRef();

  _react.default.useEffect(function () {
    if (ref.current) {
      setRef(ref.current);
    }
  }, [ref]);

  var cellRowStart = startTime / (interval * verticalSize);
  var cellRowEnd = endTime / (interval * verticalSize);
  var row = Math.ceil((cellRowStart * verticalSize + rowOffset) * verticalSize);
  var colSpan = Math.ceil((cellRowEnd * verticalSize + rowOffset) * verticalSize);
  var gridArea = "".concat(row + 1, " / ").concat(col + 1, " / ").concat(colSpan + 1, " / ").concat(col + 2);
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    ref: ref,
    className: [eventConfirmed ? _styleModule.default.confirmedEvent : _styleModule.default.orderEvent, classes.root].join(' '),
    style: {
      gridArea: gridArea
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [eventConfirmed ? _styleModule.default.confirmedTime : _styleModule.default.orderedTime, classes.time].join(' ')
  }, "".concat((0, _moment.default)().hour(0).minute(startTime).format('HH:mm'), " - ").concat((0, _moment.default)().hour(0).minute(endTime).format('HH:mm'))), /*#__PURE__*/_react.default.createElement("div", {
    className: [eventConfirmed ? _styleModule.default.confirmedTitle : _styleModule.default.orderedTitle, classes.title].join(' ')
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: [eventConfirmed ? _styleModule.default.confirmedComment : _styleModule.default.orderedComment, classes.content].join(' ')
  }, comment)));
};

EventCell.propTypes = {
  setRef: _propTypes.default.func,
  classes: _propTypes.default.shape({
    root: _propTypes.default.string,
    title: _propTypes.default.string,
    time: _propTypes.default.string,
    content: _propTypes.default.string
  }),
  onClick: _propTypes.default.func
};
EventCell.defaultProps = {
  setRef: function setRef() {},
  onClick: function onClick() {},
  classes: {
    root: '',
    title: '',
    content: '',
    time: ''
  }
};
var _default = EventCell;
exports.default = _default;