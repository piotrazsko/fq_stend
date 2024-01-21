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
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const useStyles = (0, _styles.makeStyles)(theme => ({
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  input: {
    maxWidth: '45%',
    width: 120
    // height: 24,
    // fontSize: 22,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: '0 10px 10px 10px'
  }
}));
const SimpleInput = _ref => {
  let {
    placeholder,
    onChange,
    value,
    variant = 'text',
    color,
    children,
    isRange = true,
    inputStartProps = {},
    inputEndProps = {},
    inputsProps = {},
    confirmText = 'Ok'
  } = _ref;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const [start, setStart] = _react.default.useState(isRange ? (0, _get.default)(value, 'from') : value);
  const [end, setEnd] = _react.default.useState(isRange ? (0, _get.default)(value, 'to') : undefined);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children ? ( /*#__PURE__*/_react.default.cloneElement(children, {
    onClick: handleClick
  })) : /*#__PURE__*/_react.default.createElement(_Button.default, {
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
      color: color === 'primary' ? undefined : 'primary'
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
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    classes: {
      root: classes.input
    },
    onChange: ev => {
      setStart(ev.target.value);
    },
    variant: 'outlined',
    size: "small",
    placeholder: "\u041E\u0442",
    label: "\u041E\u0442",
    InputLabelProps: {
      shrink: true
    }
  }, inputsProps, inputStartProps)), isRange && /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    classes: {
      root: classes.input
    },
    onChange: ev => {
      setEnd(ev.target.value);
    },
    placeholder: "\u0414\u043E",
    label: "\u0414\u043E",
    variant: 'outlined',
    size: "small",
    InputLabelProps: {
      shrink: true
    }
  }, inputsProps, inputEndProps))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.buttonContainer
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      if (isRange) {
        onChange({
          from: start,
          to: end
        });
      } else {
        onChange(start);
      }
      handleClose();
    },
    size: "small",
    variant: 'contained',
    color: 'primary'
  }, confirmText))));
};
SimpleInput.defaultProps = {
  onChange: () => {},
  inputStartProps: {},
  inputEndProps: {},
  inputsProps: {},
  value: undefined
};
SimpleInput.propTypes = {
  placeholder: _propTypes.default.string,
  value: _propTypes.default.any,
  onChange: _propTypes.default.func,
  variant: _propTypes.default.string,
  color: _propTypes.default.string,
  children: _propTypes.default.element,
  isRange: _propTypes.default.bool,
  inputStartProps: _propTypes.default.object,
  inputEndProps: _propTypes.default.object,
  inputsProps: _propTypes.default.object,
  confirmText: _propTypes.default.string
};
var _default = exports.default = SimpleInput;