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
      showForce = _ref$showForce === void 0 ? false : _ref$showForce;

  return show && React.createElement(PopupCore, {
    showForce: showForce,
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
    cancellButtonProps: {
      variant: 'outlined'
    }
  }, React.createElement("div", {
    className: style.confirm
  }, message));
};

ConfirmPopup.propTypes = {
  type: PropTypes.string,
  confirmAction: PropTypes.func,
  titleText: PropTypes.string,
  show: PropTypes.bool,
  message: PropTypes.element,
  hideConfirm: PropTypes.func,
  textConfirm: PropTypes.string,
  showForce: PropTypes.bool,
  textCancel: PropTypes.string
};
export default ConfirmPopup;