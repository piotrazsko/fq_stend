"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Popover = _interopRequireDefault(require("../Popover"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Menu = _ref => {
  let {
    menuItems = [],
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Popover.default, props, menuItems.map((item, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.item,
    onClick: ev => {
      item.handler(ev);
      ev.nativeEvent.stopPropagation();
      ev.nativeEvent.preventDefault();
    },
    key: item.name + index
  }, item.name)));
};
Menu.propTypes = {
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    onClick: _propTypes.default.func
  })).isRequired,
  visible: _propTypes.default.bool,
  showForce: _propTypes.default.bool,
  anchorEl: _propTypes.default.any
  // : PropTypes.
};
var _default = exports.default = Menu;