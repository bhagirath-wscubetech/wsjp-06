import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App num={4}/>
    <App num={1}/>
    <App num={3}/>
  </React.StrictMode>
);
