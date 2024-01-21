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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function PhoneInput(_ref) {
  let {
    value = '',
    onChange = () => {},
    name,
    disabled,
    countryCode = 'by',
    onlyCountries = ['ru', 'by'],
    countryCodes,
    placeholder = 'Телефон',
    label = 'Контактный номер',
    required,
    ...props
  } = _ref;
  const [phone, setPhone] = _react.default.useState(value);
  _react.default.useEffect(() => {
    setPhone(value);
  }, [value]);
  _react.default.useEffect(() => {
    if (phone) {
      onChange(phone);
    }
  }, [phone]);
  const countryByPhone = _react.default.useMemo(() => {
    switch (true) {
      case countryCodes.some(i => value.indexOf(i.code) === 0):
        return countryCodes.find(i => value.indexOf(i.code) === 0).country;
      default:
        return countryCode;
    }
  }, [value, onlyCountries, countryCodes]);
  return /*#__PURE__*/_react.default.createElement(_NoSsr.default, {
    defer: true
  }, /*#__PURE__*/_react.default.createElement(_MuiPhoneNumber.default, _extends({
    countryCodeEditable: true,
    defaultCountry: countryByPhone,
    onlyCountries: onlyCountries,
    margin: "normal",
    fullWidth: true,
    required: required,
    label: label,
    value: phone,
    placeholder: placeholder,
    disabled: disabled,
    name: name,
    onChange: phone => {
      setPhone(phone);
    }
  }, props)));
}
PhoneInput.defaultProps = {
  inputProps: {},
  countryCodes: [{
    country: 'by',
    code: '375'
  }, {
    code: '7',
    country: 'ru'
  }]
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
  onlyCountries: _propTypes.default.arrayOf(_propTypes.default.string),
  countryCodes: _propTypes.default.arrayOf(_propTypes.default.shape({
    country: _propTypes.default.string,
    code: _propTypes.default.string
  }))
};