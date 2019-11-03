"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhoneInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _textMask = _interopRequireDefault(require("./components/textMask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing(1)
    }
  };
});

function PhoneInput(_ref) {
  var value = _ref.value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      name = _ref.name,
      disabled = _ref.disabled,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label;
  var classes = useStyles();

  var _React$useState = _react.default.useState({
    textmask: value
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  _react.default.useEffect(function () {
    setValues(_objectSpread({}, values, {
      textmask: value
    }));
  }, [value]);

  function setCaretPosition(ctrl, pos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos); // IE8 and below
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  var handleChange = function handleChange(nameField) {
    return function (event) {
      setValues(_objectSpread({}, values, _defineProperty({}, nameField, event.target.value)));
      onChange({
        target: {
          value: event.target.value.replace(/\D/g, ''),
          name: name
        }
      });
    };
  };

  var onFocus = function onFocus(ev) {
    var target = ev.target;
    setTimeout(function () {
      var res = target.value.replace(/\D/g, '');
      res = target.value.lastIndexOf(res[res.length - 1]);
      res = res === -1 ? 0 : res;
      target.setSelectionRange(res + 1, res + 1);
    }, 50);
  };

  return _react.default.createElement(_FormControl.default, {
    className: classes.formControl
  }, _react.default.createElement(_InputLabel.default, {
    htmlFor: "formatted-text-mask-input"
  }, label), _react.default.createElement(_Input.default, {
    onFocus: onFocus,
    disabled: disabled,
    value: values.textmask,
    name: name,
    onChange: handleChange('textmask'),
    id: "formatted-text-mask-input",
    inputComponent: _textMask.default
  }));
}

PhoneInput.propTypes = {
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  name: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string
};