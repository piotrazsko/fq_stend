"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
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
  };
});

var saveNumber = function saveNumber(_ref) {
  var setNumber = _ref.setNumber,
      ev = _ref.ev;
  var str = ev.target.value || '';
  setNumber(str.replace(/[^0-9.]/g, ''));
};

var SubItem = function SubItem(_ref2) {
  var data = _ref2.data,
      selected = _ref2.selected,
      setSelected = _ref2.setSelected,
      showInputs = _ref2.showInputs,
      inputComponent = _ref2.inputComponent,
      inputProps = _ref2.inputProps,
      priceProps = _ref2.priceProps,
      durationProps = _ref2.durationProps,
      showInputsForce = _ref2.showInputsForce,
      InputPriceProps = _ref2.InputPriceProps,
      InputDurationProps = _ref2.InputDurationProps;
  var classes = useStyles();

  var isSelected = _react.default.useMemo(function () {
    return selected.find(function (i) {
      return i.id === data.id;
    });
  }, [selected]);

  var setPrice = function setPrice(price) {
    setSelected([].concat(_toConsumableArray(selected.filter(function (i) {
      return i.id !== isSelected.id;
    })), [_objectSpread(_objectSpread({}, isSelected), {}, {
      price: price
    })]));
  };

  var setDuration = function setDuration(duration) {
    setSelected([].concat(_toConsumableArray(selected.filter(function (i) {
      return i.id !== isSelected.id;
    })), [_objectSpread(_objectSpread({}, isSelected), {}, {
      duration: duration
    })]));
  };

  var _ref3 = isSelected || {},
      price = _ref3.price,
      duration = _ref3.duration;

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
        return /*#__PURE__*/_react.default.createElement(_Icon.default, {
          width: "35px",
          height: "35px"
        });
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.item,
    key: data.id,
    onClick: function onClick() {
      setSelected(!isSelected ? [].concat(_toConsumableArray(selected), [showInputsForce ? {
        id: data.id,
        price: priceProps.defaultValue || 0,
        duration: durationProps.defaultValue || 0
      } : {
        id: data.id
      }]) : selected.filter(function (i) {
        return i.id !== data.id;
      }));
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, isSelected ? /*#__PURE__*/_react.default.createElement(_CheckCircle.default, {
    htmlColor: "#fa835f",
    className: classes.icon
  }) : getIcon(), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, " ", data.title)), (isSelected && showInputs || showInputsForce) && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.inputs,
    onClick: function onClick(ev) {
      ev.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    InputProps: _objectSpread({
      inputProps: {
        displayType: 'input'
      },
      classes: {
        root: classes.root,
        input: classes.input
      },
      inputComponent: inputComponent
    }, InputPriceProps),
    value: price,
    onChange: function onChange(ev) {
      return saveNumber({
        ev: ev,
        setNumber: setPrice
      });
    },
    placeholder: 'Цена, руб.',
    variant: "outlined",
    size: "small",
    onFocus: function onFocus() {
      setSelected(!isSelected ? [].concat(_toConsumableArray(selected), [{
        id: data.id,
        price: priceProps.defaultValue || 0,
        duration: durationProps.defaultValue || 0
      }]) : _toConsumableArray(selected));
    }
  }, inputProps, priceProps)), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.divider
  }, " / "), /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    value: duration,
    onChange: function onChange(ev) {
      return saveNumber({
        ev: ev,
        setNumber: setDuration
      });
    },
    placeholder: 'Время, мин.',
    InputProps: _objectSpread({
      classes: {
        root: classes.root,
        input: classes.input
      },
      inputProps: {
        displayType: 'input',
        suffix: " \u043C\u0438\u043D"
      },
      inputComponent: inputComponent
    }, InputDurationProps),
    onFocus: function onFocus() {
      setSelected(!isSelected ? [].concat(_toConsumableArray(selected), [{
        id: data.id,
        price: priceProps.defaultValue || 0,
        duration: durationProps.defaultValue || 0
      }]) : _toConsumableArray(selected));
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
var _default = SubItem;
exports.default = _default;