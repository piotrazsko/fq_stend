"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Background = _interopRequireDefault(require("./Background"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopupBackground = function PopupBackground(_ref) {
  var onClick = _ref.onClick,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      className = _ref.className,
      children = _ref.children,
      childrenClassName = _ref.childrenClassName;
  return visible ? /*#__PURE__*/_react.default.createElement(_Background.default, {
    onClick: onClick,
    className: className,
    childrenClassName: childrenClassName
  }, children) : null;
};

PopupBackground.propTypes = {
  visible: _propTypes.default.bool,
  className: _propTypes.default.string,
  childrenClassName: _propTypes.default.string,
  onClick: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.array]).isRequired
};
var _default = PopupBackground;
exports.default = _default;