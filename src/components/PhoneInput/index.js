import React from 'react';
import PropTypes from 'prop-types';
import MuiPhoneNumber from 'material-ui-phone-number';
import NoSsr from '@material-ui/core/NoSsr';

export default function PhoneInput({
    value = '',
    onChange = () => {},
    name,
    disabled,
    countryCode = 'by',
    onlyCountries = ['ru', 'by'],
    placeholder = 'Телефон',
    label = 'Контактный номер',
    required,
    ...props
}) {
    const [phone, setPhone] = React.useState(value);
    React.useEffect(() => {
        setPhone(value);
    }, [value]);
    React.useEffect(() => {
        if (phone) {
            onChange(phone);
        }
    }, [phone]);

    return (
        <NoSsr defer>
            <MuiPhoneNumber
                countryCodeEditable
                defaultCountry={countryCode}
                onlyCountries={onlyCountries}
                margin="normal"
                fullWidth
                required={required}
                label={label}
                value={phone}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                onChange={phone => {
                    setPhone(phone);
                }}
                {...props}
            />
        </NoSsr>
    );
}
PhoneInput.defaultProps = {
    inputProps: {},
};
PhoneInput.propTypes = {
    value: PropTypes.string,
    countryCode: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    classNames: PropTypes.shape({
        root: PropTypes.string,
        input: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    onlyCountries: PropTypes.arrayOf(PropTypes.string),
};
