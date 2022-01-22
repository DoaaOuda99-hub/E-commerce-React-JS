import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
ReactDOM.render(
    <Router>
      <Provider store={store}>
      <App />
    </Provider>
  </Router> ,
  document.getElementById('root')
);
