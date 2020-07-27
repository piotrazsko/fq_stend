function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
var style = {
  "gridContainer": "style-module_fq_gridContainer___2eraD",
  "cell": "style-module_fq_cell___3gC2k",
  "selected": "style-module_fq_selected___15phj",
  "hovered": "style-module_fq_hovered___1DUi6"
};

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
      colSize = _ref$colSize === void 0 ? '1fr' : _ref$colSize;
  var divs = rows * cols;
  var arr = Array(divs).fill(1);

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mouseDownCell = _React$useState2[0],
      setMouseDown = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      mouseEnterCell = _React$useState4[0],
      setMouseEnter = _React$useState4[1];

  var _onMouseDown = function onMouseDown(cell) {
    setMouseDown(cell);
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

  var onMouseLeave = function onMouseLeave() {// setMouseDown(null);
  };

  var _onMouseEnter = function onMouseEnter(cell) {
    if (mouseDownCell) {
      setMouseEnter(parseArr(mouseDownCell, cell));
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    onPointerLeave: onMouseLeave,
    className: [style.gridContainer, className].join(' '),
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
      return /*#__PURE__*/React.createElement(cellProps.children, {
        col: col,
        row: row
      });
    } : '';
    return /*#__PURE__*/React.createElement("div", _extends({
      onMouseDown: function onMouseDown() {
        _onMouseDown({
          col: col,
          row: row
        });
      },
      onMouseUp: function onMouseUp() {
        _onMouseUp({
          col: col,
          row: row
        });
      },
      onMouseEnter: function onMouseEnter() {
        return _onMouseEnter({
          col: col,
          row: row
        });
      },
      style: {
        'grid-area': "".concat(row * verticalSize + 1, " / ").concat(col + 1, " / ").concat(row * verticalSize + 1 + verticalSize, " / ").concat(col + 2)
      },
      className: [style.cell, isSelected ? style.selected : '', isHovered ? style.hovered : '', setColStyle(col), setRowStyle(row), setCellStyle({
        row: row,
        col: col
      }), cellClassName].join(' '),
      col: col,
      row: row,
      key: key
    }, item.props ? item.props : {}, cellProps), isSelected ? isSelected.children : '', cellProps.children && (typeof cellProps.children == 'function' ? /*#__PURE__*/React.createElement(Child, {
      col: col,
      row: row
    }) : /*#__PURE__*/React.cloneElement(cellProps.children, {
      row: row,
      col: col,
      isSelected: Boolean(isSelected)
    })));
  }), children);
};

Grid.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  selected: PropTypes.arrayOf(PropTypes.shape({
    col: PropTypes.number,
    row: PropTypes.number,
    children: PropTypes.any,
    props: PropTypes.object
  })),
  verticalSize: PropTypes.number,
  setColStyle: PropTypes.func,
  setRowStyle: PropTypes.func,
  setCellStyle: PropTypes.func,
  selectFromCol: PropTypes.number,
  selectToCol: PropTypes.number,
  selectFromRow: PropTypes.number,
  selectToRow: PropTypes.number,
  cellClassName: PropTypes.string,
  className: PropTypes.string,
  cellProps: PropTypes.object,
  children: PropTypes.any,
  onSelect: PropTypes.func,
  rowSize: PropTypes.string,
  colSize: PropTypes.string
};
export default Grid;