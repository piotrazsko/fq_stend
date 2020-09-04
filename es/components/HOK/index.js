"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _theme = require("./theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FQ_Style = function FQ_Style(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? _theme.theme : _ref$theme;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, children);
};

FQ_Style.propTypes = {
  theme: _propTypes.default.object,
  children: _propTypes.default.any
};
var _default = FQ_Style;
exports.default = _default;