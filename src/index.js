import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CommentApp from './containers/app';
import commentReducer from './reducers/index';

const store = createStore(commentReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.querySelector('#app')
);