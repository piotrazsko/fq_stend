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
const CurrentTime = _ref => {
  let {
    time,
    cols,
    verticalSize,
    interval,
    rowOffset,
    setRef
  } = _ref;
  const ceil = 60 * interval / (60 * verticalSize);
  const cellRowStart = ((0, _moment.default)(time).get('minutes') + (0, _moment.default)(time).get('hours') * 60) / ceil;
  const row = Math.ceil(cellRowStart) + rowOffset * verticalSize;
  const gridArea = "".concat(row + 1, " / ", 2, " / ").concat(row + 2, " / ").concat(cols + 1);
  const gridArea2 = "".concat(row + 1, " / ", 1, " / ").concat(row + 2, " / ", 2);
  const ref = _react.default.useRef();
  _react.default.useEffect(() => {
    if (ref.current) {
      setRef(ref.current);
    }
  }, [ref]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: _styleModule.default.time,
    style: {
      gridArea: gridArea2
    }
  }, (0, _moment.default)(time).format('HH:mm')), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container,
    style: {
      gridArea: gridArea
    }
  }));
};
CurrentTime.propTypes = {
  // : PropTypes.
};
CurrentTime.defaultProps = {
  setRef: () => {}
};
var _default = exports.default = CurrentTime;