import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/index'

import rootReducer from './reducers/index';
import ContainerApp from './containers/containerApp';

import './styles/index.css';//old
//import App from './App';//old

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
