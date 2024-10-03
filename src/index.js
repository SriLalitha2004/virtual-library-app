import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LibraryProvider } from './context/LibraryContext';

ReactDOM.render(
  <LibraryProvider>
    <App />
  </LibraryProvider>,
  document.getElementById('root')
);
