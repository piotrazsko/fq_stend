"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Rating = _interopRequireDefault(require("../Rating"));
var _Avatar = _interopRequireDefault(require("../Avatar"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UserInfo = _ref => {
  let {
    firstName,
    lastName,
    rating,
    location,
    userStatus,
    avatar,
    classNames,
    avatarOnClick,
    nameOnClick,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user'], classNames.container].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    onClick: avatarOnClick,
    imageUrl: avatar,
    className: [_stylesModule.default['userInfo__icon'], classNames.avatar || ''].join(' ')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__text'], classNames.textBlock || ''].join(' ')
  }, userStatus && /*#__PURE__*/_react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user-status'], classNames.status || ''].join(' ')
  }, userStatus), /*#__PURE__*/_react.default.createElement("div", {
    onClick: nameOnClick,
    className: [_stylesModule.default['userInfo__user-name'], classNames.name || ''].join(' ')
  }, firstName + ' ' + lastName), location && /*#__PURE__*/_react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user-name'], classNames.location || ''].join(' ')
  }, location), rating && /*#__PURE__*/_react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__rating'], classNames.rating].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    rating: parseFloat(rating),
    className: [_stylesModule.default['userInfo__rating-star'], classNames.ratingStars || ''].join(' ')
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _stylesModule.default['userInfo__rating-value']
  }, rating)), children));
};
UserInfo.defaultProps = {
  nameOnClick: () => {},
  firstName: '',
  lastName: '',
  rating: undefined,
  location: '',
  classNames: {
    container: '',
    status: '',
    name: '',
    location: '',
    rating: '',
    ratingText: ''
  }
};
UserInfo.propTypes = {
  firstName: _propTypes.default.string,
  lastName: _propTypes.default.string,
  avatarOnClick: _propTypes.default.func,
  nameOnClick: _propTypes.default.func,
  rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  location: _propTypes.default.string,
  userStatus: _propTypes.default.string,
  avatar: _propTypes.default.string,
  classNames: _propTypes.default.shape({
    container: _propTypes.default.string,
    textBlock: _propTypes.default.string,
    avatar: _propTypes.default.string,
    status: _propTypes.default.string,
    name: _propTypes.default.string,
    location: _propTypes.default.string,
    rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    ratingText: _propTypes.default.string,
    ratingStars: _propTypes.default.string
  }),
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
var _default = exports.default = UserInfo;