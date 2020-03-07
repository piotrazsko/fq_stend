function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../helpers/calendar.js';
var style = {
  "title": "style-module_fq_title___tFfDD",
  "resultContainer": "style-module_fq_resultContainer___10tCz",
  "cellTime": "style-module_fq_cellTime___1tycP",
  "cellDay": "style-module_fq_cellDay___37LA4",
  "menuItem": "style-module_fq_menuItem___1wNiM",
  "selectedCell": "style-module_fq_selectedCell___KT0hk",
  "gridContainer": "style-module_fq_gridContainer___2HoLV",
  "firstRow": "style-module_fq_firstRow___3qcYX",
  "firstColumn": "style-module_fq_firstColumn___1KiEl"
};

var Cell = function Cell(_ref) {
  var row = _ref.row,
      col = _ref.col,
      isSelected = _ref.isSelected,
      isMobile = _ref.isMobile,
      _ref$onClear = _ref.onClear,
      onClear = _ref$onClear === void 0 ? function (col) {
    console.log(col);
  } : _ref$onClear;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var onMenuClick = function onMenuClick(col) {
    onClear(col);
    handleClose();
  };

  switch (true) {
    case isSelected:
      return React.createElement("div", {
        className: style.selectedCell
      }, isMobile ? "".concat(row, ":00") : "".concat(row, ":00 \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043E"));

    case col === 0 && row > 0:
      return React.createElement("div", {
        className: style.cellTime
      }, row, ":00");

    case col > 0 && row === 0:
      return React.createElement("div", {
        className: style.cellDay
      }, React.createElement("div", null, isMobile ? WEEKDAYS_SHORT[col - 1] : WEEKDAYS_LONG[col - 1]), React.createElement("div", null, React.createElement(IconButton, {
        size: "small",
        onClick: handleClick
      }, React.createElement(MoreVertIcon, {
        style: {
          fontSize: 15
        }
      })), React.createElement(Menu, {
        id: "simple-menu",
        anchorEl: anchorEl,
        keepMounted: true,
        open: Boolean(anchorEl),
        onClose: handleClose
      }, React.createElement(MenuItem, {
        onClick: function onClick() {
          return onMenuClick(col);
        }
      }, React.createElement("div", {
        className: style.menuItem
      }, React.createElement(DeleteForeverIcon, {
        style: {
          fontSize: 18
        }
      }), " \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")))));

    default:
      return React.createElement("div", null);
  }
};

Cell.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  isSelected: PropTypes.bool,
  onClear: PropTypes.func,
  isMobile: PropTypes.bool
};
export default Cell;