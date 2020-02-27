function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../../PopupBackground';
import Button from '../../Button';
var style = {
  "container": "style-module_fq_container___1I18N",
  "icon": "style-module_fq_icon___185Zz",
  "button": "style-module_fq_button___2Bn-o"
};

var PopupCore = function PopupCore(_ref) {
  var _ref$showIcon = _ref.showIcon,
      showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
      _ref$showPopup = _ref.showPopup,
      showPopup = _ref$showPopup === void 0 ? true : _ref$showPopup,
      _ref$colorConfirm = _ref.colorConfirm,
      colorConfirm = _ref$colorConfirm === void 0 ? 'primary' : _ref$colorConfirm,
      _ref$colorCancel = _ref.colorCancel,
      colorCancel = _ref$colorCancel === void 0 ? 'primary' : _ref$colorCancel,
      color = _ref.color,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'test' : _ref$children,
      type = _ref.type,
      _ref$textConfirm = _ref.textConfirm,
      textConfirm = _ref$textConfirm === void 0 ? 'Ok' : _ref$textConfirm,
      _ref$textCancel = _ref.textCancel,
      textCancel = _ref$textCancel === void 0 ? 'Cancel' : _ref$textCancel,
      onClick = _ref.onClick,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$typeConfirm = _ref.typeConfirm,
      typeConfirm = _ref$typeConfirm === void 0 ? 'button' : _ref$typeConfirm,
      _ref$typeCancel = _ref.typeCancel,
      typeCancel = _ref$typeCancel === void 0 ? 'button' : _ref$typeCancel,
      _ref$cancellButtonPro = _ref.cancellButtonProps,
      cancellButtonProps = _ref$cancellButtonPro === void 0 ? {} : _ref$cancellButtonPro,
      _ref$confirmButtonPro = _ref.confirmButtonProps,
      confirmButtonProps = _ref$confirmButtonPro === void 0 ? {} : _ref$confirmButtonPro,
      _ref$showForce = _ref.showForce,
      showForce = _ref$showForce === void 0 ? false : _ref$showForce,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {
    buttonsContainer: '',
    container: '',
    childrenContainer: ''
  } : _ref$classes;

  var _React$useState = React.useState(showPopup),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popup = _React$useState2[0],
      switchPopup = _React$useState2[1];

  React.useEffect(function () {
    switchPopup(showPopup);
  }, [showPopup]);

  var closeHandler = function closeHandler(ev) {
    switchPopup(!popup);
    onCancel(ev);
  };

  var confirmHandler = function confirmHandler(ev) {
    switchPopup(!popup);
    onClick(ev);
  };

  return (popup || showForce) && React.createElement(PopupBackground, {
    onClick: closeHandler,
    visible: true
  }, React.createElement("div", {
    className: [style.container, classes.container].join(' ')
  }, showIcon && React.createElement("div", {
    className: style.icon
  }), React.createElement("div", {
    className: classes.childrenContainer
  }, children), React.createElement("div", {
    className: classes.buttonsContainer
  }, Boolean(textCancel.length) && React.createElement(Button, _extends({
    className: style.button,
    color: colorCancel || color,
    onClick: closeHandler,
    type: typeCancel || type,
    text: textCancel
  }, cancellButtonProps)), Boolean(textConfirm.length) && React.createElement(Button, _extends({
    className: style.button,
    color: colorConfirm || color,
    onClick: confirmHandler,
    type: typeConfirm || type,
    text: textConfirm
  }, confirmButtonProps)))));
};

PopupCore.propTypes = {
  children: PropTypes.any,
  textConfirm: PropTypes.string,
  textCancel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  typeConfirm: PropTypes.string,
  typeCancel: PropTypes.string,
  colorConfirm: PropTypes.string,
  colorCancel: PropTypes.string,
  type: PropTypes.string,
  showForce: PropTypes.bool,
  showIcon: PropTypes.bool,
  classes: PropTypes.shape({
    buttonsContainer: PropTypes.string,
    container: PropTypes.string,
    childrenContainer: PropTypes.string
  })
};
export default PopupCore;