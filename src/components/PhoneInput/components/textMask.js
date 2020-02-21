import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
function TextMask(props) {
	const { inputRef, countryCode, ...other } = props;

	return <input />;
}

TextMask.propTypes = {
	inputRef: PropTypes.func.isRequired,
	countryCode: PropTypes.string.isRequired,
};
export default TextMask;
