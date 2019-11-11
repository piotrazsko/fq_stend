function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupBackground from '../PopupBackground';
import { Grid } from '@material-ui/core';
import Button from '../Button';
import styles from './style.module.scss';

var Popup = function Popup(_ref) {
  var props = Object.assign({}, _ref);
  var onSubmit = props.onSubmit,
      onCancel = props.onCancel,
      cancelButtonText = props.cancelButtonText,
      submitButtonText = props.submitButtonText,
      showPopup = props.showPopup,
      children = props.children;

  var _React$useState = React.useState(showPopup),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showPopupState = _React$useState2[0],
      setState = _React$useState2[1];

  React.useEffect(function () {
    setState(showPopup);
  }, [showPopup]);

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      changeState = _React$useState4[1];

  var handleSubmit = function handleSubmit() {
    onSubmit(state);
    setState(false);
  };

  var handleCancell = function handleCancell() {
    onCancel();
    setState(false);
  };

  return React.createElement(PopupBackground, {
    visible: showPopupState,
    onClick: handleCancell
  }, React.createElement(Grid, {
    container: true,
    className: styles.container
  }, React.createElement(Grid, {
    item: true,
    className: styles.dataContainer,
    xs: 12
  }, React.cloneElement(children, _objectSpread({}, props, {}, state, {
    changeState: changeState
  }))), React.createElement(Grid, {
    item: true,
    xs: 12,
    className: styles.buttonContainer
  }, React.createElement(Button, {
    onClick: handleCancell,
    className: styles.button,
    color: "primary",
    variant: "raised"
  }, cancelButtonText), React.createElement(Button, {
    color: "primary",
    classes: {
      root: styles.button
    },
    onClick: handleSubmit,
    type: "submit"
  }, submitButtonText))));
};

Popup.propTypes = {
  showPopup: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  children: PropTypes.element
};
Popup.defaultProps = {
  cancelButtonText: 'Отменить',
  submitButtonText: 'Применить',
  onSubmit: function onSubmit() {},
  onCancel: function onCancel() {},
  showPopup: true
};
export default Popup;