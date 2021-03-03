import React from 'react';
import PropTypes from 'prop-types';
import { LocationIcon } from '../../Icons';

import style from './style.module.scss';

const Location = ({ city, className = '' }) => {
    return (
        <div className={[style.container, className].join(' ')}>
            {city && <LocationIcon className={style.locationIcon} />}
            <span className={style.city}>{city}</span>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string,
    className: PropTypes.string,
};

export default Location;
