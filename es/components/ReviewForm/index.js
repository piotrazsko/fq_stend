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

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputRating from '../InputRating';
import Avatar from '../Avatar';
import image from '../../static/images/bigstar.png';
import imagesmall from '../../static/images/invalid-name.png';
import imagexsmall from '../../static/images/xsmallstar.svg';

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
      return React.createElement("div", {
        className: styles.container
      }, React.createElement("div", {
        className: styles.formTitle
      }, React.createElement("div", {
        className: styles.formTitleText
      }, React.createElement("span", null, "\u0412\u0441\u0435 \u043B\u0438 \u0432\u0430\u043C "), React.createElement("span", null, "\u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C?")), React.createElement(Avatar, {
        imageUrl: image,
        className: styles.formStar
      }), React.createElement(Avatar, {
        imageUrl: imagesmall,
        className: styles.formStarsmall
      }), React.createElement(Avatar, {
        imageUrl: imagexsmall,
        className: styles.formStarxsmall
      })), React.createElement("div", {
        className: styles.formInputs
      }, React.createElement(InputRating, {
        className: styles.inputRatingStar,
        rating: rating,
        onClick: this.onClickRating
      }), React.createElement(TextField, {
        id: "standard-full-width",
        style: {
          margin: 8
        },
        placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0435!",
        margin: "normal",
        state: {
          value: ''
        },
        className: styles.TextField,
        onChange: this.onChangeText,
        InputLabelProps: {
          shrink: true
        }
      })), React.createElement("div", {
        className: styles.formSubmit
      }, React.createElement(Button, {
        onClick: onClose
      }, "\u041D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435"), React.createElement(Button, {
        onClick: this.onCkickSubmit,
        variant: "contained",
        color: "primary",
        className: styles.button
      }, "\u041E\u0421\u0422\u0410\u0412\u0418\u0422\u042C \u041E\u0422\u0417\u042B\u0412")));
    }
  }]);

  return ReviewForm;
}(React.Component);

ReviewForm.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};
export default ReviewForm;