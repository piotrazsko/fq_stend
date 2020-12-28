import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import style from './style.module.scss';
import Grid from '../Grid';
import Cell from './components/Cell';
import EventCell from './components/EventCell';
import DisabledCell from './components/DisabledCell';
import CurrentTime from './components/CurrentTime';

const TimeGrid = ({ interval = 10, masters, showCurrentTime = false, ...props }) => {
    const verticalSize = 5;
    const rowOffset = 1;
    const [currentTime, setTime] = React.useState(
        moment('17.18 24.12.2020', 'HH.mm DD.MM.YYYY').toDate()
    );
    React.useState(() => {
        if (showCurrentTime) {
            setInterval(() => {
                setTime(new Date());
            }, 30000);
        }
    }, []);
    const minTime = React.useMemo(() => {
        let minTime = Infinity;
        masters.forEach(item => {
            const { events } = item;
            events.forEach(i => {
                minTime = i.startTime < minTime ? i.startTime : minTime;
            });
        });
        return minTime;
    }, [masters]);

    const eventsArr = React.useMemo(() => {
        return masters.reduce((acc, item, index) => {
            const { events } = item;
            const masterEvents = events.map((i, j) => {
                return (
                    <EventCell
                        type
                        eventConfirmed={i.confirmed}
                        key={'event' + index + j}
                        startTime={i.startTime}
                        endTime={i.endTime}
                        verticalSize={verticalSize}
                        col={index + 1}
                        interval={interval}
                        rowOffset={rowOffset}
                        data={i}
                        setRef={ref => {
                            console.log(ref);
                            if (!showCurrentTime && minTime === i.startTime) {
                                ref.scrollIntoView({ block: 'center' });
                            }
                        }}
                    />
                );
            });
            return [...acc, ...masterEvents];
        }, []);
    }, [masters]);

    const disableArr = React.useMemo(() => {
        return masters.reduce((acc, item, index) => {
            const { disabledTime } = item;
            const masterEvents = disabledTime.map((i, j) => (
                <DisabledCell
                    key={'disable' + index + j}
                    startTime={i.startTime}
                    endTime={i.endTime}
                    verticalSize={verticalSize}
                    col={index + 1}
                    interval={interval}
                    rowOffset={rowOffset}
                />
            ));
            return [...acc, ...masterEvents];
        }, []);
    }, [masters]);

    return (
        <Grid
            className={style.gridContainer}
            setRowStyle={row => {
                switch (true) {
                    case row === 0:
                        return style.firstRow;
                    case row % (60 / interval) == 1:
                        return style.borderedCell;
                    default:
                        return style.cell;
                }
            }}
            setColStyle={col => {
                return col === 0 ? style.firstColumn : style.column;
            }}
            cols={masters.length + 1}
            verticalSize={verticalSize}
            rows={(60 / interval) * 24 + 1}
            cellProps={{
                children: (
                    <Cell
                        interval={interval}
                        getMaster={col => {
                            return masters[col - 1];
                        }}
                    />
                ),
            }}
            setCellStyle={cell => {
                // return cell;
            }}
        >
            {eventsArr}
            {disableArr}
            {showCurrentTime && (
                <CurrentTime
                    setRef={ref => {
                        if (showCurrentTime) {
                            ref.scrollIntoView({ block: 'center' });
                        }
                    }}
                    time={currentTime}
                    cols={masters.length + 1}
                    verticalSize={verticalSize}
                    interval={interval}
                    rowOffset={rowOffset}
                />
            )}
        </Grid>
    );
};
TimeGrid.defaultProps = {
    masters: [],
};
TimeGrid.propTypes = { masters: PropTypes.array };

export default TimeGrid;
