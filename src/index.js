import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'


import reducers from './redux/reducers'

const stores = createStore(reducers)

ReactDOM.render(<Provider store={stores}><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister();
