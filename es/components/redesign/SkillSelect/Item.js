"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _Restaurant = _interopRequireDefault(require("@material-ui/icons/Restaurant"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _SubItem = _interopRequireDefault(require("./SubItem"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _windowOrGlobal = require("window-or-global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Item = function Item(_ref) {
  var showInputs = _ref.showInputs,
      data = _ref.data,
      expanded = _ref.expanded,
      setExpanded = _ref.setExpanded,
      selected = _ref.selected,
      setSelected = _ref.setSelected,
      itemComponent = _ref.itemComponent,
      _ref$showSelectAll = _ref.showSelectAll,
      showSelectAll = _ref$showSelectAll === void 0 ? false : _ref$showSelectAll,
      _ref$showSelectedItem = _ref.showSelectedItemsCount,
      showSelectedItemsCount = _ref$showSelectedItem === void 0 ? false : _ref$showSelectedItem;

  var isExpanded = _react.default.useMemo(function () {
    return expanded.find(function (i) {
      return i == data.id;
    });
  }, [expanded]);

  var selectedFullPrepared = _react.default.useMemo(function () {
    return selected.map(function (i) {
      return i.id;
    });
  }, [selected]);

  var selectedInCategory = _react.default.useMemo(function () {
    return data.sub_skills.reduce(function (acc, i) {
      var item = selectedFullPrepared.find(function (item) {
        return item === i.id;
      });
      return item ? [].concat(_toConsumableArray(acc), [item]) : acc;
    }, []);
  }, [selectedFullPrepared, data]);

  var isSelected = data.sub_skills.length === selectedInCategory.length;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.titleContainer, isExpanded ? _styleModule.default.expanded : ''].join(' '),
    onClick: function onClick() {
      return setExpanded(!isExpanded ? [].concat(_toConsumableArray(expanded), [data.id]) : expanded.filter(function (i) {
        return i !== data.id;
      }));
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleButtons
  }, showSelectAll && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: _styleModule.default.selectAllButton,
    size: "small",
    onClick: function onClick(ev) {
      ev.stopPropagation();

      if (!isSelected) {
        setSelected(_windowOrGlobal.Array.from(new Set([].concat(_toConsumableArray(selectedFullPrepared), _toConsumableArray(data.sub_skills.map(function (i) {
          return i.id;
        }))))).map(function (i) {
          return {
            id: i
          };
        }));
      } else {
        setSelected(_windowOrGlobal.Array.from(new Set(_toConsumableArray(selectedFullPrepared.filter(function (item) {
          return !data.sub_skills.find(function (i) {
            return i.id == item;
          });
        })))).map(function (i) {
          return {
            id: i
          };
        }));
      }
    }
  }, isSelected ? /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
    htmlColor: '#FA835F'
  }) : /*#__PURE__*/_react.default.createElement(_CheckBoxOutlineBlank.default, {
    htmlColor: '#FA835F'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.title
  }, data.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.icons
  }, showSelectedItemsCount && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.count
  }, selectedInCategory.length), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small"
  }, isExpanded ? /*#__PURE__*/_react.default.createElement(_ExpandLess.default, {
    htmlColor: '#FA835F'
  }) : /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    htmlColor: '#FA835F'
  })))), isExpanded && data.sub_skills.map(function (i) {
    return itemComponent ? /*#__PURE__*/_react.default.createElement(itemComponent, _objectSpread({}, i)) : /*#__PURE__*/_react.default.createElement(_SubItem.default, {
      showInputs: showInputs,
      key: i.id,
      selected: selected,
      setSelected: setSelected,
      data: i
    });
  }));
};

Item.propTypes = {
  showInputs: _propTypes.default.bool,
  itemComponent: _propTypes.default.any,
  data: _propTypes.default.object,
  expanded: _propTypes.default.bool,
  setExpanded: _propTypes.default.bool,
  selected: _propTypes.default.array,
  setSelected: _propTypes.default.func,
  showSelectAll: _propTypes.default.bool,
  showSelectedItemsCount: _propTypes.default.bool
};
var _default = Item;
exports.default = _default;