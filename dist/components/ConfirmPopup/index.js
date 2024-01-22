"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PopupsCore = require("../PopupsCore");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ConfirmPopup = _ref => {
  let {
    type,
    onClick = () => {},
    onCancel = () => {},
    textConfirm = 'OK',
    textCancel = 'Cancel',
    show = false,
    message = '',
    showForce = false,
    cancellButtonProps = {},
    confirmButtonProps = {},
    maxWidth,
    showIcon,
    classNames = {
      textContainer: ''
    }
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_PopupsCore.PopupCore, {
    maxWidth: maxWidth,
    showIcon: showIcon,
    showForce: showForce,
    showPopup: show,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: ev => {
      if (typeof onClick === 'function') {
        onClick(ev);
      }
    },
    textConfirm: textConfirm,
    textCancel: textCancel,
    type: "button",
    onCancel: ev => {
      if (typeof onCancel === 'function') {
        onCancel(ev);
      }
    },
    cancellButtonProps: {
      variant: 'outlined',
      ...cancellButtonProps
    },
    confirmButtonProps: {
      ...confirmButtonProps
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.confirm, classNames.textContainer || ''].join(' ')
  }, message));
};
ConfirmPopup.propTypes = {
  type: _propTypes.default.oneOf(['danger', undefined]),
  maxWidth: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  show: _propTypes.default.bool,
  message: _propTypes.default.element,
  textConfirm: _propTypes.default.string,
  showForce: _propTypes.default.bool,
  textCancel: _propTypes.default.string,
  confirmButtonProps: _propTypes.default.object,
  cancellButtonProps: _propTypes.default.object,
  showIcon: _propTypes.default.bool,
  classNames: _propTypes.default.shape({
    textContainer: _propTypes.default.string
  })
};
var _default = exports.default = ConfirmPopup;