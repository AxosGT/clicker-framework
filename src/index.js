import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import setMyApp from './reducers/index';
import ContainerApp from './containers/containerApp';

import './styles/index.css';//old
//import App from './App';//old


let store = createStore(setMyApp);
ReactDOM.render(
  <Provider store={store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
