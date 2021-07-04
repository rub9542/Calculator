import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import calcReducer from './reducers/reducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import showReducer from './reducers/showred';

const rootReducer= combineReducers({
  elements:calcReducer,
  show:showReducer,
  // cart:cartReducer,
})


ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
