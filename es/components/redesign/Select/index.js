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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 160
    },
    selectEmpty: {// marginTop: theme.spacing(2),
    },
    label: {// transform: 'translate(0px, -4px) scale(0.75) !important',
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
      _ref$labelProps = _ref.labelProps,
      labelProps = _ref$labelProps === void 0 ? {} : _ref$labelProps,
      props = _objectWithoutProperties(_ref, ["options", "placeholder", "onChange", "className", "fullWidth", "label", "variant", "value", "required", "name", "labelProps"]);

  var classes = useStyles(); // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    required: required,
    variant: variant,
    className: (0, _clsx.default)(classes.formControl, className),
    fullWidth: fullWidth
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default // ref={inputLabel}
  , _extends({
    classes: {
      root: classes.label
    },
    htmlFor: "outlined-select-simple"
  }, labelProps), label || placeholder), /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
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
  fullWidth: _propTypes.default.bool,
  labelProps: _propTypes.default.object
};