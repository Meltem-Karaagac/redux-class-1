import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { counterStore} from "./redux";
import {Provider} from 'react-redux'

const store = counterStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
