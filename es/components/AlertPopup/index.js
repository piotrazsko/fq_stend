"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PopupsCore = require("../PopupsCore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  "alert": "style-module_fq_alert___2u1n1"
};

var AlertPopup = function AlertPopup(_ref) {
  var type = _ref.type,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$textConfirm = _ref.textConfirm,
      textConfirm = _ref$textConfirm === void 0 ? 'OK' : _ref$textConfirm,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$confirmButtonPro = _ref.confirmButtonProps,
      confirmButtonProps = _ref$confirmButtonPro === void 0 ? {} : _ref$confirmButtonPro,
      maxWidth = _ref.maxWidth,
      showIcon = _ref.showIcon,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? {
    textContainer: ''
  } : _ref$classNames;

  return /*#__PURE__*/_react.default.createElement(_PopupsCore.PopupCore, {
    maxWidth: maxWidth,
    showIcon: showIcon,
    showPopup: show,
    showForce: showForce,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: function onClick(ev) {
      if (typeof _onClick === 'function') {
        _onClick(ev);
      }
    },
    textConfirm: textConfirm,
    textCancel: "",
    type: "button",
    confirmButtonProps: _objectSpread({}, confirmButtonProps),
    onClose: function onClose(ev) {
      if (typeof _onClick === 'function') {
        _onClick(ev);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [style.alert, classNames.textContainer || ''].join(' ')
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
var _default = AlertPopup;
exports.default = _default;