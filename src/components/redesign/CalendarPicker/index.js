import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { Calendar } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';

import style from './style.module.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const useStyles = makeStyles(theme => ({
    buttonRoot: {
        padding: '12px 20px',
    },
    root: {
        backgroundColor: theme.palette.action.hover,
    },
    outlined: { backgroundColor: '#fff' },
    checkboxContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
}));

const CalendarPicker = ({
    onChange,
    date,
    disabled,
    color,
    variant = 'text',
    children,
    pickerProps,
    buttonProps,
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleClick = event => {
        if (!disabled) {
            setAnchorEl(event.currentTarget);
        }
    };
    const [state, setState] = React.useState(new Date());
    React.useEffect(() => {
        if (date) {
            setState(date);
        }
    }, [date]);

    const handleClose = date => {
        setAnchorEl(null);
        if (date) {
            onChange(date);
        }
    };
    return (
        <React.Fragment>
            {(children && React.cloneElement(children, { onClick: handleClick, disabled })) || (
                <Button
                    variant={variant}
                    classes={{
                        text: classes.root,
                        outlined: classes.outlined,
                        root: classes.buttonRoot,
                    }}
                    {...buttonProps}
                >
                    <div className={style.buttonContent}>
                        <div
                            size="small"
                            className={style.iconContainer}
                            onClick={() => {
                                onChange(
                                    moment(date)
                                        .subtract(1, 'days')
                                        .toDate()
                                );
                            }}
                        >
                            <ChevronLeftIcon fontSize="small" htmlColor={'#fa835f'} />
                        </div>
                        <div
                            className={style.headerButton}
                            onClick={handleClick}
                            color={color}
                            name="name"
                            size="small"
                        >
                            {`${moment(state).format('DD MMMM YYYY')}`}
                        </div>
                        <div
                            size="small"
                            className={style.iconContainer}
                            onClick={() => {
                                onChange(
                                    moment(date)
                                        .add(1, 'days')
                                        .toDate()
                                );
                            }}
                        >
                            <ChevronRightIcon fontSize="small" htmlColor={'#fa835f'} />
                        </div>
                    </div>
                </Button>
            )}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={style.container}>
                    <div>
                        {/*  <Calendar
                            color="#fa835f"
                            showPreview={false}
                            showMonthAndYearPickers={false}
                            showDateDisplay={false}
                            locale={locales['ru']}
                            onChange={item => {
                                handleClose(item);
                                setState(item);
                            }}
                            showSelectionPreview
                            date={date}
                            {...pickerProps}
                        />*/}
                    </div>
                </div>
            </Popover>
        </React.Fragment>
    );
};

export default CalendarPicker;

CalendarPicker.defaultProps = {
    options: [],
    onChange: () => {},
    pickerProps: {},
    buttonProps: {},
};
CalendarPicker.propTypes = {
    date: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.element,
    pickerProps: PropTypes.object,
    buttonProps: PropTypes.object,
};
