import React from 'react'
import PropTypes from 'prop-types'
import RatingComponent from 'react-rating'
import emptyStar from '../../static/images/emptyStar.svg'
import fullStar from '../../static/images/fullStar.svg'

const InputRating = ({ rating = 0, className, onClick }) => (
	<RatingComponent
		initialRating={parseFloat(rating)}
		fractions={1}
		onClick={rating => onClick(rating)}
		emptySymbol={<img className={className} src={emptyStar} alt="пустая звезда" />}
		fullSymbol={<img className={className} src={fullStar} alt="заполненная звезда" />}
	/>
)

InputRating.propTypes = {
	rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
	onClick: PropTypes.func,
}

export default InputRating
