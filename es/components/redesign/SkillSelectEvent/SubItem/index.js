"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));
var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));
var _styles = require("@material-ui/core/styles");
var _Icons = require("../../../Icons");
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    fontSize: '12px !important',
    borderRadius: '6px'
  },
  input: {
    paddingTop: '9px',
    paddingBottom: '9px'
  },
  icon: {
    width: '35px',
    height: '35px'
  }
}));
const saveNumber = _ref => {
  let {
    setNumber,
    ev
  } = _ref;
  const str = ev.target.value || '';
  setNumber(str.replace(/[^0-9.]/g, ''));
};
const SubItem = _ref2 => {
  let {
    data,
    selected,
    setSelected,
    showInputs,
    inputComponent,
    inputProps,
    priceProps,
    durationProps,
    showInputsForce,
    InputPriceProps,
    InputDurationProps
  } = _ref2;
  const classes = useStyles();
  const isSelected = _react.default.useMemo(() => {
    return selected.find(i => i.id === data.id);
  }, [selected]);
  const setPrice = price => {
    setSelected([...selected.filter(i => i.id !== isSelected.id), {
      ...isSelected,
      price
    }]);
  };
  const setDuration = duration => {
    setSelected([...selected.filter(i => i.id !== isSelected.id), {
      ...isSelected,
      duration
    }]);
  };
  const {
    price,
    duration
  } = isSelected || {};
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
        return /*#__PURE__*/_react.default.createElement(_Icon.default, {
          width: "35px",
          height: "35px"
        });
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.item,
    key: data.id,
    onClick: () => {
      setSelected(!isSelected ? [...selected, showInputsForce ? {
        id: data.id,
        price: priceProps.defaultValue || 0,
        duration: durationProps.defaultValue || 0
      } : {
        id: data.id
      }] : selected.filter(i => i.id !== data.id));
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.iconContainer
  }, isSelected ? /*#__PURE__*/_react.default.createElement(_CheckCircle.default, {
    htmlColor: "#fa835f",
    className: classes.icon
  }) : getIcon()), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, " ", data.title)), (isSelected && showInputs || showInputsForce) && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.inputs,
    onClick: ev => {
      ev.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    InputProps: {
      inputProps: {
        displayType: 'input'
      },
      classes: {
        root: classes.root,
        input: classes.input
      },
      inputComponent: inputComponent,
      ...InputPriceProps
    },
    value: price,
    onChange: ev => saveNumber({
      ev,
      setNumber: setPrice
    }),
    placeholder: 'Цена, руб.',
    variant: "outlined",
    size: "small",
    onFocus: () => {
      setSelected(!isSelected ? [...selected, {
        id: data.id,
        price: priceProps.defaultValue || 0,
        duration: durationProps.defaultValue || 0
      }] : [...selected]);
    }
  }, inputProps, priceProps)), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.divider
  }, " / "), /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    value: duration,
    onChange: ev => saveNumber({
      ev,
      setNumber: setDuration
    }),
    placeholder: 'Время, мин.',
    InputProps: {
      classes: {
        root: classes.root,
        input: classes.input
      },
      inputProps: {
        displayType: 'input',
        suffix: " \u043C\u0438\u043D"
      },
      inputComponent: inputComponent,
      ...InputDurationProps
    },
    onFocus: () => {
      setSelected(!isSelected ? [...selected, {
        id: data.id,
        price: priceProps.defaultValue || 0,
        duration: durationProps.defaultValue || 0
      }] : [...selected]);
    },
    variant: "outlined",
    size: "small"
  }, inputProps, durationProps))));
};
SubItem.propTypes = {
  data: _propTypes.default.object,
  onChange: _propTypes.default.func.isRequired,
  selected: _propTypes.default.array.isRequired,
  setSelected: _propTypes.default.func.isRequired,
  showInputs: _propTypes.default.bool,
  inputComponent: _propTypes.default.element,
  inputProps: _propTypes.default.object,
  showUnselectedPriceDuration: _propTypes.default.bool,
  priceProps: _propTypes.default.object,
  durationProps: _propTypes.default.object,
  showInputsForce: _propTypes.default.bool,
  InputPriceProps: _propTypes.default.object,
  InputDurationProps: _propTypes.default.bool
};
var _default = exports.default = SubItem;