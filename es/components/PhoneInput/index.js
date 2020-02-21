function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import PhoneInputDefault from 'react-phone-input-2';
var style = {
  "commonContainer": "style-module_fq_commonContainer___t49P3",
  "container": "style-module_fq_container___vC_4B"
};
import 'react-phone-input-2/lib/material.css';
export default function PhoneInput(_ref) {
  var value = _ref.value,
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

  var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      phone = _React$useState2[0],
      setPhone = _React$useState2[1];

  React.useEffect(function () {
    setPhone(value);
  }, [value]);
  React.useEffect(function () {
    onChange(phone);
  }, [phone]);
  return React.createElement(PhoneInputDefault, {
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
  value: PropTypes.string,
  countryCode: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    input: PropTypes.string
  }),
  onlyCountries: PropTypes.arrayOf(PropTypes.string)
};