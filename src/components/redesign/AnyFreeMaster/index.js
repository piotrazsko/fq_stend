import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Star from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';

const AnyFreeMaster = ({ data, onClick, classes }) => {
    const {
        title,
        subTitle,
        id,
    } = data;
    return (
        <div onClick={onClick} className={[style.item, classes.root].join(' ')} key={id}>
            <div className={style.titleContainer}>
                <Avatar className={style.colorDefault} alt=""/>
                <div className={[style.additionalInfo, classes.dataContainer].join(' ')}>
                    <div className={[style.title, classes.title].join(' ')}>
                        <p>{title}</p>
                        <p>{subTitle}</p>
                        <div className={style.topMasterSection}>
                            <Star className={style.starIconRelative} htmlColor='#FFFFFF'/>
                            <p>Топ мастер</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
AnyFreeMaster.defaultProps = {
    data: {
        title: 'Любой свободный мастер',
        subTitle: 'Цена услуг зависит от категории мастера',
    },
    onClick: () => {},
    classes: {
        root: '',
        rating: '',
        title: '',
        dataContainer: '',
    },
};

AnyFreeMaster.propTypes = {
    data:  PropTypes.object,
    onClick: PropTypes.func,
    classes: PropTypes.shape({
        root: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.string,
        dataContainer: PropTypes.string,
    }),
};

export default AnyFreeMaster;