import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SelectDefault from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => {
    console.log(theme);
    return {
        root: {
            // display: 'flex',
            // flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 160,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        label: {
            padding: '0 2px',
        },
    };
});

export const optionsPreparingSelect = (arr, valueKey, labelKey) =>
    arr.map(item => {
        return typeof item === 'object'
            ? { value: item[valueKey], label: item[labelKey] }
            : { value: item, label: item };
    });

export default function Select({
    options,
    placeholder,
    onChange,
    className,
    fullWidth = false,
    label,
    variant = 'outlined',
    value,
    required,
    name = 'select',
    ...props
}) {
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    return (
        <FormControl
            required={required}
            variant={variant}
            className={clsx(classes.formControl, className)}
            fullWidth={fullWidth}
        >
            <InputLabel
                ref={inputLabel}
                variant={variant}
                classes={{ root: classes.label }}
                htmlFor="outlined-select-simple"
            >
                {label || placeholder}
            </InputLabel>
            <SelectDefault
                variant={variant}
                onChange={(ev, value) => {
                    onChange(ev, value);
                }}
                value={value}
                IconComponent={ExpandMoreIcon}
                input={
                    variant === 'outlined' ? (
                        <OutlinedInput
                            labelWidth={labelWidth}
                            name={name}
                            id="outlined-select-simple"
                        />
                    ) : (
                        <Input labelWidth={labelWidth} name={name} id="outlined-select-simple" />
                    )
                }
                {...props}
            >
                {options.map(item => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </SelectDefault>
        </FormControl>
    );
}
Select.defaultProps = {
    options: [],
    onChange: () => {},
};
Select.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    variant: PropTypes.string,
    label: PropTypes.string,
    fullWidth: PropTypes.bool,
};
