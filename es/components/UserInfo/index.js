import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import Avatar from '../Avatar';
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
  return React.createElement("div", {
    className: [styles['userInfo__user'], classNames.container].join(' ')
  }, React.createElement(Avatar, {
    onClick: avatarOnClick,
    imageUrl: avatar,
    className: [styles['userInfo__icon'], classNames.avatar || ''].join(' ')
  }), React.createElement("div", {
    className: [styles['userInfo__text'], classNames.textBlock || ''].join(' ')
  }, userStatus && React.createElement("div", {
    className: [styles['userInfo__user-status'], classNames.status || ''].join(' ')
  }, userStatus), React.createElement("div", {
    onClick: nameOnClick,
    className: [styles['userInfo__user-name'], classNames.name || ''].join(' ')
  }, firstName + ' ' + lastName), location && React.createElement("div", {
    className: [styles['userInfo__user-name'], classNames.location || ''].join(' ')
  }, location), rating && React.createElement("div", {
    className: [styles['userInfo__rating'], classNames.rating].join(' ')
  }, React.createElement(Rating, {
    rating: parseFloat(rating),
    className: [styles['userInfo__rating-star'], classNames.ratingStars || ''].join(' ')
  }), React.createElement("span", {
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
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatarOnClick: PropTypes.func,
  nameOnClick: PropTypes.func,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  location: PropTypes.string,
  userStatus: PropTypes.string,
  avatar: PropTypes.string,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    textBlock: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ratingText: PropTypes.string,
    ratingStars: PropTypes.string
  }),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
export default UserInfo;