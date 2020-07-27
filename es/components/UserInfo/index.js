"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Rating = _interopRequireDefault(require("../Rating"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "userInfo__user": "styles-module_fq_userInfo__user___2-qew",
  "userInfo__icon": "styles-module_fq_userInfo__icon___3InyY",
  "userInfo__text": "styles-module_fq_userInfo__text___3Iw2A",
  "userInfo__user-status": "styles-module_fq_userInfo__user-status___1h-cX",
  "userInfo__user-name": "styles-module_fq_userInfo__user-name___1G282",
  "userInfo__rating-value": "styles-module_fq_userInfo__rating-value___3x1Nt",
  "userInfo__rating-star": "styles-module_fq_userInfo__rating-star___1nox5"
};

var UserInfo = function UserInfo(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      rating = _ref.rating,
      location = _ref.location,
      userStatus = _ref.userStatus,
      avatar = _ref.avatar,
      classNames = _ref.classNames,
      avatarOnClick = _ref.avatarOnClick,
      nameOnClick = _ref.nameOnClick,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [styles['userInfo__user'], classNames.container].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    onClick: avatarOnClick,
    imageUrl: avatar,
    className: [styles['userInfo__icon'], classNames.avatar || ''].join(' ')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: [styles['userInfo__text'], classNames.textBlock || ''].join(' ')
  }, userStatus && /*#__PURE__*/_react.default.createElement("div", {
    className: [styles['userInfo__user-status'], classNames.status || ''].join(' ')
  }, userStatus), /*#__PURE__*/_react.default.createElement("div", {
    onClick: nameOnClick,
    className: [styles['userInfo__user-name'], classNames.name || ''].join(' ')
  }, firstName + ' ' + lastName), location && /*#__PURE__*/_react.default.createElement("div", {
    className: [styles['userInfo__user-name'], classNames.location || ''].join(' ')
  }, location), rating && /*#__PURE__*/_react.default.createElement("div", {
    className: [styles['userInfo__rating'], classNames.rating].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    rating: parseFloat(rating),
    className: [styles['userInfo__rating-star'], classNames.ratingStars || ''].join(' ')
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: styles['userInfo__rating-value']
  }, rating)), children));
};

UserInfo.defaultProps = {
  nameOnClick: function nameOnClick() {},
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
var _default = UserInfo;
exports.default = _default;