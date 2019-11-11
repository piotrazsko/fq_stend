import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import Avatar from '../Avatar';
import styles from './styles.module.scss';

var UserInfo = function UserInfo(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      rating = _ref.rating,
      location = _ref.location,
      userStatus = _ref.userStatus,
      avatar = _ref.avatar,
      classNames = _ref.classNames;
  return React.createElement("div", {
    className: [styles['userInfo__user'], classNames.container].join(' ')
  }, React.createElement(Avatar, {
    imageUrl: avatar,
    className: [styles['userInfo__icon'], classNames.avatar].join(' ')
  }), React.createElement("div", {
    className: styles['userInfo__text']
  }, userStatus && React.createElement("div", {
    className: [styles['userInfo__user-status'], classNames.status].join(' ')
  }, userStatus), React.createElement("div", {
    className: [styles['userInfo__user-name'], classNames.name].join(' ')
  }, firstName + ' ' + lastName), location && React.createElement("div", {
    className: [styles['userInfo__user-name'], classNames.location].join(' ')
  }, location), rating && React.createElement("div", {
    className: [styles['userInfo__rating'], classNames.rating].join(' ')
  }, React.createElement(Rating, {
    rating: parseFloat(rating),
    className: styles['userInfo__rating-star']
  }), React.createElement("span", {
    className: styles['userInfo__rating-value']
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
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  location: PropTypes.string,
  user_status: PropTypes.string,
  avatar: PropTypes.string,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ratingText: PropTypes.string
  })
};
export default UserInfo;