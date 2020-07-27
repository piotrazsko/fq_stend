import React from 'react';
import PropTypes from 'prop-types';
import RatingComponent from 'react-rating';
import EmptyStar from '../../static/images/emptyStar.svg';
import FullStar from '../../static/images/fullStar.svg';

var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      className = _ref.className;
  return /*#__PURE__*/React.createElement(RatingComponent, {
    initialRating: parseFloat(rating),
    readonly: true,
    fractions: 2,
    emptySymbol: /*#__PURE__*/React.createElement("img", {
      className: className,
      src: EmptyStar,
      alt: "\u043F\u0443\u0441\u0442\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    }),
    fullSymbol: /*#__PURE__*/React.createElement("img", {
      className: className,
      src: FullStar,
      alt: "\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"
    })
  });
};

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};
export default Rating;