import React from 'react';
import PropTypes from 'prop-types';
import RatingComponent from 'react-rating';
import EmptyStar from '../../static/images/emptyStar.svg';
import FullStar from '../../static/images/fullStar.svg'; // console.log(fullStar);
// console.log(emptyStar);

var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      className = _ref.className;
  return React.createElement(RatingComponent, {
    initialRating: parseFloat(rating),
    readonly: true,
    fractions: 2,
    emptySymbol: EmptyStar,
    fullSymbol: FullStar
  });
};

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};
export default Rating;