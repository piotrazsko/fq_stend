import React from "react";
import PropTypes from "prop-types";
import RatingComponent from "react-rating";
import emptyStar from "../../static/images/emptyStar.svg";
import fullStar from "../../static/images/fullStar.svg";


const Rating = ({
  rating,
  className
}) => ( <
  RatingComponent initialRating = {
    parseFloat(rating)
  }
  readonly fractions = {
    2
  }
  emptySymbol = {
    <
    img className = {
      className
    }
    src = {
      emptyStar
    }
    alt = "пустая звезда" / >
  }
  fullSymbol = {
    <
    img className = {
      className
    }
    src = {
      fullStar
    }
    alt = "заполненная звезда" / >
  }
  />
);

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};

export default Rating;