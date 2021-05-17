"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoCardLine = function InfoCardLine(_ref) {
  var title = _ref.title,
      value = _ref.value,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, className].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.value
  }, value));
};

InfoCardLine.propTypes = {
  title: _propTypes.default.string,
  value: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = InfoCardLine;
exports.default = _default;