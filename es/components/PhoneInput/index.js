"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhoneInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MuiPhoneNumber = _interopRequireDefault(require("../MuiPhoneNumber"));

var _NoSsr = _interopRequireDefault(require("@material-ui/core/NoSsr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneInput(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      name = _ref.name,
      disabled = _ref.disabled,
      _ref$countryCode = _ref.countryCode,
      countryCode = _ref$countryCode === void 0 ? 'by' : _ref$countryCode,
      _ref$onlyCountries = _ref.onlyCountries,
      onlyCountries = _ref$onlyCountries === void 0 ? ['ru', 'by'] : _ref$onlyCountries,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Телефон' : _ref$placeholder,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Контактный номер' : _ref$label,
      required = _ref.required,
      props = _objectWithoutProperties(_ref, ["value", "onChange", "name", "disabled", "countryCode", "onlyCountries", "placeholder", "label", "required"]);

  var _React$useState = _react.default.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      phone = _React$useState2[0],
      setPhone = _React$useState2[1];

  _react.default.useEffect(function () {
    setPhone(value);
  }, [value]);

  _react.default.useEffect(function () {
    if (phone) {
      onChange(phone);
    }
  }, [phone]);

  return /*#__PURE__*/_react.default.createElement(_NoSsr.default, {
    defer: true
  }, /*#__PURE__*/_react.default.createElement(_MuiPhoneNumber.default, _extends({
    countryCodeEditable: true,
    defaultCountry: countryCode,
    onlyCountries: onlyCountries,
    margin: "normal",
    fullWidth: true,
    required: required,
    label: label,
    value: phone,
    placeholder: placeholder,
    disabled: disabled,
    name: name,
    onChange: function onChange(phone) {
      setPhone(phone);
    }
  }, props)));
}

PhoneInput.defaultProps = {
  inputProps: {}
};
PhoneInput.propTypes = {
  value: _propTypes.default.string,
  countryCode: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  name: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  classNames: _propTypes.default.shape({
    root: _propTypes.default.string,
    input: _propTypes.default.string
  }),
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  onlyCountries: _propTypes.default.arrayOf(_propTypes.default.string)
};