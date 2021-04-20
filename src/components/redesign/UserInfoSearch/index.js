import React from 'react';
import gets from 'lodash/get';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Rating from '../RatingLocation';

const UserInfoSearch = ({ data, onClick, isMaster = false }) => {
    const {
        first_name,
        last_name,
        rating,
        master_feedbacks_count,
        avatar,
        id,
        feedback_count,
        city,
        info = '',
    } = data;

    return (
        !!data && (
            <div onClick={onClick} className={style.item} key={id}>
                <Avatar alt="" src={avatar || ''}>
                    {`${gets(first_name, '[0]', '')}${gets(last_name, '[0]', '')}`}
                </Avatar>
                <div className={style.infoContainer}>
                    <div className={style.info}>
                        <div className={style.title}>
                            {`${first_name || ''} ${last_name || ''}`}
                        </div>
                    </div>
                    <Rating
                        rating={rating}
                        feedback_count={feedback_count || master_feedbacks_count}
                        city={city}
                    />
                </div>

                <div className={style.additionalInfo}>{info}</div>
            </div>
        )
    );
};
UserInfoSearch.defaultProps = {
    data: {},
    onClick: () => {},
};

UserInfoSearch.propTypes = {
    onClick: PropTypes.func,
    isMaster: PropTypes.bool,
};

export default UserInfoSearch;
