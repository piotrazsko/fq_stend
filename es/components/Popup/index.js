"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _PopupBackground = _interopRequireDefault(require("../PopupBackground"));

var _Button = _interopRequireDefault(require("../Button"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Popup = function Popup(_ref) {
  var props = _extends({}, _ref);

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

  var _React$useState = _react.default.useState(showPopup),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showPopupState = _React$useState2[0],
      setState = _React$useState2[1];

  _react.default.useEffect(function () {
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

  return /*#__PURE__*/_react.default.createElement(_PopupBackground.default, _extends({
    visible: showPopupState || showForce,
    onClick: handleCancell
  }, popupBackgroundsProps), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "column",
    className: [_styleModule.default.container, className, classes.root].join(' '),
    style: _objectSpread({}, style)
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    className: [_styleModule.default.dataContainer, classes.dataContainer, childrenContainerClassName].join(' '),
    xs: 12
  }, children), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: [_styleModule.default.buttonContainer, classes.buttonContainer].join(' ')
  }, showCancel && /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    onClick: handleCancell,
    className: _styleModule.default.button,
    color: "default",
    disabled: disableCancel,
    variant: "text",
    fontSize: '0.8rem'
  }, cancelButtonProps), cancelButtonText), showSubmit && /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    color: "primary",
    onClick: handleSubmit,
    disabled: disableSubmit,
    type: "submit",
    fontSize: '0.8rem'
  }, confirmButtonProps), submitButtonText))));
};

Popup.propTypes = {
  showPopup: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  cancelButtonText: _propTypes.default.string,
  submitButtonText: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.element,
  classes: _propTypes.default.shape({
    root: _propTypes.default.string,
    dataContainer: _propTypes.default.string,
    buttonContainer: _propTypes.default.string
  }),
  confirmButtonClasses: _propTypes.default.objectOf(_propTypes.default.object),
  cancelButtonClasses: _propTypes.default.objectOf(_propTypes.default.object),
  disableSubmit: _propTypes.default.bool,
  disableCancel: _propTypes.default.bool,
  showSubmit: _propTypes.default.bool,
  showCancel: _propTypes.default.bool,
  showForce: _propTypes.default.bool,
  style: _propTypes.default.object,
  confirmButtonProps: _propTypes.default.object,
  cancelButtonProps: _propTypes.default.object,
  childrenContainerClassName: _propTypes.default.string,
  popupBackgroundsProps: _propTypes.default.object
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
var _default = Popup;
exports.default = _default;