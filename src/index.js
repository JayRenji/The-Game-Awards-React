import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import Context from './shared/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <Context.Provider> */}
    <Router>
      <App />
    </Router>
    {/* </Context.Provider> */}
  </Provider>
);

