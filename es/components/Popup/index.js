"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _PopupBackground = _interopRequireDefault(require("../PopupBackground"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Popup = function Popup(_ref) {
  var props = _extends({}, _ref);

  var _props$align = props.align,
      align = _props$align === void 0 ? 'left' : _props$align,
      onSubmit = props.onSubmit,
      onCancel = props.onCancel,
      onClear = props.onClear,
      cancelButtonText = props.cancelButtonText,
      submitButtonText = props.submitButtonText,
      showPopup = props.showPopup,
      children = props.children,
      className = props.className,
      _props$disableSubmit = props.disableSubmit,
      disableSubmit = _props$disableSubmit === void 0 ? false : _props$disableSubmit,
      _props$disableCancel = props.disableCancel,
      disableCancel = _props$disableCancel === void 0 ? false : _props$disableCancel,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$confirmButtonP = props.confirmButtonProps,
      confirmButtonProps = _props$confirmButtonP === void 0 ? {} : _props$confirmButtonP,
      _props$cancelButtonPr = props.cancelButtonProps,
      cancelButtonProps = _props$cancelButtonPr === void 0 ? {} : _props$cancelButtonPr,
      style = props.style,
      _props$childrenContai = props.childrenContainerClassName,
      childrenContainerClassName = _props$childrenContai === void 0 ? '' : _props$childrenContai,
      showSubmit = props.showSubmit,
      showCancel = props.showCancel,
      _props$showClear = props.showClear,
      showClear = _props$showClear === void 0 ? false : _props$showClear,
      popupBackgroundsProps = props.popupBackgroundsProps,
      _props$message = props.message,
      message = _props$message === void 0 ? '' : _props$message,
      _props$textError = props.textError,
      textError = _props$textError === void 0 ? '' : _props$textError,
      _props$textInfo = props.textInfo,
      textInfo = _props$textInfo === void 0 ? '' : _props$textInfo,
      title = props.title;

  var handleSubmit = function handleSubmit() {
    onSubmit();
  };

  var handleCancell = function handleCancell() {
    onCancel();
  };

  return /*#__PURE__*/_react.default.createElement(_PopupBackground.default, _extends({
    visible: showPopup,
    onClick: handleCancell,
    childrenClassName: _styleModule.default.background
  }, popupBackgroundsProps), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    className: [_styleModule.default.container, className, classes.root].join(' '),
    style: _objectSpread({}, style)
  }, showClear && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    className: _styleModule.default.clear
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    className: style.buttonClear,
    onClick: onClear
  }, /*#__PURE__*/_react.default.createElement(_Clear.default, null))), title && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    className: _styleModule.default.title
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: 'h4'
  }, title)), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    className: [_styleModule.default.dataContainer, classes.dataContainer, childrenContainerClassName].join(' '),
    xs: 12
  }, children, message), (showCancel || showSubmit) && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    className: [align === 'left' ? _styleModule.default.buttonContainer_left : _styleModule.default.buttonContainer_right, classes.buttonContainer].join(' ')
  }, showCancel && /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    onClick: handleCancell,
    className: _styleModule.default.button,
    disabled: disableCancel,
    variant: "outlined",
    fontSize: '0.8rem',
    color: "primary",
    size: "large"
  }, cancelButtonProps), cancelButtonText), showSubmit && /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    color: "primary",
    onClick: handleSubmit,
    disabled: disableSubmit,
    variant: "contained",
    type: "submit",
    fontSize: '0.8rem',
    size: "large"
  }, confirmButtonProps), submitButtonText), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.textError
  }, " ", textError), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.textInfo
  }, " ", textInfo))));
};

Popup.propTypes = {
  showPopup: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  cancelButtonText: _propTypes.default.string,
  submitButtonText: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.element,
  classes: _propTypes.default.shape({
    root: _propTypes.default.string,
    dataContainer: _propTypes.default.string,
    buttonContainer: _propTypes.default.string
  }),
  confirmButtonClasses: _propTypes.default.objectOf(_propTypes.default.object),
  cancelButtonClasses: _propTypes.default.objectOf(_propTypes.default.object),
  disableSubmit: _propTypes.default.bool,
  disableCancel: _propTypes.default.bool,
  showSubmit: _propTypes.default.bool,
  showCancel: _propTypes.default.bool,
  showForce: _propTypes.default.bool,
  style: _propTypes.default.object,
  confirmButtonProps: _propTypes.default.object,
  cancelButtonProps: _propTypes.default.object,
  childrenContainerClassName: _propTypes.default.string,
  popupBackgroundsProps: _propTypes.default.object,
  align: _propTypes.default.string,
  message: _propTypes.default.any,
  textError: _propTypes.default.string,
  textInfo: _propTypes.default.string,
  showClear: _propTypes.default.bool,
  onClear: _propTypes.default.func,
  title: _propTypes.default.string
};
Popup.defaultProps = {
  cancelButtonText: 'Отменить',
  submitButtonText: 'Применить',
  onSubmit: function onSubmit() {},
  onCancel: function onCancel() {},
  onClear: function onClear() {},
  showPopup: true,
  disableSubmit: false,
  disableCancel: false,
  showSubmit: true,
  showCancel: true,
  showForce: false,
  align: 'left',
  confirmButtonProps: {},
  cancelButtonProps: {},
  style: {}
};
var _default = Popup;
exports.default = _default;