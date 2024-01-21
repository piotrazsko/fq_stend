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
const color = '#fa835f';
const SkillItem = _ref => {
  let {
    onDelete,
    data,
    showDuration,
    showPrice,
    showEdit,
    showInfo,
    showDelete,
    currency_id,
    onClick,
    onEdit,
    classes
  } = _ref;
  const getIcon = () => {
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
  };
  // const classes = useStyles();
  const {
    title,
    id,
    duration,
    price,
    description
  } = data;
  const [open, setOpen] = _react.default.useState(false);
  const handleTooltipClose = ev => {
    ev.stopPropagation();
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return !!data && /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.item, classes.root].join(' '),
    key: id,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.iconContainer
  }, getIcon()), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.title, classes.title].join(' ')
  }, " ", title)), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.price, classes.price].join(' ')
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
    onClick: ev => {
      ev.stopPropagation();
      handleTooltipOpen();
    }
  }, /*#__PURE__*/_react.default.createElement(_InfoOutlined.default, {
    className: _styleModule.default.icon,
    htmlColor: color
  }))))), showEdit && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: ev => {
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
    onClick: ev => {
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
  showDelete: _propTypes.default.bool,
  classes: _propTypes.default.shape({
    price: _propTypes.default.string,
    title: _propTypes.default.string,
    root: _propTypes.default.string
  })
};
SkillItem.defaultProps = {
  data: {},
  currency_id: 1,
  onClick: () => {},
  showEdit: false,
  showDuration: true,
  showPrice: true,
  showInfo: true,
  showDelete: true,
  classes: {
    price: '',
    title: '',
    root: ''
  }
};
var _default = exports.default = SkillItem;