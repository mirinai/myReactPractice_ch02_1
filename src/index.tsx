import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let pPhysicalDom = document.createElement('p');
pPhysicalDom.innerText = 'Hello physical DOM world!';
document.body.appendChild(pPhysicalDom);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pVirtualDom = React.createElement('p', null, 'Hello world!');

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(pVirtualDom);

let rootDiv = document.getElementById(`root`);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
