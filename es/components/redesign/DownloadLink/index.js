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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var color = '#fa835f';

var DownloadLink = function DownloadLink(_ref) {
  var href = _ref.href,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'right' : _ref$align,
      iconProps = _ref.iconProps,
      textProps = _ref.textProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["href", "align", "iconProps", "textProps", "children"]);

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
var _default = DownloadLink;
exports.default = _default;