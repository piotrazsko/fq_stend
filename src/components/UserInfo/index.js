import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../Rating';
import Avatar from '../Avatar';
import styles from './styles.module.scss';

const UserInfo = ({
    firstName,
    lastName,
    rating,
    location,
    userStatus,
    avatar,
    classNames,
    avatarOnClick,
    nameOnClick,
    children,
}) => (
    <div className={[styles['userInfo__user'], classNames.container].join(' ')}>
        <Avatar
            onClick={avatarOnClick}
            imageUrl={avatar}
            className={[styles['userInfo__icon'], classNames.avatar || ''].join(' ')}
        />
        <div className={[styles['userInfo__text'], classNames.textBlock || ''].join(' ')}>
            {userStatus && (
                <div
                    className={[styles['userInfo__user-status'], classNames.status || ''].join(' ')}
                >
                    {userStatus}
                </div>
            )}

            {
                <div
                    onClick={nameOnClick}
                    className={[styles['userInfo__user-name'], classNames.name || ''].join(' ')}
                >
                    {firstName + ' ' + lastName}
                </div>
            }
            {location && (
                <div
                    className={[styles['userInfo__user-name'], classNames.location || ''].join(' ')}
                >
                    {location}
                </div>
            )}
            {rating && (
                <div className={[styles['userInfo__rating'], classNames.rating].join(' ')}>
                    <Rating
                        rating={parseFloat(rating)}
                        className={[
                            styles['userInfo__rating-star'],
                            classNames.ratingStars || '',
                        ].join(' ')}
                    />
                    <span className={styles['userInfo__rating-value']}>{rating}</span>
                </div>
            )}
            {children}
        </div>
    </div>
);
UserInfo.defaultProps = {
    nameOnClick: () => {},
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
        ratingText: '',
    },
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
        ratingStars: PropTypes.string,
    }),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default UserInfo;
