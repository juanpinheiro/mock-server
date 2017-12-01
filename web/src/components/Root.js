import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';
import Dashboard from './Dashboard';

const Root = ({ store }) => (
    <MuiThemeProvider>
        <Provider store={ store }>
            <Dashboard />
        </Provider>
    </MuiThemeProvider>
);

export default Root;
