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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Avatar = function Avatar(_ref) {
  var imageUrl = _ref.imageUrl,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children,
      diametr = _ref.diametr;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    style: _objectSpread(_objectSpread({}, {
      backgroundImage: imageUrl ? "url(".concat(imageUrl, ")") : ''
    }), {
      minHeight: diametr ? diametr : undefined,
      minWidth: diametr ? diametr : undefined
    }),
    className: (0, _classnames.default)(_stylesModule.default.icon, _stylesModule.default.iconDefault, imageUrl ? _stylesModule.default.image : '', className)
  }, children);
};

Avatar.propTypes = {
  imageUrl: _propTypes.default.string,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  children: _propTypes.default.element,
  diametr: _propTypes.default.number
};
var _default = Avatar;
exports.default = _default;