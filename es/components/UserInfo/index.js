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

var UserInfo = function UserInfo(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      rating = _ref.rating,
      location = _ref.location,
      userStatus = _ref.userStatus,
      avatar = _ref.avatar,
      classNames = _ref.classNames;
  return _react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user'], classNames.container].join(' ')
  }, _react.default.createElement(_Avatar.default, {
    imageUrl: avatar,
    className: [_stylesModule.default['userInfo__icon'], classNames.avatar].join(' ')
  }), _react.default.createElement("div", {
    className: _stylesModule.default['userInfo__text']
  }, userStatus && _react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user-status'], classNames.status].join(' ')
  }, userStatus), _react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user-name'], classNames.name].join(' ')
  }, firstName + ' ' + lastName), location && _react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__user-name'], classNames.location].join(' ')
  }, location), rating && _react.default.createElement("div", {
    className: [_stylesModule.default['userInfo__rating'], classNames.rating].join(' ')
  }, _react.default.createElement(_Rating.default, {
    rating: parseFloat(rating),
    className: _stylesModule.default['userInfo__rating-star']
  }), _react.default.createElement("span", {
    className: _stylesModule.default['userInfo__rating-value']
  }, rating))));
};

UserInfo.defaultProps = {
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
  rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  location: _propTypes.default.string,
  user_status: _propTypes.default.string,
  avatar: _propTypes.default.string,
  classNames: _propTypes.default.shape({
    container: _propTypes.default.string,
    status: _propTypes.default.string,
    name: _propTypes.default.string,
    location: _propTypes.default.string,
    rating: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    ratingText: _propTypes.default.string
  })
};
var _default = UserInfo;
exports.default = _default;