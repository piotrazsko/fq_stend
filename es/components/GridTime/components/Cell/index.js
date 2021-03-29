"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _core = require("@material-ui/core");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _DeleteForever = _interopRequireDefault(require("@material-ui/icons/DeleteForever"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _calendar = require("../../../../helpers/calendar.js");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var row = _ref.row,
      col = _ref.col,
      isSelected = _ref.isSelected,
      _ref$startTime = _ref.startTime,
      startTime = _ref$startTime === void 0 ? 0 : _ref$startTime,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 15 : _ref$interval,
      getMaster = _ref.getMaster,
      defaultCellOnclick = _ref.defaultCellOnclick,
      onMasterClick = _ref.onMasterClick,
      onMasterRightClick = _ref.onMasterRightClick,
      onCellRightClick = _ref.onCellRightClick;
  var time = startTime + (row - 1) * interval;
  var minutes = (time % 60).toString();
  var hour = Math.floor(time / 60);

  switch (true) {
    case isSelected:
      {
        return /*#__PURE__*/_react.default.createElement("div", null);
      }

    case col === 0 && row === 0:
      {
        return /*#__PURE__*/_react.default.createElement("div", null);
      }

    case col > 0 && row === 0:
      {
        var master = getMaster(col);
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.avatarContainer,
          onContextMenu: function onContextMenu(ev) {
            onMasterRightClick({
              ev: ev,
              master: master,
              interval: interval
            });
            ev.preventDefault();
          },
          onClick: function onClick(ev) {
            onMasterClick(master, ev);
          }
        }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
          className: _styleModule.default.avatar,
          alt: "Remy Sharp",
          src: master.avatar
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.name
        }, master.name));
      }

    case col === 0 && row > 0:
      {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.cellTime
        }, time % 60 == 0 ? "".concat(Math.floor(time / 60), ":").concat(minutes.length === 1 ? '0' + minutes : minutes) : '');
      }

    case col == 5 && row == 2:
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styleModule.default.test
      });

    default:
      {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.emptyCell,
          onContextMenu: function onContextMenu(ev) {
            onCellRightClick({
              ev: ev,
              time: {
                hour: hour,
                minutes: minutes
              },
              col: col,
              row: row,
              master: getMaster(col)
            });
            ev.preventDefault();
          },
          onClick: function onClick(ev) {
            defaultCellOnclick({
              time: {
                hour: hour,
                minutes: minutes
              },
              col: col,
              row: row
            });
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _styleModule.default.content
        }, hour + ':' + (minutes.length == 1 ? '0' + minutes : minutes)));
      }
  }
};

Cell.propTypes = {
  row: _propTypes.default.number,
  col: _propTypes.default.number,
  isSelected: _propTypes.default.bool
};
Cell.defaultProps = {
  defaultCellOnclick: function defaultCellOnclick() {}
};
var _default = Cell;
exports.default = _default;