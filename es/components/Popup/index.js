"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PopupBackground = _interopRequireDefault(require("../PopupBackground"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("../Button"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Popup = function Popup(_ref) {
  var props = Object.assign({}, _ref);
  var onSubmit = props.onSubmit,
      onCancel = props.onCancel,
      cancelButtonText = props.cancelButtonText,
      submitButtonText = props.submitButtonText,
      showPopup = props.showPopup,
      children = props.children;

  var _React$useState = _react.default.useState(showPopup),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showPopupState = _React$useState2[0],
      setState = _React$useState2[1];

  _react.default.useEffect(function () {
    setState(showPopup);
  }, [showPopup]);

  var _React$useState3 = _react.default.useState({}),
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

  return _react.default.createElement(_PopupBackground.default, {
    visible: showPopupState,
    onClick: handleCancell
  }, _react.default.createElement(_core.Grid, {
    container: true,
    className: _styleModule.default.container
  }, _react.default.createElement(_core.Grid, {
    item: true,
    className: _styleModule.default.dataContainer,
    xs: 12
  }, _react.default.cloneElement(children, _objectSpread({}, props, {}, state, {
    changeState: changeState
  }))), _react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: _styleModule.default.buttonContainer
  }, _react.default.createElement(_Button.default, {
    onClick: handleCancell,
    className: _styleModule.default.button,
    color: "primary",
    variant: "raised"
  }, cancelButtonText), _react.default.createElement(_Button.default, {
    color: "primary",
    classes: {
      root: _styleModule.default.button
    },
    onClick: handleSubmit,
    type: "submit"
  }, submitButtonText))));
};

Popup.propTypes = {
  showPopup: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  cancelButtonText: _propTypes.default.string,
  submitButtonText: _propTypes.default.string,
  children: _propTypes.default.element
};
Popup.defaultProps = {
  cancelButtonText: 'Отменить',
  submitButtonText: 'Применить',
  onSubmit: function onSubmit() {},
  onCancel: function onCancel() {},
  showPopup: true
};
var _default = Popup;
exports.default = _default;