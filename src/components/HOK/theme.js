import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            primary: {
                'background-color': '#1c7cff',
                color: 'white',
                '&:hover': {
                    'background-color': '#549cff',
                },
            },
            root: {
                'font-weight': 'bold',
                'font-size': '16px',
                'padding-left': '20px',
                'padding-right': '20px',
                'min-width': 120,
                margin: '0 5px',
            },
            disabled: {
                'background-color': 'rgba(0, 0, 0, 0.12)',
            },
            outlinedPrimary: {
                color: '#1c7cff',
                'border-color': '#1c7cff',
            },
            containedPrimary: {
                'background-color': '#1c7cff',
                color: 'white',
                '&:hover': {
                    'background-color': '#549cff !important',
                },
            },
        },
        MuiTab: {
            // Name of the rule

            root: {
                minHeight: '30px',
            },
        },
    },
});
