import React from 'react';
import gets from 'lodash/get';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import {MONTHS_SHORT, NOW_DATE} from '../../../helpers/calendar';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Rating from '../Rating';
const color = '#fa835f';

const UserInfo = ({ data, onClick, isMaster = false, classes }) => {
    const {
        first_name,
        last_name,
        rating,
        master_feedbacks_count,
        avatar,
        id,
        feedback_count,
        city,
        description,
        closest_booking_time
    } = data;
    const isAdmin = false;
    return (
        !!data && (
            <div onClick={onClick} className={[style.item, classes.root].join(' ')} key={id}>
                <div className={style.titleContainer}>
                    <Avatar alt="" src={avatar || ''}>
                        {`${gets(first_name, '[0]', '')}${gets(last_name, '[0]', '')}`}
                    </Avatar>
                    <div className={[style.title, classes.title].join(' ')}>
                        {`${first_name || ''} ${last_name || ''}`}
                    </div>
                </div>
                <div className={[style.additionalInfo, classes.dataContainer].join(' ')}>
                    <div className={[style.rating, classes.rating].join(' ')}>
                        <Rating
                            data={{
                                user_rating: rating,
                                master_feedbacks_count: feedback_count || master_feedbacks_count,
                            }}
                        />
                        {city || ''}
                    </div>
                    {isAdmin && <span>Admin</span>}
                </div>
                <div className={[style.descriptionContainer, classes.descriptionContainer].join(' ')}>
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    <p>Ближайшее свободное время</p>
                    <div className={[style.bookingTimeContainer, classes.bookingTimeContainer].join(' ')}>
                        {closest_booking_time.map((date, index) => {
                            const dayNow = String(NOW_DATE()) === date.split(' ')[0];

                            return (
                                <div className={[style.bookingTime, classes.bookingTime].join(' ')} key={index}>
                                    {dayNow ? 'Сегодня' : date.split('-')[2].split(' ')[0]}
                                    {' '}
                                    {!dayNow && MONTHS_SHORT[Number(date.split('-')[1])-1]}
                                    {' '}
                                    {date.split('-')[2].split(' ')[1].slice(0,5)}
                                </div>
                            )} 
                        )}
                    </div>
                </div>
            </div>
        )
    );
};
UserInfo.defaultProps = {
    data: {},
    onClick: () => {},
    classes: {
        root: '',
        rating: '',
        title: '',
        dataContainer: '',
    },
};

UserInfo.propTypes = {
    onClick: PropTypes.func,
    isMaster: PropTypes.bool,
    classes: PropTypes.shape({
        root: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.string,
        dataContainer: PropTypes.string,
    }),
};

export default UserInfo;
                    {/*!isMaster && (
                        <div className={style.items}>
                            <div>
                                <span className={style.name}>Визиты:</span>
                                <span className={style.value}>{`${user_events_count || 0}`}</span>
                            </div>
                            {last_event_date && (
                                <div>
                                    <span className={style.name}>Последний:</span>
                                    <span className={style.value}>
                                        {last_event_date
                                            ? ` ${moment(last_event_date).format('DD MMMM YYYY')}`
                                            : ' Нет визитов'}
                                    </span>
                                </div>
                            )}
                        </div>
                    )*/}