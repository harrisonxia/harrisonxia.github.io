import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import store from './store/index.js';
import App from './components/App.jsx';

const defaultPath = '/';

render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={defaultPath} element={<App />} />
        <Route path={`${defaultPath}example`} element={<App />} />
        <Route path="*" element={<Navigate to={defaultPath} />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);