import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { createStore, applyMiddleware, compose } from 'redux';
// connect store to react app
import { Provider } from 'react-redux';

import cityReducer from './reducers/cityReducer';

// thunk
import thunk from 'redux-thunk'; 

const store = createStore(cityReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}> 
     <App />
  </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
