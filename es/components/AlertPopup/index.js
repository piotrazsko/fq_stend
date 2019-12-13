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
      showForce = _ref$showForce === void 0 ? false : _ref$showForce;

  return show && React.createElement(PopupCore, {
    showForce: showForce,
    colorConfirm: type === 'danger' ? 'secondary' : 'primary',
    onClick: function onClick() {
      if (typeof _onClick === 'function') {
        _onClick();
      }
    },
    textConfirm: textConfirm,
    textCancel: "",
    type: "button",
    onClose: function onClose() {
      if (typeof _onClick === 'function') {
        _onClick();
      }
    }
  }, React.createElement("div", {
    className: style.alert
  }, message));
};

AlertPopup.propTypes = {
  type: PropTypes.string,
  confirmAction: PropTypes.func,
  titleText: PropTypes.string,
  show: PropTypes.bool,
  message: PropTypes.element,
  hideAlert: PropTypes.func,
  textConfirm: PropTypes.string,
  showForce: PropTypes.bool
};
export default AlertPopup;