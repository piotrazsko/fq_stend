"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _InputRating = _interopRequireDefault(require("../InputRating"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _bigstar = _interopRequireDefault(require("../../static/images/bigstar.png"));

var _invalidName = _interopRequireDefault(require("../../static/images/invalid-name.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var imagexsmall = function imagexsmall(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("title", null, "ic_star_full"), _react.default.createElement("path", {
    d: "M10.5 0L7.96 7.826H0l6.49 4.593L4.007 20l6.494-4.696L16.993 20l-2.486-7.58 6.491-4.594h-7.96z",
    stroke: "#FF8900",
    fill: "#FF8900",
    fillRule: "evenodd"
  }));
};

imagexsmall.defaultProps = {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg"
};

var ReviewForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReviewForm, _React$Component);

  function ReviewForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReviewForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReviewForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rating: 0,
      text: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onClickRating", function (rating) {
      _this.setState({
        rating: rating
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeText", function (ev) {
      var value = ev.target.value;

      _this.setState({
        text: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCkickSubmit", function (ev) {
      var onClick = _this.props.onClick;

      var state = _objectSpread({}, _this.state);

      onClick(state);
    });

    return _this;
  }

  _createClass(ReviewForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$onClose = _this$props.onClose,
          onClose = _this$props$onClose === void 0 ? function () {} : _this$props$onClose,
          onClick = _this$props.onClick;
      var rating = this.state.rating;
      return _react.default.createElement("div", {
        className: _styleModule.default.container
      }, _react.default.createElement("div", {
        className: _styleModule.default.formTitle
      }, _react.default.createElement("div", {
        className: _styleModule.default.formTitleText
      }, _react.default.createElement("span", null, "\u0412\u0441\u0435 \u043B\u0438 \u0432\u0430\u043C "), _react.default.createElement("span", null, "\u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C?")), _react.default.createElement(_Avatar.default, {
        imageUrl: _bigstar.default,
        className: _styleModule.default.formStar
      }), _react.default.createElement(_Avatar.default, {
        imageUrl: _invalidName.default,
        className: _styleModule.default.formStarsmall
      }), _react.default.createElement(_Avatar.default, {
        imageUrl: imagexsmall,
        className: _styleModule.default.formStarxsmall
      })), _react.default.createElement("div", {
        className: _styleModule.default.formInputs
      }, _react.default.createElement(_InputRating.default, {
        className: _styleModule.default.inputRatingStar,
        rating: rating,
        onClick: this.onClickRating
      }), _react.default.createElement(_TextField.default, {
        id: "standard-full-width",
        style: {
          margin: 8
        },
        placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0435!",
        margin: "normal",
        state: {
          value: ''
        },
        className: _styleModule.default.TextField,
        onChange: this.onChangeText,
        InputLabelProps: {
          shrink: true
        }
      })), _react.default.createElement("div", {
        className: _styleModule.default.formSubmit
      }, _react.default.createElement(_Button.default, {
        onClick: onClose
      }, "\u041D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435"), _react.default.createElement(_Button.default, {
        onClick: this.onCkickSubmit,
        variant: "contained",
        color: "primary",
        className: _styleModule.default.button
      }, "\u041E\u0421\u0422\u0410\u0412\u0418\u0422\u042C \u041E\u0422\u0417\u042B\u0412")));
    }
  }]);

  return ReviewForm;
}(_react.default.Component);

ReviewForm.propTypes = {
  className: _propTypes.default.string,
  onClose: _propTypes.default.func,
  onClick: _propTypes.default.func
};
var _default = ReviewForm;
exports.default = _default;