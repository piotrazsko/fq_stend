function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PopupBackground from '../PopupBackground';
import Button from '../Button';
var styles = {
  "container": "style-module_fq_container___1KNAu",
  "buttonContainer": "style-module_fq_buttonContainer___txOay",
  "dataContainer": "style-module_fq_dataContainer___3LZ9C"
};

var Popup = function Popup(_ref) {
  var props = Object.assign({}, _ref);
  var onSubmit = props.onSubmit,
      onCancel = props.onCancel,
      cancelButtonText = props.cancelButtonText,
      submitButtonText = props.submitButtonText,
      showPopup = props.showPopup,
      children = props.children,
      className = props.className,
      _props$disableSubmit = props.disableSubmit,
      disableSubmit = _props$disableSubmit === void 0 ? false : _props$disableSubmit,
      _props$disableCancel = props.disableCancel,
      disableCancel = _props$disableCancel === void 0 ? false : _props$disableCancel,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$confirmButtonP = props.confirmButtonProps,
      confirmButtonProps = _props$confirmButtonP === void 0 ? {} : _props$confirmButtonP,
      _props$cancelButtonPr = props.cancelButtonProps,
      cancelButtonProps = _props$cancelButtonPr === void 0 ? {} : _props$cancelButtonPr,
      _props$showForce = props.showForce,
      showForce = _props$showForce === void 0 ? false : _props$showForce,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$childrenContai = props.childrenContainerClassName,
      childrenContainerClassName = _props$childrenContai === void 0 ? '' : _props$childrenContai,
      showSubmit = props.showSubmit,
      showCancel = props.showCancel,
      popupBackgroundsProps = props.popupBackgroundsProps;

  var _React$useState = React.useState(showPopup),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showPopupState = _React$useState2[0],
      setState = _React$useState2[1];

  React.useEffect(function () {
    setState(showPopup);
  }, [showPopup]);

  var handleSubmit = function handleSubmit() {
    onSubmit();
    setState(false);
  };

  var handleCancell = function handleCancell() {
    onCancel();
    setState(false);
  };

  return React.createElement(PopupBackground, _extends({
    visible: showPopupState || showForce,
    onClick: handleCancell
  }, popupBackgroundsProps), React.createElement(Grid, {
    container: true,
    direction: "column",
    className: [styles.container, className, classes.root].join(' '),
    style: _objectSpread({}, style)
  }, React.createElement(Grid, {
    item: true,
    className: [styles.dataContainer, classes.dataContainer, childrenContainerClassName].join(' '),
    xs: 12
  }, children), React.createElement(Grid, {
    item: true,
    xs: 12,
    className: [styles.buttonContainer, classes.buttonContainer].join(' ')
  }, showCancel && React.createElement(Button, _extends({
    onClick: handleCancell,
    className: styles.button,
    color: "default",
    disabled: disableCancel,
    variant: "text",
    fontSize: '0.8rem'
  }, cancelButtonProps), cancelButtonText), showSubmit && React.createElement(Button, _extends({
    color: "primary",
    onClick: handleSubmit,
    disabled: disableSubmit,
    type: "submit",
    fontSize: '0.8rem'
  }, confirmButtonProps), submitButtonText))));
};

Popup.propTypes = {
  showPopup: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  classes: PropTypes.shape({
    root: PropTypes.string,
    dataContainer: PropTypes.string,
    buttonContainer: PropTypes.string
  }),
  confirmButtonClasses: PropTypes.objectOf(PropTypes.object),
  cancelButtonClasses: PropTypes.objectOf(PropTypes.object),
  disableSubmit: PropTypes.bool,
  disableCancel: PropTypes.bool,
  showSubmit: PropTypes.bool,
  showCancel: PropTypes.bool,
  showForce: PropTypes.bool,
  style: PropTypes.object,
  confirmButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object,
  childrenContainerClassName: PropTypes.string
};
Popup.defaultProps = {
  cancelButtonText: 'Отменить',
  submitButtonText: 'Применить',
  onSubmit: function onSubmit() {},
  onCancel: function onCancel() {},
  showPopup: true,
  disableSubmit: false,
  disableCancel: false,
  showSubmit: true,
  showCancel: true,
  showForce: false,
  confirmButtonProps: {},
  cancelButtonProps: {}
};
export default Popup;