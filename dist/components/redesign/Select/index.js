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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const useStyles = (0, _styles.makeStyles)(theme => {
  console.log(theme);
  return {
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    label: {
      padding: '0 2px'
    }
  };
});
const optionsPreparingSelect = (arr, valueKey, labelKey) => arr.map(item => {
  return typeof item === 'object' ? {
    value: item[valueKey],
    label: item[labelKey]
  } : {
    value: item,
    label: item
  };
});
exports.optionsPreparingSelect = optionsPreparingSelect;
function Select(_ref) {
  let {
    options,
    placeholder,
    onChange,
    className,
    fullWidth = false,
    label,
    variant = 'outlined',
    value,
    required,
    name = 'select',
    ...props
  } = _ref;
  const classes = useStyles();
  const inputLabel = _react.default.useRef(null);
  const [labelWidth, setLabelWidth] = _react.default.useState(0);
  _react.default.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    required: required,
    variant: variant,
    className: (0, _clsx.default)(classes.formControl, className),
    fullWidth: fullWidth
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    ref: inputLabel,
    variant: variant,
    classes: {
      root: classes.label
    },
    htmlFor: "outlined-select-simple"
  }, label || placeholder), /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
    variant: variant,
    onChange: (ev, value) => {
      onChange(ev, value);
    },
    value: value,
    IconComponent: _ExpandMore.default,
    input: variant === 'outlined' ? /*#__PURE__*/_react.default.createElement(_OutlinedInput.default, {
      labelWidth: labelWidth,
      name: name,
      id: "outlined-select-simple"
    }) : /*#__PURE__*/_react.default.createElement(_Input.default, {
      labelWidth: labelWidth,
      name: name,
      id: "outlined-select-simple"
    })
  }, props), options.map(item => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: item.value,
    value: item.value
  }, item.label))));
}
Select.defaultProps = {
  options: [],
  onChange: () => {}
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