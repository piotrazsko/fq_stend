import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const InfoCardLine = ({ title, value, className = '' }) => {
    return (
        <div className={[style.container, className].join(' ')}>
            <div className={style.title}>{title}</div>
            <div className={style.value}>{value}</div>
        </div>
    );
};

InfoCardLine.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
};

export default InfoCardLine;
