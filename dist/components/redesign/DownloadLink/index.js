"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));
var _NumberFormat = _interopRequireDefault(require("../NumberFormat"));
var _Icons = require("../../Icons");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const color = '#fa835f';
const DownloadLink = _ref => {
  let {
    href,
    align = 'right',
    iconProps,
    textProps,
    children,
    ...props
  } = _ref;
  // const classes = useStyles();

  return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: href,
    className: align === 'right' ? _styleModule.default.link : _styleModule.default.linkLeft
  }, props), /*#__PURE__*/_react.default.createElement(_Icons.DownloadIcon, iconProps), ' ', /*#__PURE__*/_react.default.createElement("span", _extends({
    className: _styleModule.default.text
  }, textProps), children));
};
DownloadLink.propTypes = {
  href: _propTypes.default.string,
  align: _propTypes.default.string,
  iconProps: _propTypes.default.object,
  textProps: _propTypes.default.object,
  children: _propTypes.default.any
};
DownloadLink.defaultProps = {
  align: 'right'
};
var _default = exports.default = DownloadLink;