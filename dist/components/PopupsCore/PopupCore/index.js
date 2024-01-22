"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PopupBackground = _interopRequireDefault(require("../../PopupBackground"));
var _Button = _interopRequireDefault(require("../../Button"));
var _styleModule = _interopRequireDefault(require("../style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PopupCore = _ref => {
  let {
    showIcon = true,
    showPopup = true,
    colorConfirm = 'primary',
    colorCancel = 'primary',
    color,
    children = 'test',
    type,
    textConfirm = 'Ok',
    textCancel = 'Cancel',
    onClick,
    onCancel = () => {},
    typeConfirm = 'button',
    typeCancel = 'button',
    cancellButtonProps = {},
    confirmButtonProps = {},
    showForce = false,
    maxWidth = false,
    classes = {
      buttonsContainer: '',
      container: '',
      childrenContainer: ''
    }
  } = _ref;
  const [popup, switchPopup] = _react.default.useState(showPopup);
  _react.default.useEffect(() => {
    switchPopup(showPopup);
  }, [showPopup]);
  const closeHandler = ev => {
    switchPopup(!popup);
    onCancel(ev);
  };
  const confirmHandler = ev => {
    switchPopup(!popup);
    onClick(ev);
  };
  return (popup || showForce) && /*#__PURE__*/_react.default.createElement(_PopupBackground.default, {
    onClick: closeHandler,
    visible: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: maxWidth ? {
      maxWidth
    } : {},
    className: [_styleModule.default.container, classes.container].join(' ')
  }, showIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.icon
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.childrenContainer
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.buttonsContainer
  }, Boolean(textCancel.length) && /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    className: _styleModule.default.button,
    color: colorCancel || color,
    onClick: closeHandler,
    type: typeCancel || type,
    text: textCancel
  }, cancellButtonProps)), Boolean(textConfirm.length) && /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    className: _styleModule.default.button,
    color: colorConfirm || color,
    onClick: confirmHandler,
    type: typeConfirm || type,
    text: textConfirm
  }, confirmButtonProps)))));
};
PopupCore.propTypes = {
  children: _propTypes.default.any,
  textConfirm: _propTypes.default.string,
  textCancel: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func,
  typeConfirm: _propTypes.default.string,
  typeCancel: _propTypes.default.string,
  colorConfirm: _propTypes.default.string,
  colorCancel: _propTypes.default.string,
  type: _propTypes.default.string,
  showForce: _propTypes.default.bool,
  showIcon: _propTypes.default.bool,
  classes: _propTypes.default.shape({
    buttonsContainer: _propTypes.default.string,
    container: _propTypes.default.string,
    childrenContainer: _propTypes.default.string
  })
};
var _default = exports.default = PopupCore;