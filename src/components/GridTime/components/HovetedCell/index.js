import React from 'react';
import PropTypes from 'prop-types';

const HoveredCell = ({ col }) => {
    const [showTime, setShowtime] = React.useState(false);
    console.log(showTime);
    return (
        <div
            style={{ width: '100%', textAlign: 'center' }}
            onMouseEnter={() => setShowtime(!showTime)}
            onMouseLeave={() => setShowtime(!showTime)}
        >
            {showTime ? '100' : '50'}
        </div>
    );
};

HoveredCell.propTypes = {};

export default HoveredCell;
