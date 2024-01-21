"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _styles = require("@material-ui/core/styles");
var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const color = ' #fa835f';
const useStyles = (0, _styles.makeStyles)(theme => ({
  iconRoot: {
    fontSize: 20
  }
}));
const InfoCard = _ref => {
  let {
    showDivider = true,
    children,
    title,
    menuItems,
    showMenu = true,
    headerContent,
    minHeight,
    className = '',
    showHeader = true,
    classNameChildren,
    classes
  } = _ref;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = onClick => {
    if (typeof onClick === 'function') {
      onClick();
    }
    setAnchorEl(null);
  };
  const styles = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, className, classes.root].join(' '),
    style: {
      minHeight
    }
  }, showHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.header
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.title, classes.title].join(' ')
  }, title), headerContent, showMenu && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: _styleModule.default.menu,
    size: "small",
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_MoreHoriz.default, {
    classes: {
      root: styles.iconRoot
    },
    htmlColor: color
  })), /*#__PURE__*/_react.default.createElement(_Menu.default, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, menuItems.map(i => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: i.id,
    classes: i.styles,
    onClick: () => handleClose(i.onClick)
  }, i.title)))), showDivider && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.divider
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: [classNameChildren || '', classes.children].join(' ')
  }, children));
};
InfoCard.propTypes = {
  children: _propTypes.default.any,
  title: _propTypes.default.string,
  menuItems: _propTypes.default.array,
  showMenu: _propTypes.default.bool,
  headerContent: _propTypes.default.any,
  minHeight: _propTypes.default.number,
  className: _propTypes.default.string,
  classNameChildren: _propTypes.default.string,
  showHeader: _propTypes.default.bool,
  showDivider: _propTypes.default.bool,
  classes: _propTypes.default.shape({
    title: _propTypes.default.string,
    children: _propTypes.default.string,
    root: _propTypes.default.string
  })
};
InfoCard.defaultProps = {
  onClose: () => {},
  menuItems: [{
    id: 1,
    title: 'test',
    classes: {},
    onClick: () => {
      console.log('1');
    }
  }],
  classes: {
    title: '',
    children: '',
    root: ''
  }
};
var _default = exports.default = InfoCard;