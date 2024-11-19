import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/global.css';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
