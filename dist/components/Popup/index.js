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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Popup = _ref => {
  let {
    ...props
  } = _ref;
  const {
    align = 'left',
    onSubmit,
    onCancel,
    onClear,
    cancelButtonText,
    submitButtonText,
    showPopup,
    children,
    className,
    disableSubmit = false,
    disableCancel = false,
    classes = {},
    confirmButtonProps = {},
    cancelButtonProps = {},
    style,
    childrenContainerClassName = '',
    showSubmit,
    showCancel,
    showClear = false,
    popupBackgroundsProps,
    message = '',
    textError = '',
    textInfo = '',
    title
  } = props;
  const handleSubmit = () => {
    onSubmit();
  };
  const handleCancell = () => {
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
    style: {
      ...style
    }
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
  onSubmit: () => {},
  onCancel: () => {},
  onClear: () => {},
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
var _default = exports.default = Popup;