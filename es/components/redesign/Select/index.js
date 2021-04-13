"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;
exports.optionsPreparingSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  console.log(theme);
  return {
    root: {// display: 'flex',
      // flexWrap: 'wrap',
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 160
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    label: {
      transform: 'translate(2px, -6px) scale(0.75) !important',
      background: '#fff',
      padding: '0 2px'
    }
  };
});

var optionsPreparingSelect = function optionsPreparingSelect(arr, valueKey, labelKey) {
  return arr.map(function (item) {
    return _typeof(item) === 'object' ? {
      value: item[valueKey],
      label: item[labelKey]
    } : {
      value: item,
      label: item
    };
  });
};

exports.optionsPreparingSelect = optionsPreparingSelect;

function Select(_ref) {
  var options = _ref.options,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      className = _ref.className,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      label = _ref.label,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      value = _ref.value,
      required = _ref.required,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'select' : _ref$name,
      props = _objectWithoutProperties(_ref, ["options", "placeholder", "onChange", "className", "fullWidth", "label", "variant", "value", "required", "name"]);

  var classes = useStyles();

  var inputLabel = _react.default.useRef(null);

  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      labelWidth = _React$useState2[0],
      setLabelWidth = _React$useState2[1];

  _react.default.useEffect(function () {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    required: required,
    variant: variant,
    className: (0, _clsx.default)(classes.formControl, className),
    fullWidth: fullWidth
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    ref: inputLabel,
    classes: {
      root: classes.label
    },
    htmlFor: "outlined-select-simple"
  }, label || placeholder), /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
    onChange: function onChange(ev, value) {
      _onChange(ev, value);
    },
    value: value,
    IconComponent: _ExpandMore.default
  }, props), options.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: item.value,
      value: item.value
    }, item.label);
  })));
}

Select.defaultProps = {
  options: [],
  onChange: function onChange() {}
};
Select.propTypes = {
  placeholder: _propTypes.default.string,
  name: _propTypes.default.string,
  options: _propTypes.default.array.isRequired,
  value: _propTypes.default.any,
  className: _propTypes.default.string,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  variant: _propTypes.default.string,
  label: _propTypes.default.string,
  fullWidth: _propTypes.default.bool
};