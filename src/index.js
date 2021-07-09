import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyPolyfills, defineCustomElements } from '@imburseag/imburse-checkout/loader';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
