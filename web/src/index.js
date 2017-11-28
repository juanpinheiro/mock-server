import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from 'components/Root';

const store = configureStore();

store.subscribe( () => console.log(store.getState()));

ReactDOM.render(
    <Root store={ store } />,
    document.getElementById('root')
);
