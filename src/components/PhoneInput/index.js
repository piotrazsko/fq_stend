import React from 'react';
import PropTypes from 'prop-types';
import PhoneInputDefault from 'react-phone-input-2';
import style from './style.module.scss';
import 'react-phone-input-2/lib/material.css';

export default function PhoneInput({
    value,
    onlyNumbers = true,
    onChange = () => {},
    name,
    disabled,
    countryCode = 'by',
    onlyCountries = ['ru', 'by'],
    classNames = { root: '' },
    inputProps,
}) {
    const [phone, setPhone] = React.useState(value);

    React.useEffect(() => {
        setPhone(value);
    }, [value]);
    React.useEffect(() => {
        if (phone) {
            onChange(onlyNumbers ? phone.replace(/\D/g, '') : phone);
        }
    }, [phone]);

    return (
        <PhoneInputDefault
            containerClass={['react-tel-input', style.commonContainer, classNames.root].join(' ')}
            inputClass={[style.container, classNames.input].join(' ')}
            dropdownClass={style.dropdownClass}
            currentStyle="material"
            country={countryCode}
            onlyCountries={onlyCountries}
            value={phone}
            placeholder="Телефон"
            disabled={disabled}
            name={name}
            inputProps={{ name, ...inputProps }}
            onChange={phone => setPhone(phone)}
        />
    );
}
PhoneInput.defaultProps = {
    inputProps: {},
};
PhoneInput.propTypes = {
    onlyNumbers: PropTypes.bool,
    value: PropTypes.string,
    countryCode: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    classNames: PropTypes.shape({
        root: PropTypes.string,
        input: PropTypes.string,
    }),
    onlyCountries: PropTypes.arrayOf(PropTypes.string),
};
