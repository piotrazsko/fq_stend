"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventCell = function EventCell(_ref) {
  var startTime = _ref.startTime,
      endTime = _ref.endTime,
      verticalSize = _ref.verticalSize,
      col = _ref.col,
      interval = _ref.interval,
      _ref$rowOffset = _ref.rowOffset,
      rowOffset = _ref$rowOffset === void 0 ? 1 : _ref$rowOffset,
      eventData = _ref.eventData;
  // const
  //
  var cellRowStart = startTime / (interval * verticalSize);
  var cellRowEnd = endTime / (interval * verticalSize); // console.log(cellRowEnd, colSpan);

  var row = Math.ceil((cellRowStart * verticalSize + rowOffset) * verticalSize);
  var colSpan = Math.ceil((cellRowEnd * verticalSize + rowOffset) * verticalSize);
  var gridArea = "".concat(row + 1, " / ").concat(col + 1, " / ").concat(colSpan + 1, " / ").concat(col + 2);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.confirmedEvent,
    style: {
      gridArea: gridArea
    }
  });
};

EventCell.propTypes = {// : PropTypes.
};
var _default = EventCell;
exports.default = _default;