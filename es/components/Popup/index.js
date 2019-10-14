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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPopup: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$props$onSubmit = _this.props.onSubmit,
          onSubmit = _this$props$onSubmit === void 0 ? function () {} : _this$props$onSubmit;
      onSubmit(_this.state);

      _this.setState({
        showPopup: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancell", function () {
      var _this$props$onCancel = _this.props.onCancel,
          onCancel = _this$props$onCancel === void 0 ? function () {} : _this$props$onCancel;
      onCancel();

      _this.setState({
        showPopup: false
      });
    });

    return _this;
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$cancelBut = _this$props.cancelButtonText,
          cancelButtonText = _this$props$cancelBut === void 0 ? 'Отменить' : _this$props$cancelBut,
          _this$props$submitBut = _this$props.submitButtonText,
          submitButtonText = _this$props$submitBut === void 0 ? 'Применить' : _this$props$submitBut,
          props = _objectWithoutProperties(_this$props, ["children", "cancelButtonText", "submitButtonText"]);

      var _this$state = this.state,
          showPopup = _this$state.showPopup,
          state = _objectWithoutProperties(_this$state, ["showPopup"]);

      return showPopup ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_PopupBackground.default, {
        visible: true,
        onClick: this.handleCancell
      }, _react.default.createElement(_core.Grid, {
        container: true,
        className: _styleModule.default.container
      }, _react.default.createElement(_core.Grid, {
        item: true,
        className: _styleModule.default.dataContainer,
        xs: 12
      }, _react.default.cloneElement(children, _objectSpread({}, props, {}, state))), _react.default.createElement(_core.Grid, {
        item: true,
        xs: 12,
        className: _styleModule.default.buttonContainer
      }, _react.default.createElement(_Button.default, {
        onClick: this.handleCancell,
        className: _styleModule.default.button,
        color: "primary",
        variant: "raised"
      }, cancelButtonText), _react.default.createElement(_Button.default, {
        color: "primary",
        classes: {
          root: _styleModule.default.button
        },
        onClick: this.handleSubmit,
        type: "submit"
      }, submitButtonText))))) : null;
    }
  }]);

  return Popup;
}(_react.Component);

_defineProperty(Popup, "propTypes", {
  onSubmit: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  cancelButtonText: _propTypes.default.string,
  submitButtonText: _propTypes.default.string,
  children: _propTypes.default.element
});

_defineProperty(Popup, "defaultProps", {
  cancelButtonText: 'Отменить',
  submitButtonText: 'Применить'
});

var _default = Popup;
exports.default = _default;