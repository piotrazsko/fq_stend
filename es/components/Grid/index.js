"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseArr = function parseArr(start, end) {
  var arr = [];

  for (var i = start.col < end.col ? start.col : end.col; i <= (start.col < end.col ? end.col : start.col); i++) {
    for (var j = start.row < end.row ? start.row : end.row; j <= (start.row < end.row ? end.row : start.row); j++) {
      arr.push({
        col: i,
        row: j
      });
    }
  }

  return arr;
};

var Grid = function Grid(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 5 : _ref$rows,
      _ref$verticalSize = _ref.verticalSize,
      verticalSize = _ref$verticalSize === void 0 ? 1 : _ref$verticalSize,
      _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? 5 : _ref$cols,
      _ref$cellProps = _ref.cellProps,
      cellProps = _ref$cellProps === void 0 ? {} : _ref$cellProps,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? [] : _ref$selected,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? '' : _ref$children,
      _ref$selectFromCol = _ref.selectFromCol,
      selectFromCol = _ref$selectFromCol === void 0 ? 0 : _ref$selectFromCol,
      _ref$selectToCol = _ref.selectToCol,
      selectToCol = _ref$selectToCol === void 0 ? Infinity : _ref$selectToCol,
      _ref$selectFromRow = _ref.selectFromRow,
      selectFromRow = _ref$selectFromRow === void 0 ? 0 : _ref$selectFromRow,
      _ref$selectToRow = _ref.selectToRow,
      selectToRow = _ref$selectToRow === void 0 ? Infinity : _ref$selectToRow,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$cellClassName = _ref.cellClassName,
      cellClassName = _ref$cellClassName === void 0 ? '' : _ref$cellClassName,
      _ref$setColStyle = _ref.setColStyle,
      setColStyle = _ref$setColStyle === void 0 ? function () {
    return '';
  } : _ref$setColStyle,
      _ref$setRowStyle = _ref.setRowStyle,
      setRowStyle = _ref$setRowStyle === void 0 ? function () {
    return '';
  } : _ref$setRowStyle,
      _ref$setCellStyle = _ref.setCellStyle,
      setCellStyle = _ref$setCellStyle === void 0 ? function () {
    return '';
  } : _ref$setCellStyle,
      _ref$rowSize = _ref.rowSize,
      rowSize = _ref$rowSize === void 0 ? '1fr' : _ref$rowSize,
      _ref$colSize = _ref.colSize,
      colSize = _ref$colSize === void 0 ? '1fr' : _ref$colSize,
      _ref$setColSpan = _ref.setColSpan,
      setColSpan = _ref$setColSpan === void 0 ? function () {
    return 0;
  } : _ref$setColSpan,
      _ref$setRowSpan = _ref.setRowSpan,
      setRowSpan = _ref$setRowSpan === void 0 ? function () {
    return 0;
  } : _ref$setRowSpan,
      _ref$setCellStyleAttr = _ref.setCellStyleAttr,
      setCellStyleAttr = _ref$setCellStyleAttr === void 0 ? function () {
    return {};
  } : _ref$setCellStyleAttr;
  var divs = rows * cols;
  var arr = Array(divs).fill(1);

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mouseDownCell = _React$useState2[0],
      setMouseDown = _React$useState2[1];

  var _React$useState3 = _react.default.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      mouseEnterCell = _React$useState4[0],
      setMouseEnter = _React$useState4[1];

  var _onMouseDown = function onMouseDown(cell, ev) {
    if (ev.button === 0) {
      setMouseDown(cell);
    }
  };

  var _onMouseUp = function onMouseUp(cell) {
    if (mouseDownCell) {
      onSelect(parseArr(mouseDownCell, cell).filter(function (item) {
        return item.col >= selectFromCol && item.row >= selectFromRow && item.col <= selectToCol && item.row <= selectToRow;
      }));
      setMouseDown(null);
      setMouseEnter([]);
    }
  };

  var _onMouseEnter = function onMouseEnter(cell) {
    if (mouseDownCell) {
      setMouseEnter(parseArr(mouseDownCell, cell));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.gridContainer, className].join(' '),
    style: {
      'grid-template-columns': "repeat(".concat(cols, ", ").concat(colSize, ")"),
      'grid-template-rows': "repeat(".concat(rows * verticalSize, ", ").concat(rowSize, ")")
    }
  }, arr.map(function (item, index) {
    var key = "col_".concat(index);
    var col = index % cols;
    var row = Math.floor(index / cols);
    var isSelected = selected.find(function (item) {
      return item.col == col && item.row == row;
    });
    var isHovered = mouseEnterCell.find(function (item) {
      return item.col == col && item.row == row;
    });
    var Child = cellProps.children && typeof cellProps.children == 'function' ? function (_ref2) {
      var col = _ref2.col,
          row = _ref2.row;
      return /*#__PURE__*/_react.default.createElement(cellProps.children, {
        col: col,
        row: row
      });
    } : '';
    var gridArea = "".concat(row * verticalSize + 1, " / ").concat(col + 1, " / ").concat((row + 1) * verticalSize + 1 + setColSpan({
      col: col,
      row: row,
      verticalSize: verticalSize
    }), " / ").concat(col + 2 + setRowSpan({
      col: col,
      row: row,
      verticalSize: verticalSize
    }));
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      onMouseDown: function onMouseDown(ev) {
        _onMouseDown({
          col: col,
          row: row
        }, ev);
      },
      onMouseUp: function onMouseUp() {
        _onMouseUp({
          col: col,
          row: row
        });
      },
      onMouseEnter: function onMouseEnter(ev) {
        return _onMouseEnter({
          col: col,
          row: row
        }, ev);
      },
      style: _objectSpread({
        'grid-area': gridArea
      }, setCellStyleAttr({
        col: col,
        row: row,
        verticalSize: verticalSize
      })),
      className: [_styleModule.default.cell, isSelected ? _styleModule.default.selected : '', isHovered ? _styleModule.default.hovered : '', setColStyle(col), setRowStyle(row), setCellStyle({
        row: row,
        col: col
      }), cellClassName].join(' '),
      col: col,
      row: row,
      key: key
    }, item.props ? item.props : {}, cellProps), isSelected ? isSelected.children : '', cellProps.children && (typeof cellProps.children == 'function' ? /*#__PURE__*/_react.default.createElement(Child, {
      col: col,
      row: row
    }) : /*#__PURE__*/_react.default.cloneElement(cellProps.children, {
      row: row,
      col: col,
      isSelected: Boolean(isSelected)
    })));
  }), children);
};

Grid.propTypes = {
  cols: _propTypes.default.number,
  rows: _propTypes.default.number,
  selected: _propTypes.default.arrayOf(_propTypes.default.shape({
    col: _propTypes.default.number,
    row: _propTypes.default.number,
    children: _propTypes.default.any,
    props: _propTypes.default.object
  })),
  verticalSize: _propTypes.default.number,
  setColStyle: _propTypes.default.func,
  setRowStyle: _propTypes.default.func,
  setCellStyle: _propTypes.default.func,
  selectFromCol: _propTypes.default.number,
  selectToCol: _propTypes.default.number,
  selectFromRow: _propTypes.default.number,
  selectToRow: _propTypes.default.number,
  cellClassName: _propTypes.default.string,
  className: _propTypes.default.string,
  cellProps: _propTypes.default.object,
  children: _propTypes.default.any,
  onSelect: _propTypes.default.func,
  rowSize: _propTypes.default.string,
  colSize: _propTypes.default.string
};
var _default = Grid;
exports.default = _default;