import React from 'react';
import PropTypes from 'prop-types';
import MuiPhoneNumber from '../MuiPhoneNumber';
import NoSsr from '@material-ui/core/NoSsr';

export default function PhoneInput({
    value = '',
    onChange = () => {},
    name,
    disabled,
    countryCode = 'by',
    onlyCountries = ['ru', 'by'],
    countryCodes,
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
    const countryByPhone = React.useMemo(() => {
        switch (true) {
            case countryCodes.some(i => value.indexOf(i.code) === 0):
                return countryCodes.find(i => value.indexOf(i.code) === 0).country;
            default:
                return countryCode;
        }
    }, [value, onlyCountries, countryCodes]);
    return (
        <NoSsr defer>
            <MuiPhoneNumber
                countryCodeEditable
                defaultCountry={countryByPhone}
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
    countryCodes: [{ country: 'by', code: '375' }, { code: '7', country: 'ru' }],
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
    countryCodes: PropTypes.arrayOf(
        PropTypes.shape({ country: PropTypes.string, code: PropTypes.string })
    ),
};
