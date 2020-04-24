import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            primary: {
                'background-color': '#4688f1',
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
                color: '#4688f1',
                'border-color': '#4688f1',
            },
            containedPrimary: {
                'background-color': '#4688f1',
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
