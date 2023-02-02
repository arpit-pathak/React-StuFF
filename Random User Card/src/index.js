import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const home = <h1>hello from index.js</h1>

// after update React 18
// createRoot(document.getElementById("root")).render(home);
// createRoot(document.getElementById("root")).render(<App/>);