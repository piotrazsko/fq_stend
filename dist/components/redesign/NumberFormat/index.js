"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const NumberFormatCustom = _ref => {
  let {
    inputRef,
    suffix,
    onChange,
    name,
    displayType = 'text',
    currencyCurrent = '',
    ...other
  } = _ref;
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
    onValueChange: values => {
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
  onChange: () => {}
};
NumberFormatCustom.propTypes = {
  onChange: _propTypes.default.func,
  inputRef: _propTypes.default.func,
  name: _propTypes.default.string,
  displayType: _propTypes.default.string,
  suffix: _propTypes.default.string,
  currencyCurrent: _propTypes.default.string
};
var _default = exports.default = NumberFormatCustom;