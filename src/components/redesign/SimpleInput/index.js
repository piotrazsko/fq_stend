import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.action.hover,
    },
    outlined: { backgroundColor: '#fff', borderRadius: '6px' },
    checkboxContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    input: {
        maxWidth: '45%',
        width: 120,
        // height: 24,
        // fontSize: 22,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: '0 10px 10px 10px',
    },
}));

const SimpleInput = ({
    placeholder,
    onChange,
    value,
    variant = 'text',
    color,
    children,
    isRange = true,
    inputStartProps = {},
    inputEndProps = {},
    inputsProps = {},
    confirmText = 'Ok',
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [start, setStart] = React.useState(isRange ? get(value, 'from') : value);
    const [end, setEnd] = React.useState(isRange ? get(value, 'to') : undefined);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {children ? (
                React.cloneElement(children, { onClick: handleClick })
            ) : (
                <Button
                    color={color}
                    aria-describedby={id}
                    onClick={handleClick}
                    classes={{ text: classes.root, outlined: classes.outlined }}
                    name="name"
                    variant={variant}
                    endIcon={<ExpandMoreIcon color={color === 'primary' ? undefined : 'primary'} />}
                >
                    {get(value, 'label', placeholder)}
                </Button>
            )}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={classes.checkboxContainer}>
                    <TextField
                        classes={{ root: classes.input }}
                        onChange={ev => {
                            setStart(ev.target.value);
                        }}
                        variant={'outlined'}
                        size="small"
                        placeholder="От"
                        label="От"
                        InputLabelProps={{ shrink: true }}
                        {...inputsProps}
                        {...inputStartProps}
                    />
                    {isRange && (
                        <TextField
                            classes={{ root: classes.input }}
                            onChange={ev => {
                                setEnd(ev.target.value);
                            }}
                            placeholder="До"
                            label="До"
                            variant={'outlined'}
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            {...inputsProps}
                            {...inputEndProps}
                        />
                    )}
                </div>
                <div className={classes.buttonContainer}>
                    <Button
                        onClick={() => {
                            if (isRange) {
                                onChange({ from: start, to: end });
                            } else {
                                onChange(start);
                            }
                            handleClose();
                        }}
                        size="small"
                        variant={'contained'}
                        color={'primary'}
                    >
                        {confirmText}
                    </Button>
                </div>
            </Popover>
        </>
    );
};

SimpleInput.defaultProps = {
    onChange: () => {},
    inputStartProps: {},
    inputEndProps: {},
    inputsProps: {},
    value: undefined,
};
SimpleInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.element,
    isRange: PropTypes.bool,
    inputStartProps: PropTypes.object,
    inputEndProps: PropTypes.object,
    inputsProps: PropTypes.object,
    confirmText: PropTypes.string,
};

export default SimpleInput;
