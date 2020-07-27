"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'test' : _ref$text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? false : _ref$type,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      children = _ref.children,
      fontSize = _ref.fontSize,
      typeButton = _ref.typeButton,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? '' : _ref$variant,
      style = _ref.style,
      minWidth = _ref.minWidth,
      rest = _objectWithoutProperties(_ref, ["text", "type", "color", "children", "fontSize", "typeButton", "variant", "style", "minWidth"]);

  switch (type) {
    case 'icon':
      return /*#__PURE__*/_react.default.createElement(_core.IconButton, _extends({
        color: color,
        type: typeButton,
        variant: variant,
        style: _objectSpread({
          fontSize: fontSize,
          minWidth: minWidth
        }, style),
        "aria-label": "edit"
      }, rest), children || text);

    case 'fab':
      return /*#__PURE__*/_react.default.createElement(_core.Fab, _extends({
        color: color,
        variant: variant || 'extended',
        type: typeButton,
        style: _objectSpread({
          fontSize: fontSize,
          minWidth: minWidth
        }, style),
        "aria-label": "edit"
      }, rest), children || text);

    default:
      return /*#__PURE__*/_react.default.createElement(_core.Button, _extends({
        type: typeButton,
        color: color,
        variant: variant || 'contained',
        style: _objectSpread({
          fontSize: fontSize,
          minWidth: minWidth
        }, style),
        "aria-label": "edit"
      }, rest), children || text);
  }
};

Button.propTypes = {
  children: _propTypes.default.any,
  variant: _propTypes.default.string,
  text: _propTypes.default.string,
  className: _propTypes.default.string,
  type: _propTypes.default.string,
  color: _propTypes.default.string,
  classesExt: _propTypes.default.object,
  style: _propTypes.default.object,
  fontSize: _propTypes.default.number,
  typeButton: _propTypes.default.string,
  minWidth: _propTypes.default.number
};
var _default = Button;
exports.default = _default;