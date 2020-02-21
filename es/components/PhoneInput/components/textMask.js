function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

function TextMask(props) {
  var inputRef = props.inputRef,
      countryCode = props.countryCode,
      other = _objectWithoutProperties(props, ["inputRef", "countryCode"]);

  return React.createElement("input", null);
}

TextMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired
};
export default TextMask;