"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberFormatCustom = function NumberFormatCustom(_ref) {
  var inputRef = _ref.inputRef,
      suffix = _ref.suffix,
      onChange = _ref.onChange,
      name = _ref.name,
      _ref$displayType = _ref.displayType,
      displayType = _ref$displayType === void 0 ? 'text' : _ref$displayType,
      _ref$currencyCurrent = _ref.currencyCurrent,
      currencyCurrent = _ref$currencyCurrent === void 0 ? '' : _ref$currencyCurrent,
      other = _objectWithoutProperties(_ref, ["inputRef", "suffix", "onChange", "name", "displayType", "currencyCurrent"]);

  // const { id, currency_id } = useSelector(getSalonSelector);
  // const currency = useSelector(getCurrencySelector);
  // const currencyCurrent = React.useMemo(() => {
  //     return (currency.find(i => i.id == currency_id) || {}).badge;
  // }, [currency_id, currency]);
  return /*#__PURE__*/_react.default.createElement(_reactNumberFormat.default, _extends({}, other, {
    displayType: displayType,
    thousandSeparator: ' ',
    suffix: suffix || " ".concat(currencyCurrent || ''),
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          name: name,
          value: values.value
        }
      });
    },
    isNumericString: true
  }));
};

NumberFormatCustom.defaultProps = {
  onChange: function onChange() {}
};
NumberFormatCustom.propTypes = {
  onChange: _propTypes.default.func,
  inputRef: _propTypes.default.func,
  name: _propTypes.default.string,
  displayType: _propTypes.default.string,
  suffix: _propTypes.default.string,
  currencyCurrent: _propTypes.default.string
};
var _default = NumberFormatCustom;
exports.default = _default;