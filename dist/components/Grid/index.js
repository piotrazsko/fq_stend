"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const parseArr = (start, end) => {
  const arr = [];
  for (let i = start.col < end.col ? start.col : end.col; i <= (start.col < end.col ? end.col : start.col); i++) {
    for (let j = start.row < end.row ? start.row : end.row; j <= (start.row < end.row ? end.row : start.row); j++) {
      arr.push({
        col: i,
        row: j
      });
    }
  }
  return arr;
};
const Grid = _ref => {
  let {
    rows = 5,
    verticalSize = 1,
    cols = 5,
    cellProps = {},
    selected = [],
    onSelect = () => {},
    children = '',
    selectFromCol = 0,
    selectToCol = Infinity,
    selectFromRow = 0,
    selectToRow = Infinity,
    className = '',
    cellClassName = '',
    setColStyle = () => '',
    setRowStyle = () => '',
    setCellStyle = () => '',
    rowSize = '1fr',
    colSize = '1fr',
    setColSpan = () => 0,
    setRowSpan = () => 0,
    setCellStyleAttr = () => ({})
  } = _ref;
  const divs = rows * cols;
  const arr = Array(divs).fill(1);
  const [mouseDownCell, setMouseDown] = _react.default.useState(null);
  const [mouseEnterCell, setMouseEnter] = _react.default.useState([]);
  const onMouseDown = (cell, ev) => {
    if (ev.button === 0) {
      setMouseDown(cell);
    }
  };
  const onMouseUp = cell => {
    if (mouseDownCell) {
      onSelect(parseArr(mouseDownCell, cell).filter(item => {
        return item.col >= selectFromCol && item.row >= selectFromRow && item.col <= selectToCol && item.row <= selectToRow;
      }));
      setMouseDown(null);
      setMouseEnter([]);
    }
  };
  const onMouseEnter = cell => {
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
  }, arr.map((item, index) => {
    const key = "col_".concat(index);
    const col = index % cols;
    const row = Math.floor(index / cols);
    const isSelected = selected.find(item => item.col == col && item.row == row);
    const isHovered = mouseEnterCell.find(item => item.col == col && item.row == row);
    const Child = cellProps.children && typeof cellProps.children == 'function' ? _ref2 => {
      let {
        col,
        row
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(cellProps.children, {
        col: col,
        row: row
      });
    } : '';
    const gridArea = "".concat(row * verticalSize + 1, " / ").concat(col + 1, " / ").concat((row + 1) * verticalSize + 1 + setColSpan({
      col,
      row,
      verticalSize
    }), " / ").concat(col + 2 + setRowSpan({
      col,
      row,
      verticalSize
    }));
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      onMouseDown: ev => {
        onMouseDown({
          col,
          row
        }, ev);
      },
      onMouseUp: () => {
        onMouseUp({
          col,
          row
        });
      },
      onMouseEnter: ev => onMouseEnter({
        col,
        row
      }, ev),
      style: {
        'grid-area': gridArea,
        ...setCellStyleAttr({
          col,
          row,
          verticalSize
        })
      },
      className: [_styleModule.default.cell, isSelected ? _styleModule.default.selected : '', isHovered ? _styleModule.default.hovered : '', setColStyle(col), setRowStyle(row), setCellStyle({
        row,
        col
      }), cellClassName].join(' '),
      col: col,
      row: row,
      key: key
    }, item.props ? item.props : {}, cellProps), isSelected ? isSelected.children : '', cellProps.children && (typeof cellProps.children == 'function' ? /*#__PURE__*/_react.default.createElement(Child, {
      col: col,
      row: row
    }) : ( /*#__PURE__*/_react.default.cloneElement(cellProps.children, {
      row,
      col,
      isSelected: Boolean(isSelected)
    }))));
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
var _default = exports.default = Grid;