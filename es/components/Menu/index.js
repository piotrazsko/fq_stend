"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Popover = _interopRequireDefault(require("../Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var style = {
  "item": "style-module_fq_item___r9VHj"
};

var Menu = function Menu(_ref) {
  var _ref$menuItems = _ref.menuItems,
      menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems,
      props = _objectWithoutProperties(_ref, ["menuItems"]);

  return /*#__PURE__*/_react.default.createElement(_Popover.default, props, menuItems.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: style.item,
      onClick: function onClick(ev) {
        item.handler(ev);
        ev.nativeEvent.stopPropagation();
        ev.nativeEvent.preventDefault();
      },
      key: item.name + index
    }, item.name);
  }));
};

Menu.propTypes = {
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    onClick: _propTypes.default.func
  })).isRequired,
  visible: _propTypes.default.bool,
  showForce: _propTypes.default.bool,
  anchorEl: _propTypes.default.any // : PropTypes.

};
var _default = Menu;
exports.default = _default;