"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EventCell = _ref => {
  let {
    startTime,
    endTime,
    verticalSize,
    col,
    interval,
    rowOffset = 1,
    eventData
  } = _ref;
  // const
  //
  const cellRowStart = startTime / (interval * verticalSize);
  const cellRowEnd = endTime / (interval * verticalSize);
  // console.log(cellRowEnd, colSpan);

  const row = Math.ceil((cellRowStart * verticalSize + rowOffset) * verticalSize);
  const colSpan = Math.ceil((cellRowEnd * verticalSize + rowOffset) * verticalSize);
  const gridArea = "".concat(row + 1, " / ").concat(col + 1, " / ").concat(colSpan + 1, " / ").concat(col + 2);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.confirmedEvent,
    style: {
      gridArea: gridArea
    }
  });
};
EventCell.propTypes = {
  // : PropTypes.
};
var _default = exports.default = EventCell;