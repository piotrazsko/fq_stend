"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _NumberFormat = _interopRequireDefault(require("../NumberFormat"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = '#fa835f"';
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    button: {
      background: '#FFFAF6',
      border: '2px solid #FA835F',
      color: '#FA835F',
      margin: '0 0px;',
      width: '32px',
      height: '32px'
    },
    inputRoot: {
      minWidth: '180px',
      margin: '0 10px'
    },
    input: {
      height: '32px',
      boxSizing: 'border-box',
      'text-align': 'center',
      fontSize: '12px'
    },
    formControll: {
      width: '100%',
      minWidth: '180px'
    }
  };
});

var saveNumber = function saveNumber(_ref) {
  var setNumber = _ref.setNumber,
      ev = _ref.ev;
  var str = ev.target.value || '';
  var number = str.replace(/[^0-9.]/g, '');

  if (number >= 0) {
    setNumber(number);
  }
};

var IncreasePicker = function IncreasePicker(_ref2) {
  var _ref2$step = _ref2.step,
      step = _ref2$step === void 0 ? 5 : _ref2$step,
      _ref2$required = _ref2.required,
      required = _ref2$required === void 0 ? true : _ref2$required,
      max = _ref2.max,
      min = _ref2.min,
      _onChange = _ref2.onChange,
      value = _ref2.value,
      helperText = _ref2.helperText,
      label = _ref2.label,
      suffix = _ref2.suffix,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    required: required,
    classes: {
      root: classes.formControll
    }
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    shrink: true,
    htmlFor: "my-input"
  }, label || ''), /*#__PURE__*/_react.default.createElement("div", {
    id: "my-input",
    className: _styleModule.default.durationContainer
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    disabled: disabled,
    size: "small",
    classes: {
      root: classes.button
    },
    onClick: function onClick() {
      if (value - step > min) {
        _onChange((parseFloat(value) || min) - step);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Remove.default, {
    className: _styleModule.default.icon,
    htmlColor: color
  })), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    disabled: disabled,
    size: "small",
    InputLabelProps: {
      shrink: true
    },
    onChange: function onChange(ev) {
      saveNumber({
        setNumber: _onChange,
        ev: ev
      });
    },
    className: _styleModule.default.textField,
    InputProps: {
      inputProps: {
        displayType: 'input',
        suffix: suffix || ''
      },
      inputComponent: _NumberFormat.default,
      classes: {
        input: classes.input,
        root: classes.inputRoot
      }
    },
    value: value,
    variant: "outlined",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 120 \u043C\u0438\u043D",
    helperText: helperText
  }), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    disabled: disabled,
    size: "small",
    classes: {
      root: classes.button
    },
    onClick: function onClick() {
      if (!value || value <= max - step) {
        _onChange((parseFloat(value) || 0) + step);
      } else {
        _onChange(max);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Add.default, {
    className: _styleModule.default.icon,
    htmlColor: color
  }))));
};

IncreasePicker.propTypes = {
  step: _propTypes.default.number,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  onChange: _propTypes.default.func,
  value: _propTypes.default.number,
  helperText: _propTypes.default.any,
  suffix: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
var _default = IncreasePicker;
exports.default = _default;