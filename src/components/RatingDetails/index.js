import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import style from './style.module.scss';

const BorderLinearProgress = withStyles(theme => ({
    root: {
        height: 4,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#FFBB2F',
    },
}))(LinearProgress);

const RatingDetails = ({ data }) => {
    const { count, ratings: rating = [] } = data;
    const ratingValue =
        (rating[5] * 5 + rating[4] * 4 + rating[3] * 3 + rating[2] * 2 + rating[1] * 1) / count;
    return (
        !!rating && (
            <div className={style.container}>
                <div className={style.topLine}>
                    {ratingValue}
                    /5
                    <Rating className={style.rating} value={ratingValue} size="small" />
                    <span className={style.feedbacksCount}>{count} отзыв/-ов</span>
                </div>
                <div className={style.lines}>
                    <div className={style.line}>
                        <span className={style.mark}>5</span>
                        <StarIcon className={style.icon} htmlColor="#FFBB2F" />
                        <div className={style.yellow}>
                            <BorderLinearProgress
                                variant="determinate"
                                value={(rating[5] / count) * 100}
                            />
                        </div>
                        <span className={style.count}>{rating[5]}</span>
                    </div>
                    <div className={style.line}>
                        <span className={style.mark}>4</span>
                        <StarIcon className={style.icon} htmlColor="#FFBB2F" />
                        <div className={style.yellow}>
                            <BorderLinearProgress
                                variant="determinate"
                                value={(rating[4] / count) * 100}
                            />
                        </div>
                        <span className={style.count}>{rating[4]}</span>
                    </div>
                    <div className={style.line}>
                        <span className={style.mark}>3</span>
                        <StarIcon className={style.icon} htmlColor="#FFBB2F" />
                        <div className={style.yellow}>
                            <BorderLinearProgress
                                variant="determinate"
                                value={(rating[3] / count) * 100}
                            />
                        </div>
                        <span className={style.count}>{rating[3]}</span>
                    </div>
                    <div className={style.line}>
                        <span className={style.mark}>2</span>
                        <StarIcon className={style.icon} htmlColor="#FFBB2F" />
                        <div className={style.yellow}>
                            <BorderLinearProgress
                                variant="determinate"
                                value={(rating[2] / count) * 100}
                            />
                        </div>
                        <span className={style.count}>{rating[2]}</span>
                    </div>
                    <div className={style.line}>
                        <span className={style.mark}>1</span>
                        <StarIcon className={style.icon} htmlColor="#FFBB2F" />
                        <div className={style.yellow}>
                            <BorderLinearProgress
                                variant="determinate"
                                value={(rating[1] / count) * 100}
                            />
                        </div>
                        <span className={style.count}>{rating[1]}</span>
                    </div>
                </div>
            </div>
        )
    );
};

RatingDetails.propTypes = {
    data: PropTypes.shape({ rating: PropTypes.array, count: PropTypes.number }),
};

export default RatingDetails;
