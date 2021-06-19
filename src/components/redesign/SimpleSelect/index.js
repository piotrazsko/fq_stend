import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.action.hover,
    },
    outlined: { backgroundColor: '#fff', borderRadius: '6px' },
    checkboxContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
}));

const SimpleSelect = ({
    options,
    placeholder,
    onChange,
    value,
    variant = 'text',
    color,
    children,
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                    {options.map(i => (
                        <FormControlLabel
                            key={i.id || i.label}
                            control={
                                <Checkbox
                                    checked={i.id === get(value, 'id')}
                                    onChange={() => {
                                        handleClose();
                                        if (i.id !== get(value, 'id')) {
                                            onChange(i);
                                        } else {
                                            onChange(false);
                                        }
                                    }}
                                    color="primary"
                                />
                            }
                            label={i.label}
                        />
                    ))}
                </div>
            </Popover>
        </>
    );
};

SimpleSelect.defaultProps = {
    options: [],
    onChange: () => {},
};
SimpleSelect.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.element,
};

export default SimpleSelect;
