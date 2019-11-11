import React from 'react';
import PropTypes from 'prop-types';
import RatingComponent from 'react-rating';
import emptyStar from '../../static/images/emptyStar.svg';
import fullStar from '../../static/images/fullStar.svg';

var InputRating = function InputRating(_ref) {
  var _ref$rating = _ref.rating,
      rating = _ref$rating === void 0 ? 0 : _ref$rating,
      className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(RatingComponent, {
    initialRating: parseFloat(rating),
    fractions: 1,
    onClick: onClick,
    emptySymbol: React.createElement("img", {
      className: className,
      src: emptyStar,
      alt: "\u043F\u0443\u0441\u0442\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    }),
    fullSymbol: React.createElement("img", {
      className: className,
      src: fullStar,
      alt: "\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    })
  });
};

InputRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  onClick: PropTypes.func
};
export default InputRating;