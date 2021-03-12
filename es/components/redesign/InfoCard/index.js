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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var color = ' #fa835f';
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    iconRoot: {
      fontSize: 20
    }
  };
});

var InfoCard = function InfoCard(_ref) {
  var _ref$showDivider = _ref.showDivider,
      showDivider = _ref$showDivider === void 0 ? true : _ref$showDivider,
      children = _ref.children,
      title = _ref.title,
      menuItems = _ref.menuItems,
      _ref$showMenu = _ref.showMenu,
      showMenu = _ref$showMenu === void 0 ? true : _ref$showMenu,
      headerContent = _ref.headerContent,
      minHeight = _ref.minHeight,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$showHeader = _ref.showHeader,
      showHeader = _ref$showHeader === void 0 ? true : _ref$showHeader,
      classNameChildren = _ref.classNameChildren,
      classes = _ref.classes;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose(onClick) {
    if (typeof onClick === 'function') {
      onClick();
    }

    setAnchorEl(null);
  };

  var styles = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.container, className, classes.root].join(' '),
    style: {
      minHeight: minHeight
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
  }, menuItems.map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: i.id,
      classes: i.styles,
      onClick: function onClick() {
        return handleClose(i.onClick);
      }
    }, i.title);
  }))), showDivider && /*#__PURE__*/_react.default.createElement("div", {
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
  onClose: function onClose() {},
  menuItems: [{
    id: 1,
    title: 'test',
    classes: {},
    onClick: function onClick() {
      console.log('1');
    }
  }],
  classes: {
    title: '',
    children: '',
    root: ''
  }
};
var _default = InfoCard;
exports.default = _default;