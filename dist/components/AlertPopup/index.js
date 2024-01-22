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
const AlertPopup = _ref => {
  let {
    type,
    onClick = () => {},
    textConfirm = 'OK',
    show = false,
    message = '',
    showForce = false,
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
    showPopup: show,
    showForce: showForce,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: ev => {
      if (typeof onClick === 'function') {
        onClick(ev);
      }
    },
    textConfirm: textConfirm,
    textCancel: "",
    type: "button",
    confirmButtonProps: {
      ...confirmButtonProps
    },
    onClose: ev => {
      if (typeof onClick === 'function') {
        onClick(ev);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.alert, classNames.textContainer || ''].join(' ')
  }, message));
};
AlertPopup.propTypes = {
  confirmButtonProps: _propTypes.default.object,
  type: _propTypes.default.oneOf(['danger', undefined]),
  show: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  message: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  textConfirm: _propTypes.default.string,
  showForce: _propTypes.default.bool,
  maxWidth: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  classNames: _propTypes.default.shape({
    textContainer: _propTypes.default.string
  })
};
var _default = exports.default = AlertPopup;