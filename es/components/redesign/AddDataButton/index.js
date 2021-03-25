"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = '#fa835f';

var AddDataButton = function AddDataButton(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? '' : _ref$helperText;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.item,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, " ", title)), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.inputs
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_Add.default, {
    htmlColor: color
  })))), /*#__PURE__*/_react.default.createElement(_FormHelperText.default, {
    id: "component-error-text-test"
  }, helperText));
};

AddDataButton.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  helperText: _propTypes.default.string
};
var _default = AddDataButton;
exports.default = _default;