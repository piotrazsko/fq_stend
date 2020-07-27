"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "container": "styles-module_fq_container___12YKF",
  "loader": "styles-module_fq_loader___Ykl-m",
  "loader-spin": "styles-module_fq_loader-spin___w87bx"
};

var Loader = function Loader(_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.loader
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
    id: "goo"
  }, /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "2",
    result: "blur"
  }), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2",
    result: "gooey"
  }), /*#__PURE__*/_react.default.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "gooey",
    operator: "atop"
  })))))) : null;
};

Loader.propTypes = {
  isLoading: _propTypes.default.bool.isRequired
};
var _default = Loader;
exports.default = _default;