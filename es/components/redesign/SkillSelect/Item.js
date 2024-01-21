"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));
var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));
var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _SubItem = _interopRequireDefault(require("./SubItem"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
var _windowOrGlobal = require("window-or-global");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* global Set */
const Item = _ref => {
  let {
    showInputs,
    data,
    expanded,
    setExpanded,
    selected,
    setSelected,
    itemComponent,
    showSelectAll = false,
    showSelectedItemsCount = false,
    count,
    subItemProps,
    forceExpand
  } = _ref;
  const isExpanded = _react.default.useMemo(() => {
    return forceExpand ? true : expanded.find(i => i == data.id);
  }, [expanded]);
  const selectedFullPrepared = _react.default.useMemo(() => {
    return selected.map(i => i.id);
  }, [selected]);
  const selectedInCategory = _react.default.useMemo(() => {
    return data.sub_skills.reduce((acc, i) => {
      const item = selectedFullPrepared.find(item => item === i.id);
      return item ? [...acc, item] : acc;
    }, []);
  }, [selectedFullPrepared, data]);
  const isSelected = data.sub_skills.length === selectedInCategory.length;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.titleContainer, isExpanded ? _styleModule.default.expanded : ''].join(' '),
    onClick: () => setExpanded(!isExpanded ? [...expanded, data.id] : expanded.filter(i => i !== data.id))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleButtons
  }, showSelectAll && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: _styleModule.default.selectAllButton,
    size: "small",
    onClick: ev => {
      ev.stopPropagation();
      if (!isSelected) {
        setSelected(_windowOrGlobal.Array.from(new Set([...selectedFullPrepared, ...data.sub_skills.map(i => i.id)])).map(i => ({
          id: i
        })));
      } else {
        setSelected(_windowOrGlobal.Array.from(new Set([...selectedFullPrepared.filter(item => {
          return !data.sub_skills.find(i => i.id == item);
        })])).map(i => ({
          id: i
        })));
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
  }, count || selectedInCategory.length), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small"
  }, isExpanded ? /*#__PURE__*/_react.default.createElement(_ExpandLess.default, {
    htmlColor: '#FA835F'
  }) : /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    htmlColor: '#FA835F'
  })))), isExpanded && data.sub_skills.map(i => itemComponent ? ( /*#__PURE__*/_react.default.createElement(itemComponent, {
    ...i
  })) : /*#__PURE__*/_react.default.createElement(_SubItem.default, _extends({
    showInputs: showInputs,
    key: i.id,
    selected: selected,
    setSelected: setSelected,
    data: i
  }, subItemProps(i)))));
};
Item.defaultProps = {
  subItemProps: () => {}
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
  showSelectedItemsCount: _propTypes.default.bool,
  count: _propTypes.default.number,
  subItemProps: _propTypes.default.func,
  forceExpand: _propTypes.default.bool
};
var _default = exports.default = Item;