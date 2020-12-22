import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Grid from '../Grid';
import Cell from './components/Cell';
import EventCell from './components/EventCell';
import DisabledCell from './components/DisabledCell';
import CurrentTime from './components/CurrentTime';

const TimeGrid = ({ interval = 10, masters, showCurrentTime = true, ...props }) => {
    const verticalSize = 5;
    const rowOffset = 1;
    const currentTime = new Date();
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
                return col === 0 ? style.firstColumn : '';
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
            {masters.reduce((acc, item, index) => {
                const { events } = item;
                const masterEvents = events.map(i => (
                    <EventCell
                        eventConfirmed={i.confirmed}
                        key={i.id}
                        startTime={i.startTime}
                        endTime={i.endTime}
                        verticalSize={verticalSize}
                        col={index + 1}
                        interval={interval}
                        rowOffset={rowOffset}
                        data={i}
                    />
                ));
                return [...acc, ...masterEvents];
            }, [])}
            {masters.reduce((acc, item, index) => {
                const { disabledTime } = item;
                const masterEvents = disabledTime.map(i => (
                    <DisabledCell
                        key={i.id}
                        startTime={i.startTime}
                        endTime={i.endTime}
                        verticalSize={verticalSize}
                        col={index + 1}
                        interval={interval}
                        rowOffset={rowOffset}
                    />
                ));
                return [...acc, ...masterEvents];
            }, [])}
            {showCurrentTime && (
                <CurrentTime
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
TimeGrid.propTypes = {};

export default TimeGrid;
