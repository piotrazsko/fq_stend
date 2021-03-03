import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import get from 'lodash/get';
import Rating from '@material-ui/lab/Rating';
import moment from 'moment';
import style from './style.module.scss';

const FeedbackItem = ({ data = {}, history, showDivider = true }) => {
    const { rating, master, feedback, user, created_at, skills, id, user_id } = data;
    return (
        <div className={[style.container, showDivider ? style.divider : ''].join(' ')}>
            <div
                className={style.containerInfo}
                onClick={() => {
                    history.push('/clients/' + user_id);
                }}
            >
                <Avatar src={get(data, 'user.avatar')} />
                <div className={style.infoBlock}>
                    <div className={style.name}>{` ${get(user, 'first_name') || ''} ${get(
                        user,
                        'last_name'
                    ) || ''}`}</div>
                    <div className={style.date}>
                        {moment(created_at).format('HH:mm, DD MMMM YYYY')}
                    </div>
                </div>
            </div>
            <div>
                <Rating size="small" name="simple-controlled" value={rating} readOnly />
                <div className={style.feedbackText}>{feedback}</div>
                <div className={style.masterName}>
                    <span className={style.title}>Мастер:</span>
                    <span className={style.value}>{`${get(master, 'first_name')} ${get(
                        master,
                        'last_name'
                    )}`}</span>
                </div>
                <div className={style.skills}>
                    <span className={style.title}>Услуги:</span>
                    <span className={style.value}>{skills.map(i => i.title).join(',')}</span>
                </div>
            </div>
        </div>
    );
};

FeedbackItem.propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
};

export default FeedbackItem;
