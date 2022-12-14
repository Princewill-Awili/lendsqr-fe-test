import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './utils/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
);

