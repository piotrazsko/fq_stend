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
    flexDirection: 'column'
  }
}));
const SimpleSelect = _ref => {
  let {
    options,
    placeholder,
    onChange,
    value,
    variant = 'text',
    color,
    children
  } = _ref;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
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
  }, options.map(i => /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    key: i.id || i.label,
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      checked: i.id === (0, _get.default)(value, 'id'),
      onChange: () => {
        handleClose();
        if (i.id !== (0, _get.default)(value, 'id')) {
          onChange(i);
        } else {
          onChange(false);
        }
      },
      color: "primary"
    }),
    label: i.label
  })))));
};
SimpleSelect.defaultProps = {
  options: [],
  onChange: () => {}
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
var _default = exports.default = SimpleSelect;