"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnyFreeMaster = function AnyFreeMaster(_ref) {
  var data = _ref.data,
      onClick = _ref.onClick,
      classes = _ref.classes;
  var title = data.title,
      subTitle = data.subTitle,
      id = data.id;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: [_styleModule.default.item, classes.root].join(' '),
    key: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    className: _styleModule.default.colorDefault,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.additionalInfo, classes.dataContainer].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.title, classes.title].join(' ')
  }, /*#__PURE__*/_react.default.createElement("p", null, title), /*#__PURE__*/_react.default.createElement("p", null, subTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.topMasterSection
  }, /*#__PURE__*/_react.default.createElement(_Star.default, {
    className: _styleModule.default.starIconRelative,
    htmlColor: "#FFFFFF"
  }), /*#__PURE__*/_react.default.createElement("p", null, "\u0422\u043E\u043F \u043C\u0430\u0441\u0442\u0435\u0440"))))));
};

AnyFreeMaster.defaultProps = {
  data: {
    title: 'Любой свободный мастер',
    subTitle: 'Цена услуг зависит от категории мастера'
  },
  onClick: function onClick() {},
  classes: {
    root: '',
    rating: '',
    title: '',
    dataContainer: ''
  }
};
AnyFreeMaster.propTypes = {
  data: _propTypes.default.object,
  onClick: _propTypes.default.func,
  classes: _propTypes.default.shape({
    root: _propTypes.default.string,
    title: _propTypes.default.string,
    rating: _propTypes.default.string,
    dataContainer: _propTypes.default.string
  })
};
var _default = AnyFreeMaster;
exports.default = _default;