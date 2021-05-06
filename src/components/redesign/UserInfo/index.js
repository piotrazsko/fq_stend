import React from 'react';
import gets from 'lodash/get';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Rating from '../Rating';
const color = '#fa835f';

const UserInfo = ({ data, onClick, isMaster = false, classes }) => {
    const {
        first_name,
        phone,
        last_name,
        rating,
        master_feedbacks_count,
        avatar,
        id,
        feedback_count,
    } = data;
    const isAdmin = false;
    return (
        !!data && (
            <div onClick={onClick} className={[style.item, classes.root].join(' ')} key={id}>
                <Avatar alt="" src={avatar || ''}>
                    {`${gets(first_name, '[0]', '')}${gets(last_name, '[0]', '')}`}
                </Avatar>
                <div className={style.titleContainer}>
                    <div>
                        <div className={[style.title, classes.title].join(' ')}>
                            {`${first_name || ''} ${last_name || ''}`}
                        </div>
                        {phone && !isMaster && <div className={style.phone}>+{phone}</div>}
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
                    </div>
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
                    {isAdmin && <span>Admin</span>}
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
