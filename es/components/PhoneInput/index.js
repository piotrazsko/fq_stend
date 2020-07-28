"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhoneInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPhoneInput = _interopRequireDefault(require("react-phone-input-2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var style = {
  "commonContainer": "style-module_fq_commonContainer___t49P3",
  "container": "style-module_fq_container___vC_4B"
}; // import 'react-phone-input-2/lib/material.css';

function PhoneInput(_ref) {
  var value = _ref.value,
      _ref$onlyNumbers = _ref.onlyNumbers,
      onlyNumbers = _ref$onlyNumbers === void 0 ? true : _ref$onlyNumbers,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      name = _ref.name,
      disabled = _ref.disabled,
      _ref$countryCode = _ref.countryCode,
      countryCode = _ref$countryCode === void 0 ? 'by' : _ref$countryCode,
      _ref$onlyCountries = _ref.onlyCountries,
      onlyCountries = _ref$onlyCountries === void 0 ? ['ru', 'by'] : _ref$onlyCountries,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? {
    root: ''
  } : _ref$classNames;

  var _React$useState = _react.default.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      phone = _React$useState2[0],
      setPhone = _React$useState2[1];

  _react.default.useEffect(function () {
    setPhone(value);
  }, [value]);

  _react.default.useEffect(function () {
    if (phone) {
      onChange(onlyNumbers ? phone.replace(/\D/g, '') : phone);
    }
  }, [phone]);

  return /*#__PURE__*/_react.default.createElement(_reactPhoneInput.default, {
    containerClass: ['react-tel-input', style.commonContainer, classNames.root].join(' '),
    inputClass: [style.container, classNames.input].join(' '),
    dropdownClass: style.dropdownClass,
    currentStyle: "material",
    country: countryCode,
    onlyCountries: onlyCountries,
    value: phone,
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    disabled: disabled,
    name: name,
    onChange: function onChange(phone) {
      return setPhone(phone);
    }
  });
}

PhoneInput.propTypes = {
  onlyNumbers: _propTypes.default.bool,
  value: _propTypes.default.string,
  countryCode: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  name: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  classNames: _propTypes.default.shape({
    root: _propTypes.default.string,
    input: _propTypes.default.string
  }),
  onlyCountries: _propTypes.default.arrayOf(_propTypes.default.string)
};