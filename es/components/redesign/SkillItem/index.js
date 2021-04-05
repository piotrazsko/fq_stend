"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _NumberFormat = _interopRequireDefault(require("../NumberFormat"));

var _Icons = require("../../Icons");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var color = '#fa835f';

var SkillItem = function SkillItem(_ref) {
  var onDelete = _ref.onDelete,
      data = _ref.data,
      showDuration = _ref.showDuration,
      showPrice = _ref.showPrice,
      showEdit = _ref.showEdit,
      showInfo = _ref.showInfo,
      showDelete = _ref.showDelete,
      currency_id = _ref.currency_id,
      onClick = _ref.onClick,
      onEdit = _ref.onEdit;

  var getIcon = function getIcon() {
    switch (data.parent_uid) {
      case 'hair':
        return /*#__PURE__*/_react.default.createElement(_Icons.ScissorsIcon, {
          width: "35px",
          height: "35px"
        });

      case 'massage':
        return /*#__PURE__*/_react.default.createElement(_Icons.MassageIcon, {
          width: "35px",
          height: "35px"
        });

      case 'body':
        return /*#__PURE__*/_react.default.createElement(_Icons.SpaIcon, {
          width: "35px",
          height: "35px"
        });

      case 'nails':
        return /*#__PURE__*/_react.default.createElement(_Icons.NailIcon, {
          width: "35px",
          height: "35px"
        });

      case 'tattoo':
        return /*#__PURE__*/_react.default.createElement(_Icons.TattooIcon, {
          width: "35px",
          height: "35px"
        });

      case 'cosmetology':
        return /*#__PURE__*/_react.default.createElement(_Icons.CosmeticsIcon, {
          width: "35px",
          height: "35px"
        });

      case 'face':
        return /*#__PURE__*/_react.default.createElement(_Icons.MakeUpIcon, {
          width: "35px",
          height: "35px"
        });

      default:
        return /*#__PURE__*/_react.default.createElement(_core.Icon, {
          width: "35px",
          height: "35px"
        });
    }
  }; // const classes = useStyles();


  var title = data.title,
      id = data.id,
      duration = data.duration,
      price = data.price,
      description = data.description;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleTooltipClose = function handleTooltipClose(ev) {
    ev.stopPropagation();
    setOpen(false);
  };

  var handleTooltipOpen = function handleTooltipOpen() {
    setOpen(true);
  };

  return !!data && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.item,
    key: id,
    onClick: onClick
  }, getIcon(), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, " ", title)), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.price
  }, showPrice && /*#__PURE__*/_react.default.createElement(_NumberFormat.default, {
    value: parseFloat(price),
    displayType: 'text',
    thousandSeparator: ' ',
    suffix: currency_id !== 1 ? ' RUB' : ' BYN'
  }), showDuration && /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.duration
  }, "  /  ", duration, " \u043C\u0438\u043D.")), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.inputs
  }, showInfo && /*#__PURE__*/_react.default.createElement(_core.ClickAwayListener, {
    onClickAway: handleTooltipClose
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    PopperProps: {
      disablePortal: true
    },
    onClose: handleTooltipClose,
    open: open,
    disableFocusListener: true,
    disableHoverListener: true,
    disableTouchListener: true,
    title: description
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      handleTooltipOpen();
    }
  }, /*#__PURE__*/_react.default.createElement(_InfoOutlined.default, {
    className: _styleModule.default.icon,
    htmlColor: color
  }))))), showEdit && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      onEdit();
    }
  }, /*#__PURE__*/_react.default.createElement(_Icons.EditIcon, {
    width: "13px",
    height: "13px",
    className: _styleModule.default.icon,
    htmlColor: color
  })), showDelete && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      onDelete();
    }
  }, /*#__PURE__*/_react.default.createElement(_Icons.DeleteIcon, {
    width: "13px",
    height: "13px",
    className: _styleModule.default.icon,
    htmlColor: color
  }))));
};

SkillItem.propTypes = {
  onDelete: _propTypes.default.func.isRequired,
  currency_id: _propTypes.default.number,
  onClick: _propTypes.default.func,
  onEdit: _propTypes.default.func,
  showEdit: _propTypes.default.bool,
  data: _propTypes.default.object,
  showDuration: _propTypes.default.bool,
  showPrice: _propTypes.default.bool,
  showInfo: _propTypes.default.bool,
  showDelete: _propTypes.default.bool
};
SkillItem.defaultProps = {
  data: {},
  currency_id: 1,
  onClick: function onClick() {},
  showEdit: false,
  showDuration: true,
  showPrice: true,
  showInfo: true,
  showDelete: true
};
var _default = SkillItem;
exports.default = _default;