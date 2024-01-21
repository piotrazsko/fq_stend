"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Button = _ref => {
  let {
    text = 'test',
    type = false,
    color = 'primary',
    children,
    fontSize,
    typeButton,
    variant = '',
    style,
    minWidth,
    ...rest
  } = _ref;
  switch (type) {
    case 'icon':
      return /*#__PURE__*/_react.default.createElement(_core.IconButton, _extends({
        color: color,
        type: typeButton,
        variant: variant,
        style: {
          fontSize: fontSize,
          minWidth,
          ...style
        },
        "aria-label": "edit"
      }, rest), children || text);
    case 'fab':
      return /*#__PURE__*/_react.default.createElement(_core.Fab, _extends({
        color: color,
        variant: variant || 'extended',
        type: typeButton,
        style: {
          fontSize: fontSize,
          minWidth,
          ...style
        },
        "aria-label": "edit"
      }, rest), children || text);
    default:
      return /*#__PURE__*/_react.default.createElement(_core.Button, _extends({
        type: typeButton,
        color: color,
        variant: variant || 'contained',
        style: {
          fontSize: fontSize,
          minWidth,
          ...style
        },
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
var _default = exports.default = Button;