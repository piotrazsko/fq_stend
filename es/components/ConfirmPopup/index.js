function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { PopupCore } from '../PopupsCore';
var style = {
  "confirm": "style-module_fq_confirm___2_NRm"
};

var ConfirmPopup = function ConfirmPopup(_ref) {
  var type = _ref.type,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$onCancel = _ref.onCancel,
      _onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$textConfirm = _ref.textConfirm,
      textConfirm = _ref$textConfirm === void 0 ? 'OK' : _ref$textConfirm,
      _ref$textCancel = _ref.textCancel,
      textCancel = _ref$textCancel === void 0 ? 'Cancel' : _ref$textCancel,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$cancellButtonPro = _ref.cancellButtonProps,
      cancellButtonProps = _ref$cancellButtonPro === void 0 ? {} : _ref$cancellButtonPro,
      _ref$confirmButtonPro = _ref.confirmButtonProps,
      confirmButtonProps = _ref$confirmButtonPro === void 0 ? {} : _ref$confirmButtonPro,
      maxWidth = _ref.maxWidth;

  return React.createElement(PopupCore, {
    maxWidth: maxWidth,
    showForce: showForce,
    showPopup: show,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: function onClick(ev) {
      if (typeof _onClick === 'function') {
        _onClick(ev);
      }
    },
    textConfirm: textConfirm,
    textCancel: textCancel,
    type: "button",
    onCancel: function onCancel(ev) {
      if (typeof _onCancel === 'function') {
        _onCancel(ev);
      }
    },
    cancellButtonProps: _objectSpread({
      variant: 'outlined'
    }, cancellButtonProps),
    confirmButtonProps: _objectSpread({}, confirmButtonProps)
  }, React.createElement("div", {
    className: style.confirm
  }, message));
};

ConfirmPopup.propTypes = {
  type: PropTypes.oneOf(['danger', undefined]),
  maxWidth: PropTypes.string,
  onClick: PropTypes.func,
  onCancel: PropTypes.func,
  show: PropTypes.bool,
  message: PropTypes.element,
  textConfirm: PropTypes.string,
  showForce: PropTypes.bool,
  textCancel: PropTypes.string,
  confirmButtonProps: PropTypes.object,
  cancellButtonProps: PropTypes.object
};
export default ConfirmPopup;