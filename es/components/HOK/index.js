import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme as defaultTheme } from './theme.js';

var FQ_Style = function FQ_Style(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? defaultTheme : _ref$theme;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};

FQ_Style.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any
};
export default FQ_Style;