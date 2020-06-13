import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import App from './containters/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
