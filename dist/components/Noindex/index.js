"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Noindex = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "<!--googleoff: all--><!--noindex-->", children, "<!--/noindex--><!--googleon: all-->");
};
Noindex.propTypes = {
  children: _propTypes.default.any
};
var _default = exports.default = Noindex;