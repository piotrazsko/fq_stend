import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
// import { ReactComponent as Location } from '../../static/images/Location.svg';
import Location from '../Location';
import style from './style.module.scss';

const RatingLocation = ({ useAltText, altText, feedback_count, rating, city, className = '' }) => {
    return (
        <div className={[style.additionalInfo, className].join(' ')}>
            {feedback_count ? (
                <React.Fragment>
                    <StarIcon htmlColor="#FFBB2F" className={style.starIcon} />
                    <span className={style.rating}>{rating}</span>
                </React.Fragment>
            ) : (
                ''
            )}
            <span className={style.feedbacks}>
                {!useAltText || feedback_count ? `(${feedback_count})` : altText}
            </span>
            {city && <Location city={city} />}
        </div>
    );
};

RatingLocation.propTypes = {
    feedback_count: PropTypes.number,
    rating: PropTypes.number,
    city: PropTypes.string,
    className: PropTypes.string,
    altText: PropTypes.string,
    useAltText: PropTypes.bool,
};
RatingLocation.defaultProps = {
    altText: 'Нет  отзывов',
    useAltText: true,
};

export default RatingLocation;
