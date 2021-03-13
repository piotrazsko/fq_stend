import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme as defaultTheme } from './theme.js';
const FQ_Style = ({ children, theme = defaultTheme }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

FQ_Style.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any,
};

export default FQ_Style;