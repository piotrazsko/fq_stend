"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var imageUrl = _ref.imageUrl,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return _react.default.createElement("div", {
    onClick: onClick,
    style: imageUrl ? {
      backgroundImage: "url(".concat(imageUrl, ")")
    } : null,
    className: (0, _classnames.default)(_stylesModule.default.icon, _stylesModule.default.iconDefault, className)
  }, children);
};

Avatar.propTypes = {
  imageUrl: _propTypes.default.string,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  children: _propTypes.default.element
};
var _default = Avatar;
exports.default = _default;