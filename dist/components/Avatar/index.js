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
const Avatar = _ref => {
  let {
    imageUrl,
    className,
    onClick,
    children,
    diametr
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    style: {
      ...{
        backgroundImage: imageUrl ? "url(".concat(imageUrl, ")") : ''
      },
      ...{
        minHeight: diametr ? diametr : undefined,
        minWidth: diametr ? diametr : undefined
      }
    },
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
var _default = exports.default = Avatar;