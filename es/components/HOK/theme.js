"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#fa835f'
    },
    secondary: {
      main: _green.default[500]
    }
  },
  typography: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: ['Montserrat'].join(','),
    h4: {
      fontFamily: ['Raleway'].join(','),
      fontSize: 32,
      fontWeight: 700
    },
    button: {
      'font-family': 'Montserrat',
      'font-size': '14px',
      'font-style': 'normal',
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: 14,
        'padding-left': '40px',
        'padding-right': '40px',
        'min-width': 120,
        margin: '0 5px',
        '&:disabled': {
          'background-color': 'rgba(0, 0, 0, 0.12)'
        },
        borderRadius: 12
      },
      contained: {},
      // disabled: {},
      // outlinedPrimary: {
      //     color: '#0080FF',
      //     'border-color': '#0080FF',
      // },
      outlinedPrimary: {
        color: 'black' // '&:hover': {
        //     'background-color': '#549cff !important',
        // },

      },
      containedPrimary: {
        color: 'white' // '&:hover': {
        //     'background-color': '#549cff !important',
        // },

      }
    },
    MuiFormLabel: {
      root: {
        fontWeight: 500,
        fontSize: 18 // color: '#000',

      }
    }
  }
});
exports.theme = theme;