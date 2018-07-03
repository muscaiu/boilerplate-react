import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import configureStore from './store';
import createRouter from './router/createRouter';
import registerServiceWorker from './registerServiceWorker';

const Router = createRouter(browserHistory);

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router />
    </Provider >,
    document.getElementById('root')
);
registerServiceWorker();
