import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UtilitiesProvider } from './context/utilities_context';

ReactDOM.render(
  <UtilitiesProvider>
    <App />
  </UtilitiesProvider>,
  document.getElementById('root')
);
