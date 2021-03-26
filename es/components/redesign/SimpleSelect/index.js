"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _styles = require("@material-ui/core/styles");

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.action.hover
    },
    outlined: {
      backgroundColor: '#fff',
      borderRadius: '6px'
    },
    checkboxContainer: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    }
  };
});

var SimpleSelect = function SimpleSelect(_ref) {
  var options = _ref.options,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      value = _ref.value,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      color = _ref.color,
      children = _ref.children;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var classes = useStyles();
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children ? /*#__PURE__*/_react.default.cloneElement(children, {
    onClick: handleClick
  }) : /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: color,
    "aria-describedby": id,
    onClick: handleClick,
    classes: {
      text: classes.root,
      outlined: classes.outlined
    },
    name: "name",
    variant: variant,
    endIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
      color: "primary"
    })
  }, (0, _get.default)(value, 'label', placeholder)), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxContainer
  }, options.map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      key: i.id || i.label,
      control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
        checked: i.id === (0, _get.default)(value, 'id'),
        onChange: function onChange() {
          handleClose();

          if (i.id !== (0, _get.default)(value, 'id')) {
            _onChange(i);
          } else {
            _onChange(false);
          }
        },
        color: "primary"
      }),
      label: i.label
    });
  }))));
};

SimpleSelect.defaultProps = {
  options: [],
  onChange: function onChange() {}
};
SimpleSelect.propTypes = {
  placeholder: _propTypes.default.string,
  options: _propTypes.default.array.isRequired,
  value: _propTypes.default.any,
  onChange: _propTypes.default.func,
  variant: _propTypes.default.string,
  color: _propTypes.default.string,
  children: _propTypes.default.element
};
var _default = SimpleSelect;
exports.default = _default;