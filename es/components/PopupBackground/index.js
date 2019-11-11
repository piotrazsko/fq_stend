"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.module.scss');

var PopupBackground = function PopupBackground(_ref) {
  var onClick = _ref.onClick,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children;

  var handleClick = function handleClick(event) {
    onClick();
  };

  return visible ? _react.default.createElement("div", {
    className: style.popup_background,
    role: "presentation",
    onClick: handleClick,
    onKeyDown: function onKeyDown() {}
  }, _react.default.createElement("div", {
    className: style.popup_background_inbox,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, children)) : null;
};

PopupBackground.propTypes = {
  visible: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.array]).isRequired
};
var _default = PopupBackground;
exports.default = _default;