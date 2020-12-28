import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import moment from 'moment';

const CurrentTime = ({ time, cols, verticalSize, interval, rowOffset, setRef }) => {
    const ceil = (60 * interval) / (60 * verticalSize);

    const cellRowStart = (moment(time).get('minutes') + moment(time).get('hours') * 60) / ceil;
    const row = Math.ceil(cellRowStart) + rowOffset * verticalSize;
    const gridArea = `${row + 1} / ${2} / ${row + 2} / ${cols + 1}`;
    const gridArea2 = `${row + 1} / ${1} / ${row + 2} / ${2}`;
    const ref = React.useRef();

    React.useEffect(() => {
        if (ref.current) {
            setRef(ref.current);
        }
    }, [ref]);

    return (
        <React.Fragment>
            <div
                ref={ref}
                className={style.time}
                style={{
                    gridArea: gridArea2,
                }}
            >
                {moment(time).format('HH:mm')}
            </div>
            <div
                className={style.container}
                style={{
                    gridArea: gridArea,
                }}
            ></div>
        </React.Fragment>
    );
};

CurrentTime.propTypes = {
    // : PropTypes.
};
CurrentTime.defaultProps = {
    setRef: () => {},
};

export default CurrentTime;
