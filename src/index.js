import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


const mapStateToProps = (state) => {
  return {
    availableItems: state.availableItems,
    items: state.items,
    shippingCost: state.shippingCost
  };
}


var Wrapper = connect(mapStateToProps)(App);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
      <Wrapper />
  </Provider>
);

/*
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
