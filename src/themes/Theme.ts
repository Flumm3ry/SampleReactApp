import React from 'react';
import { Theme, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#ff7800',
        },
    },
});

export default theme;