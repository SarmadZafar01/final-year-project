import React from 'react';

import App from './component/app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/index';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Provider store={store}>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </Provider>
);