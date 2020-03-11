function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';
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
      confirmButtonProps = _ref$confirmButtonPro === void 0 ? {} : _ref$confirmButtonPro;

  return React.createElement(PopupCore, {
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
  }, React.createElement("div", {
    className: style.alert
  }, message));
};

AlertPopup.propTypes = {
  confirmButtonProps: PropTypes.object,
  type: PropTypes.oneOf(['danger', undefined]),
  show: PropTypes.bool,
  onClick: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textConfirm: PropTypes.string,
  showForce: PropTypes.bool
};
export default AlertPopup;