import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
const apiUrl = root.getAttribute('data-apiUrl') || 'http://localhost:5000/api/3/action/';
const apiKey = root.getAttribute('data-apiKey') || '123';
const ownerOrg = root.getAttribute('data-ownerOrg') || '123';

ReactDOM.render(
  <React.StrictMode>
    <App apiUrl={apiUrl} apiKey={apiKey} ownerOrg={ownerOrg} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
